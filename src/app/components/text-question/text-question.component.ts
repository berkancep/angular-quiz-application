import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-question',
  template: `
    <input #answer type="text" class="form-control" />
    <button
      type="button"
      (click)="onClickAnswerQuestionText.emit(answer.value)"
      class="btn btn-primary  mt-2 btn-block"
    >
      Cevapla
    </button>
  `
})
export class TextQuestionComponent {
  @Output() onClickAnswerQuestionText = new EventEmitter<string>();
}
