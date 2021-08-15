import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joker } from '../../models/joker';

@Component({
  selector: 'app-joker',
  template: `
    <div class="mb-3">
      <ng-container *ngFor="let joker of jokers">
        <img
          *ngIf="joker.isAvailable"
          (click)="onClickJoker.emit(joker)"
          [title]="joker.description"
          [src]="joker.imgUrl"
          class="mr-3"
          width="15%"
        />
      </ng-container>
    </div>
  `
})
export class JokerComponent {
  @Input() jokers: Joker[];
  @Output() onClickJoker = new EventEmitter<Joker>();
}
