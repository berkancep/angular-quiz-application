import { Component, Input } from '@angular/core';
import { QuestionTypes } from '../../commons/constants';
import { ImageQuestion } from '../../models/image-question';

@Component({
  selector: 'app-image-question',
  template: `
    <div class="my-2">
      <img [src]="_question?.src" class="img-fluid" />
    </div>
  `
})
export class ImageQuestionComponent {
  _question: ImageQuestion;
  @Input()
  set question(question: QuestionTypes) {
    this._question = question as ImageQuestion;
  }
}
