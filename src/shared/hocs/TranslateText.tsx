import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface TranslateTextProps {
  children: string;
  nameSpace: string;
}

const TranslateText: FC<TranslateTextProps> = ({children, nameSpace}) => {
  const { t, i18n } = useTranslation(nameSpace);

  return (
    <div>
      {t(children)}
    </div>
  );
};

export default TranslateText;