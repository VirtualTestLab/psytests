export class QuestionDto {
  number: number;
  text: string;
}


export class MethodicsKeyDto {
  nameScale: string;
  numbersQuestions: number[];
}

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
