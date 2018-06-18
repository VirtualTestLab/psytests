import {MethodicsKeyDto} from './methodicskeydto';
import {QuestionDto} from './questiondto';

export class FullMethodics {
  id: number;
  name: string;
  description: string;
  leftValueBorder: number;
  rightValueBorder: number;
  questionsDtos: QuestionDto[];
  methodicsKeyDtoList: MethodicsKeyDto[];
  constructor() {
    this.questionsDtos = [];
    this.methodicsKeyDtoList = [];
  }
}
