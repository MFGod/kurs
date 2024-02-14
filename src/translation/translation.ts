export enum Language {
  RU = 'Russian',
  EN = 'English',
}

export interface TranslationInterface {
  language: string;
  theme: string;
}

const RU: TranslationInterface = {
  language: 'язык - ру',
  theme: 'тема',
};

const EN: TranslationInterface = {
  language: 'language - en',
  theme: 'theme',
};

export const tranlation = (
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
