import { BaseQuestion } from './base-question';
import { Option } from './option';

export class ChoiceQuestion extends BaseQuestion {
  options: Option[];
}
