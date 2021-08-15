import { OptionQuestionTypes, QuestionTypes } from '../commons/constants';
import { Joker } from './joker';
import { Option } from './option';
import { Score } from './score';

export class Quiz {
  name: string;
  questions: QuestionTypes[];
  private _currentQuestionIndex: number;
  public get currentQuestionIndex() {
    return this._currentQuestionIndex;
  }

  score: Score;
  jokers: Joker[];

  constructor(
    name: string,
    questions: QuestionTypes[],
    jokers: Joker[],
    currentQuestionIndex = 0,
    score: Score = { correctAnswer: 0, incorrectAnswer: 0 }
  ) {
    this.name = name;
    this.questions = questions;
    this.jokers = jokers;
    this._currentQuestionIndex = currentQuestionIndex;
    this.score = score;
  }

  get isFinished(): boolean {
    return this.questions.length === this.currentQuestionIndex;
  }

  get correctOption(): Option {
    return (this.questions[
      this.currentQuestionIndex
    ] as OptionQuestionTypes).options.find(option => option.isAnswer);
  }

  get incorrectOption(): Option[] {
    return (this.questions[
      this.currentQuestionIndex
    ] as OptionQuestionTypes).options.filter(option => !option.isAnswer);
  }

  get allOption(): Option[] {
    return (this.questions[this.currentQuestionIndex] as OptionQuestionTypes)
      .options;
  }

  get currentQuestion(): QuestionTypes {
    return this.questions[this.currentQuestionIndex];
  }

  get currentQuestionNumber(): number {
    return this.isFinished
      ? this.currentQuestionIndex
      : this.currentQuestionIndex + 1;
  }

  nextQuestion(): void {
    this._currentQuestionIndex = this._currentQuestionIndex + 1;
  }
}
