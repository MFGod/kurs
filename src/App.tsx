import { createContext, useEffect, useState } from "react";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global-styles";
import { Language } from "./translation/translation";
import { ThemeProvider } from "styled-components";
import { Theme, darkTheme, lightTheme } from "./styles/theme";
import { Main } from "./components/main";

interface LanguageContextInterface {
  language: string;
  changeLanguage?: () => void;
}

interface ThemeInterface {
  themeMode?: Theme;
  changeTheme?: () => void;
}

interface TimerInterface {
  handleStart?: () => void;
  handleStop?: () => void;
  count: number;
  theoryTime: number;
}

export const LanguageContext = createContext<LanguageContextInterface>({
  language: Language.RU,
});

export const ThemeContext = createContext<ThemeInterface>({});

export const TimerContext = createContext<TimerInterface>({
  count: 0,
  theoryTime: 0,
});

enum Mode {
  Theory = "theory",
  Practice = "practice",
}

function App() {
  const [language, setLanguage] = useState(Language.RU);
  const [themeMode, setThemeMode] = useState(darkTheme);

  const [started, setStarted] = useState(false);

  const [count, setCount] = useState(0);
  const [theoryTime, setTheoryTime] = useState(0);
  const [practiceTime, setPracticeTime] = useState(0);

  const [mode, setMode] = useState(Mode.Theory);

  const handleStart = () => {
    setStarted(true);
    console.log("Таймер запущен");
  };

  const handleStop = () => {
    setStarted(false);
    console.log("Таймер остановлен");
  };

  useEffect(() => {
    if (started) {
      setCount((n) => n + 1);
      setTheoryTime((n) => n + 1);
    }
  }, [started, count]);

  const changeLanguage = () => {
    language === Language.RU
      ? setLanguage(Language.EN)
      : setLanguage(Language.RU);
  };

  const changeTheme = () => {
    themeMode === darkTheme
      ? setThemeMode(lightTheme)
      : setThemeMode(darkTheme);
  };

  return (
    <div>
      <TimerContext.Provider value={{ handleStart, handleStop, count, theoryTime }}>
        <LanguageContext.Provider value={{ language, changeLanguage }}>
          <ThemeContext.Provider value={{ changeTheme }}>
            <ThemeProvider theme={themeMode}>
              <GlobalStyle />
              <Header />
              <Main />
            </ThemeProvider>
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </TimerContext.Provider>
    </div>
  );
}

export default App;
