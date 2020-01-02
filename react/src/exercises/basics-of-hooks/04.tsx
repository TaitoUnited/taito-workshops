import React from 'react';

/*
Basics of Hooks - Exercise 4

1. Create a context for storing and updating user's selected language
2. Implement a provider component for that context (see `LangProvider`)
3. Implement a hook that allows accessing and updating the current language (see `useTranslations`)
4. Add a translation helper called `t` that returns the correct message for given key based on the current language

OPTIONAL:
- Read the initial language value from local storage and persist it there when user changes the language
*/

const messages = {
  fi: {
    hello: 'Morjens!',
    change_lang: 'Vaihda kieli',
    current_lang: 'Nykyinen kieli on',
    lang_name: 'suomi',
  },
  en: {
    hello: 'Hello!',
    change_lang: 'Change language',
    current_lang: 'Current language is',
    lang_name: 'English',
  },
};

type Lang = 'en' | 'fi';
type LangContextValue = undefined | { lang: Lang; setLang: (l: Lang) => any };

const LangProvider: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const useTranslations = () => {
  return {
    lang: 'en',
    setLang: (l: Lang) => {},
    t: (s: string) => s,
  };
};

const Exercise = () => {
  const { t, lang, setLang } = useTranslations();
  return <div>{t('TODO')}</div>;
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return (
    <LangProvider>
      <Exercise />
    </LangProvider>
  );
};

export default Usage;
