import React from "react";
import TranslateFrame from '../../components/translate-frame';
import { useTranslation } from 'react-i18next';

function Translator() {
  const { t } = useTranslation();
  // return statement
  return (

    <div>
      <h2>{t("Translator Page")}</h2>
      <h5>{t("Start typing in the left panel and the translator will detect your language")}</h5>

      <TranslateFrame translateSrc="https://translate.google.com/"></TranslateFrame>

    </div>
  );
}

export default Translator;