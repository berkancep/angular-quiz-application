import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionTypes } from '../../commons/constants';
import { ChoiceQuestion } from '../../models/choice-question';
import { Option } from '../../models/option';

@Component({
  selector: 'app-choice-question',
  template: `
    <ng-container *ngFor="let option of _question?.options">
      <button
        type="button"
        (click)="onClickAnswerQuestionChoice.emit(option)"
        class="btn btn-primary m-1"
      >
        {{ option.text }}
      </button>
    </ng-container>
  `
})
export class ChoiceQuestionComponent {
  _question: ChoiceQuestion;
  @Input()
  set question(question: QuestionTypes) {
    this._question = question as ChoiceQuestion;
  }

  @Output() onClickAnswerQuestionChoice = new EventEmitter<Option>();
}
