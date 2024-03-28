export enum Language {
  RU = 'Russian',
  EN = 'English',
}

export interface TranslationInterface {
  language: string;
  theme: string;
  theory: string;
  practice: string;
  start: string;
  pause: string;
  changeMode: string;
  closeSession: string;
}

const RU: TranslationInterface = {
  language: 'язык - ру',
  theme: 'тема',
  theory: 'теория',
  practice: 'практика',
  start: 'запуск',
  pause: 'пауза',
  changeMode: 'изменить режим',
  closeSession: 'завершить сессию',
};

const EN: TranslationInterface = {
  language: 'language - en',
  theme: 'theme',
  theory: 'theory',
  practice: 'practice',
  start: 'start',
  pause: 'pause',
  changeMode: 'change mode',
  closeSession: 'close session',
};

export const translation = (
  language: string,
  key: keyof TranslationInterface
) => {
  switch (language) {
    case Language.RU:
      return RU[key];
    default:
      return EN[key];
  }
};
