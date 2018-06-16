import { Component, OnInit } from '@angular/core';
import {FullMethodics, MethodicsKeyDto, QuestionDto} from '../../../../domain/methodics/fullMethodics';
import {text} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-methodicsbuilder',
  templateUrl: './methodicsbuilder.component.html',
  styleUrls: ['./methodicsbuilder.component.css']
})
export class MethodicsbuilderComponent implements OnInit {

  methodics: FullMethodics = new FullMethodics();

  constructor() { }

  ngOnInit() {
  }

  createQuestion(numberQuestion: number) {
    this.methodics.questionsDtos.push(
      {
        number: numberQuestion,
        text: ''
      } as QuestionDto
    );
  }

  setNumberToQuestion(question: QuestionDto, num: number) {
    question.number = num;
  }

  deleteQuestion(question: QuestionDto) {
     const index = this.methodics.questionsDtos.indexOf(question);
     if (index >= 0) {
      this.methodics.questionsDtos =  this.methodics.questionsDtos.slice(0, index).concat(this.methodics.questionsDtos.slice(index + 1));
      for (let i = 0; i < this.methodics.questionsDtos.length; i++) {
        this.methodics.questionsDtos[i].number = i + 1;
      }
     }
  }

  deleteKey(key: MethodicsKeyDto) {
    const index = this.methodics.methodicsKeyDtoList.indexOf(key);
    if (index >= 0) {
      this.methodics.methodicsKeyDtoList =  this.methodics.methodicsKeyDtoList.slice(0, index).concat(this.methodics.methodicsKeyDtoList.slice(index + 1));
    }
  }

  createKey() {
    this.methodics.methodicsKeyDtoList.push({ } as MethodicsKeyDto);
  }
}
