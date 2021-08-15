import { Component, Input } from '@angular/core';
import { QuestionTypes } from '../../commons/constants';
import { AudioQuestion } from '../../models/audio-question';

@Component({
  selector: 'app-audio-question',
  template: `
    <div>
      <audio controls autoplay>
        <source [src]="_question?.src" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  `
})
export class AudioQuestionComponent {
  _question: AudioQuestion;
  @Input()
  set question(question: QuestionTypes) {
    this._question = question as AudioQuestion;
  }
}
