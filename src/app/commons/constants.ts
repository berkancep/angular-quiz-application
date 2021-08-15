import { AudioQuestion } from '../models/audio-question';
import { ChoiceQuestion } from '../models/choice-question';
import { ImageQuestion } from '../models/image-question';
import { Joker } from '../models/joker';
import { JokerType } from '../models/joker-type.enum';
import { QuestionType } from '../models/question-type.enum';
import { TextQuestion } from '../models/text-question';
import { VideoQuestion } from '../models/video-question';

export const JOKERS: Joker[] = [
  {
    imgUrl: 'https://image.flaticon.com/icons/png/128/5108/5108623.png',
    description: '%50 Joker Hakkı, Şıkların yarısını ortadan kaldırır.',
    isAvailable: true,
    type: JokerType.PERCENT50
  },
  {
    imgUrl:
      'https://www.embassyindustrialparks.com/wp-content/uploads/2016/06/2x-icon.png',
    description:
      '2x Joker Hakkı, Yanlış cevap verdiğinde bir hakkın daha olur.',
    isAvailable: true,
    type: JokerType.X2
  }
];

export type QuestionTypes =
  | ChoiceQuestion
  | AudioQuestion
  | ImageQuestion
  | VideoQuestion
  | TextQuestion;

export type OptionQuestionTypes =
  | ChoiceQuestion
  | AudioQuestion
  | ImageQuestion
  | VideoQuestion;

export const QUESTIONS: Array<QuestionTypes> = [
  {
    id: 1,
    text: "Türkiye'nin başkenti neresidir?",
    type: QuestionType.CHOICE,
    options: [
      { id: 1, text: 'İstanbul' },
      { id: 2, text: 'Ankara', isAnswer: true },
      { id: 3, text: 'Antalya' },
      { id: 4, text: 'İzmir' }
    ]
  } as ChoiceQuestion,
  {
    id: 7,
    text: 'İzlemekte olduğunuz tarihi yapı nerede bulunmaktadır?',
    type: QuestionType.VIDEO,
    options: [
      { id: 1, text: 'Lyon' },
      { id: 2, text: 'Marsilya' },
      { id: 3, text: 'Bordeaux' },
      { id: 4, text: 'Paris', isAnswer: true }
    ],
    url:
      'https://cdn.videvo.net/videvo_files/video/premium/video0037/large_watermarked/eiffel_tower08_preview.mp4'
  } as VideoQuestion,
  {
    id: 2,
    text: 'Atatürk kaç yaşında ölmüştür?',
    type: QuestionType.CHOICE,
    options: [
      { id: 1, text: '55' },
      { id: 2, text: '56' },
      { id: 3, text: '57', isAnswer: true },
      { id: 4, text: '59' }
    ]
  } as ChoiceQuestion,
  {
    id: 3,
    text: 'Dünyanın en yaşlı insanı kaç yaşında ölmüştür?',
    type: QuestionType.TEXT,
    answer: '162'
  } as TextQuestion,
  {
    id: 7,
    text: 'Dinlemekte olduğunuz ses hangi doğa olayına aittir?',
    type: QuestionType.AUDIO,
    options: [
      { id: 1, text: 'Yağmur', isAnswer: true },
      { id: 2, text: 'Gök Gürültüsü' },
      { id: 3, text: 'Kar' },
      { id: 4, text: 'Kasırga' }
    ],
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-light-rain-loop-2393.mp3'
  } as AudioQuestion,
  {
    id: 7,
    text: 'Görseldeki Oyuncunun adı nedir?',
    type: QuestionType.IMAGE,
    options: [
      { id: 1, text: 'George Clooney' },
      { id: 2, text: 'Çağatay Ulusoy' },
      { id: 3, text: 'Christian Bale', isAnswer: true },
      { id: 4, text: 'Leonardo Di Caprio' }
    ],
    src:
      'https://www.indiewire.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-03-at-2.14.24-PM.png?w=800'
  } as ImageQuestion,
  {
    id: 4,
    text:
      '2020 Tokyo Olimpiyatlarında Okçuluk dalında Altın madalya kazanan sporcumuz?',
    type: QuestionType.CHOICE,
    options: [
      { id: 1, text: 'Melih Güngör' },
      { id: 2, text: 'Ahmet Kola' },
      { id: 3, text: 'Mete Gazoz', isAnswer: true }
    ]
  } as ChoiceQuestion,
  {
    id: 5,
    text:
      '2003 Yılında Euro Vizyon Şarkı Yarışmasında Ülkemizi Temsil Eden ve Yarışmada Birinci Gelen Sanatçımız Kimdir?',
    type: QuestionType.CHOICE,
    options: [
      { id: 1, text: 'Grup Athena' },
      { id: 2, text: 'Sertap Erener', isAnswer: true },
      { id: 3, text: 'Şebnem Paker' },
      { id: 4, text: 'Ajda Pekkan' }
    ]
  } as ChoiceQuestion,
  {
    id: 6,
    text: 'Üç Büyük Dince Kutsal Sayılan Şehir Hangisidir?',
    type: QuestionType.CHOICE,
    options: [
      { id: 1, text: 'Mekke' },
      { id: 2, text: 'Kudüs', isAnswer: true },
      { id: 3, text: 'Roma' },
      { id: 4, text: 'İstanbul' }
    ]
  } as ChoiceQuestion
];
