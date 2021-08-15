import { Component, Input } from '@angular/core';
import { QuestionTypes } from '../../commons/constants';
import { VideoQuestion } from '../../models/video-question';

@Component({
  selector: 'app-video-question',
  template: `
    <div class="my-2">
      <video width="320" height="240" controls autoplay>
        <source [src]="_question?.url" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  `
})
export class VideoQuestionComponent {
  _question: VideoQuestion;
  @Input()
  set question(question: QuestionTypes) {
    this._question = question as VideoQuestion;
  }
}
