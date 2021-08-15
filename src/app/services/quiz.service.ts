import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QUESTIONS, QuestionTypes } from '../commons/constants';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private readonly questions: Observable<QuestionTypes[]> = of(QUESTIONS);

  getQuestions(): Observable<QuestionTypes[]> {
    return this.questions;
  }
}
