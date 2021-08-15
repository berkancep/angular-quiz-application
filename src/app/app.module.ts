import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { JokerComponent } from './components/joker/joker.component';
import { ProgressComponent } from './components/progress/progress.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ScoreComponent } from './components/score/score.component';
import { TextQuestionComponent } from './components/text-question/text-question.component';
import { ChoiceQuestionComponent } from './components/choice-question/choice-question.component';
import { AudioQuestionComponent } from './components/audio-question/audio-question.component';
import { VideoQuestionComponent } from './components/video-question/video-question.component';
import { ImageQuestionComponent } from './components/image-question/image-question.component';

const COMPONENTS = [
  JokerComponent,
  ProgressComponent,
  QuizComponent,
  ScoreComponent,
  TextQuestionComponent,
  ChoiceQuestionComponent,
  AudioQuestionComponent,
  VideoQuestionComponent,
  ImageQuestionComponent
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false
    })
  ],
  declarations: [AppComponent, COMPONENTS],
  bootstrap: [AppComponent]
})
export class AppModule {}
