import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JOKERS } from '../../commons/constants';
import { Utils } from '../../commons/utils';
import { Joker } from '../../models/joker';
import { Option } from '../../models/option';
import { JokerType } from '../../models/joker-type.enum';
import { QuestionType } from '../../models/question-type.enum';
import { Quiz } from '../../models/quiz';
import { QuizService } from '../../services/quiz.service';
import { TextQuestion } from '../../models/text-question';
import { ChoiceQuestion } from '../../models/choice-question';
import { AudioQuestion } from '../../models/audio-question';
import { VideoQuestion } from '../../models/video-question';
import { ImageQuestion } from '../../models/image-question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {
  quiz: Quiz;
  QuestionType = QuestionType;

  constructor(
    private quizService: QuizService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  private getQuestions(): void {
    this.quizService.getQuestions().subscribe(response => {
      const questions = Utils.deepCopy(response);
      const jokers = Utils.deepCopy(JOKERS);
      this.quiz = new Quiz('My Quiz', questions, jokers);
    });
  }

  answerQuestionChoice(option: Option): void {
    this.checkChoiceAnswer(option);
    this.quiz.nextQuestion();
  }

  answerQuestionText(answer: string) {
    this.checkTextAnswer(answer);
    this.quiz.nextQuestion();
  }

  useJoker(joker: Joker): void {
    switch (joker.type) {
      case JokerType.PERCENT50: {
        if (
          [
            QuestionType.CHOICE,
            QuestionType.AUDIO,
            QuestionType.VIDEO,
            QuestionType.IMAGE
          ].includes(this.quiz.currentQuestion.type)
        ) {
          this.usePercent50();
          joker.isAvailable = false;
        } else {
          this.toastrService.error(
            'Bu soru tipinde bu jokeri kullanamazsınız.'
          );
        }
        break;
      }
      case JokerType.X2:
        this.toastrService.info(
          'Bu Joker şu anda aktif değil, ileride eklenecektir.'
        );
        break;
    }
  }

  playAgain(): void {
    this.getQuestions();
  }

  private usePercent50(): void {
    const currentQuestion = this.quiz.currentQuestion as
      | ChoiceQuestion
      | AudioQuestion
      | VideoQuestion
      | ImageQuestion;

    let deletedOptionCount = Utils.getHalfAndFloor(currentQuestion.options);

    while (deletedOptionCount !== 0) {
      const deletedOption = this.quiz.allOption[
        Utils.getRandomValue(this.quiz.allOption)
      ];
      if (!deletedOption.isAnswer) {
        currentQuestion.options = currentQuestion.options.filter(
          item => item.id !== deletedOption.id
        );
        deletedOptionCount = deletedOptionCount - 1;
      }
    }
  }

  private checkChoiceAnswer(option: Option): void {
    if (option.isAnswer) {
      this.toastrService.success(`Tebrikler, doğru cevap.`);
      this.quiz.score.correctAnswer = this.quiz.score.correctAnswer + 1;
    } else {
      this.toastrService.error(
        `Cevabınız yanlış, doğru cevap : ${this.quiz.correctOption.text}`
      );
      this.quiz.score.incorrectAnswer = this.quiz.score.incorrectAnswer + 1;
    }
  }

  private checkTextAnswer(answer: string) {
    const currentQuestion = this.quiz.currentQuestion as TextQuestion;

    if (currentQuestion.answer.toLowerCase() === answer.trim().toLowerCase()) {
      this.toastrService.success(`Tebrikler, doğru cevap.`);
      this.quiz.score.correctAnswer = this.quiz.score.correctAnswer + 1;
    } else {
      this.toastrService.error(
        `Cevabınız yanlış, doğru cevap : ${currentQuestion.answer}`
      );
      this.quiz.score.incorrectAnswer = this.quiz.score.incorrectAnswer + 1;
    }
  }
}
