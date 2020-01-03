import React from 'react';

// Basics of Hooks - Exercise 4 | Final

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

const LangContext = React.createContext<undefined | LangContextValue>(
  undefined
);

const LangProvider: React.FC = ({ children }) => {
  const [lang, setLang] = React.useState<Lang>('en');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

const useTranslations = () => {
  const value = React.useContext(LangContext);
  if (!value) throw new Error('Not rendered inside LangProvider!');

  const t = (id: keyof typeof messages['en']) =>
    messages[value.lang][id] || `Translation missing for ${id}`;

  return { ...value, t };
};

const Exercise = () => {
  const { t, lang, setLang } = useTranslations();

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

export default Usage;
