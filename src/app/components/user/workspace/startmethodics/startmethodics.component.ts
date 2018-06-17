import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserMethodicsService} from '../../services/usermethodics.service';
import {MethodicsWithQuestions} from '../../../../domain/methodics/methodicsWithQuestions';
import {LoadingPictureController} from '../../../../services/loadingPictureController';
import {Question} from '../../../../domain/methodics/questions';
import {PassingTest} from '../../../../domain/methodics/passingTest';
import {AnswerQuestion} from '../../../../domain/methodics/answerQuestion';

declare var $: any;

@Component({
  selector: 'app-startmethodics',
  templateUrl: './startmethodics.component.html',
  styleUrls: ['./startmethodics.component.css']
})
export class StartMethodicsComponent implements OnInit {
  methodicsStarting: MethodicsWithQuestions;
  answerValues: number[];
  errorMessage: string;
  methodicsEnd = false;

  constructor(private router: Router,
              private currentRouterState: ActivatedRoute,
              private methodicsService: UserMethodicsService) { }
  private createRangeArray(start: number, end: number) {
     return Array.from({length: (end - start)}, (v, k) => k + start);
  }
  ngOnInit() {
     LoadingPictureController.stopLoadingPicture();
      const id: string = this.currentRouterState.snapshot.paramMap.get('id');
      console.log(id);
      LoadingPictureController.startLoadingPicture();
      this.methodicsService.getMethodicsById(id).subscribe(
        x => {
          this.methodicsStarting = x;
          this.answerValues = this.createRangeArray(Number.parseInt(x['leftValueBorder']), Number.parseInt(x['rightValueBorder'] + 1));
          LoadingPictureController.stopLoadingPicture();
        }
      );
  }

  selectValue(question: Question, value: number) {
    question.resultValue = value;
  }
  sendMethodics() {
    if (this.validateMethodics()) {
      const answers: AnswerQuestion[] = [];
      for (const answer of this.methodicsStarting.questions) {
         answers.push(
           {
              questionNumber: answer.number,
              value: answer.resultValue
           }
         );
      }

      const passFact: PassingTest = {
        methodicsId: this.methodicsStarting.id,
        answers: answers
      };
      LoadingPictureController.startLoadingPicture();
      this.methodicsService.sendResultMethodics(passFact, x => this.errorMessage = x,
        () => {
          this.methodicsEnd = true;
          this.errorMessage = null;
          LoadingPictureController.stopLoadingPicture();
        });
    } else {
      this.errorMessage = 'Ошибка. Остались неотвеченные вопросы';
    }
  }
  navigateToListMethodics() {
    this.router.navigateByUrl('/user/workspace/methodics');
  }
  validateMethodics(): boolean {
    for (const answer of this.methodicsStarting.questions) {
      if (answer.resultValue === undefined) {
        return false;
      }
    }
    return true;
  }
  openModal() {
      $('#openModal').click();
  }
}
