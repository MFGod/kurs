export enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  buttonColor: string;
}

export const lightTheme: ThemeConfig = {
  primaryColor: '#ffffff',
  secondaryColor: '#000000',

  buttonColor: '#8a0000',
};

export const darkTheme: ThemeConfig = {
  primaryColor: '#000000',
  secondaryColor: '#ffffff',
  
  buttonColor: '#bd0000',
};
