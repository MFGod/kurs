export enum Theme {
  Light = "Light",
  Dark = "Dark",
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  buttonColor: string;
  headerColor: string;
  timerColor: string;
}

export const lightTheme: ThemeConfig = {
  primaryColor: "#ffffff",
  secondaryColor: "#000000",

  buttonColor: "#8a0000",

  headerColor: "#1d0000",

  timerColor: "#181818",
};

export const darkTheme: ThemeConfig = {
  primaryColor: "#000000",
  secondaryColor: "#ffffff",

  buttonColor: "#bd0000",

  headerColor: "#79bb00",
  
  timerColor: "#ffffff",
};
