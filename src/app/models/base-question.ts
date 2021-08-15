import { QuestionType } from './question-type.enum';

export class BaseQuestion {
  id: number;
  text: string;
  type: QuestionType;
}
