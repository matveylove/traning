import React from 'react';
import TranslateText from 'shared/hocs/TranslateText';
import { useTranslation } from 'react-i18next';

export const ChangeLanguage = () => {
  const {t, i18n} = useTranslation();

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language == 'ru' ? 'en' : 'ru');
  }

  return (
    <button onClick={handleLanguageChange}>
      <TranslateText nameSpace={'translation'}>Сменить язык</TranslateText>
    </button>
  );
};