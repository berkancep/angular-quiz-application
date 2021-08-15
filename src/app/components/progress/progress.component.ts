import { Component, Input } from '@angular/core';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-progress',
  template: `
    <div class="card-footer">
      <span class="font-weight-bold">Soru</span>
      {{ quiz?.currentQuestionNumber }} / {{ quiz?.questions?.length }}
    </div>
  `
})
export class ProgressComponent {
  @Input() quiz: Quiz;
}
