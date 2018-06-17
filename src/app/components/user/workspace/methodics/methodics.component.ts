import {Component, OnDestroy, OnInit} from '@angular/core';
import {DescriptionMethodics} from '../../../../domain/methodics/descriptionMethodics';
import {UserMethodicsService} from '../../services/usermethodics.service';
import {Router} from '@angular/router';
import {LoadingPictureController} from '../../../../services/loadingPictureController';
import {StateSaverService} from '../../../../services/statesaver.service';

@Component({
  selector: 'app-methodics',
  templateUrl: './methodics.component.html',
  styleUrls: ['./methodics.component.css']
})
export class MethodicsComponent implements OnInit {
  errorOpenMethodicsMessage: string;
  errorPassedMethodicsMessage: string;
  openMethodics: DescriptionMethodics[];
  passedMethodics: DescriptionMethodics[];
  constructor(private methodicsService: UserMethodicsService,
              private router: Router) { }

  ngOnInit() {
    LoadingPictureController.stopLoadingPicture();
    this.getMethodics();
  }


  getMethodics() {
    this.errorOpenMethodicsMessage = null;
    this.errorPassedMethodicsMessage = null;
    LoadingPictureController.startLoadingPicture();
    this.methodicsService.getAvailableMethodics().subscribe(x => {
      this.openMethodics = x;
      if (this.openMethodics.length === 0) {
        this.errorOpenMethodicsMessage = 'Пока нет открытых методик';
      }
      LoadingPictureController.stopLoadingPicture();
      });
    this.methodicsService.getPassedMethoducs().subscribe(x => {
      this.passedMethodics = x;
      if (this.passedMethodics.length === 0) {
        this.errorPassedMethodicsMessage = 'Пока нет пройденных методик';
      }
      LoadingPictureController.stopLoadingPicture();
    });
  }

  startMethodics(id) {
     this.router.navigateByUrl('startMethodics/' + id);
  }
}
