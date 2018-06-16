import {DescriptionMethodics} from './descriptionMethodics';
import {Question} from './questions';

export class MethodicsWithQuestions {
  id: number;
  name: string;
  description: string;
  leftBoarder: number;
  rightBorder: number;
  questions: Question[];
}
