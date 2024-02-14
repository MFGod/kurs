import { createContext, useState } from 'react';
import { Header } from './components/header';
import { GlobalStyle } from './styles/global-styles';
import { Language } from './translation/translation';

interface LanguageContextInterface {
  language: string;
  changeLanguage?: () => void;
}

export const LanguageContext = createContext<LanguageContextInterface>({
  language: Language.RU
});

function App() {
  const [language, setLanguage] = useState(Language.RU);

  const changeLanguage = () => {
    language === Language.RU
      ? setLanguage(Language.EN)
      : setLanguage(Language.RU);
  };

  return (
    <div>
      <GlobalStyle />
      <LanguageContext.Provider value={{language, changeLanguage}}>
        <Header />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
