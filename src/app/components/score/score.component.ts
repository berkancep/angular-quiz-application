import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-score',
  template: `
    <div *ngIf="quiz?.isFinished" class="card-body">
      <div class="alert alert-success">
        Doğru Cevap Sayısı : {{ quiz?.score?.correctAnswer }}
      </div>
      <div class="alert alert-danger">
        Yanlış Cevap Sayısı : {{ quiz?.score?.incorrectAnswer }}
      </div>
      <button
        (click)="onClickPlayAgain.emit()"
        class="btn btn-primary btn-block"
      >
        Yeniden Başlat
      </button>
    </div>
  `
})
export class ScoreComponent {
  @Input() quiz: Quiz;
  @Output() onClickPlayAgain = new EventEmitter<void>();
}
