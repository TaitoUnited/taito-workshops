import React from 'react';

const description = `
**Basics of Hooks - Exercise 4**

- Utilize \`React.createContext\` to create a context for storing and updating user's selected language
- Implement a provider component for that context (see \`LangProvider\`)
- Implement a hook that allows accessing and updating the current language (see \`useTranslations\`)
- Add a translation helper called \`t\` that returns the correct message for given key based on the current language

OPTIONAL:
- Read the initial language value from local storage and persist it there when user changes the language
`;

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
type LangContextValue = { lang: Lang; setLang: (l: Lang) => any };

const LangProvider: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const Exercise = () => {
  // const { t, lang, setLang } = useTranslations();
  // Replace hard coded values with the above hook usage
  const lang = 'en';
  const setLang = (l: Lang) => {};
  const t = (s: string) => s;

  return (
    <div>
      <p>{t('hello')}</p>
      <p>
        {t('current_lang')} {t('lang_name')}
      </p>

      <button onClick={() => setLang(lang === 'en' ? 'fi' : 'en')}>
        {t('change_lang')}
      </button>
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return (
    <LangProvider>
      <Exercise />
    </LangProvider>
  );
};

Usage.description = description;

export default Usage;
