import { createContext, useState } from 'react';
import { Header } from './components/header';
import { GlobalStyle } from './styles/global-styles';
import { Language } from './translation/translation';
import { ThemeProvider } from 'styled-components';
import { Main } from './components/main';
import { Theme, darkTheme, lightTheme } from './styles/theme';

interface LanguageContextInterface {
  language: string;
  changeLanguage?: () => void;
}

export const LanguageContext = createContext<LanguageContextInterface>({
  language: Language.RU,
});

export interface ThemeInterface {
  themeMode?: Theme;
  changeTheme?: () => void;
}

export const ThemeContext = createContext<ThemeInterface>({});

function App() {
  const [language, setLanguage] = useState(Language.RU);

  const [themeMode, setThemeMode] = useState(darkTheme);

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
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        <ThemeContext.Provider value={{ changeTheme }}>
          <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <Header />
            <Main />
          </ThemeProvider>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
