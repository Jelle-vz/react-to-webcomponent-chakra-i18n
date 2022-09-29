import React from "react";
import { chakra, Button } from "@chakra-ui/react"
import { AntoherComponent } from './AnotherComponent';
import { useTranslation } from 'react-i18next';


export const DemoComponent: React.FC<{ name: string }> = ({ name }: { name: string; }) => {
  const [currentLang, updateCurrentLang] = React.useState<string>('en');
  const [showModal, updateShowModal] = React.useState<boolean>(false);
  const handleClick = () => updateShowModal(!showModal);
  const { t, i18n } = useTranslation();

  const handleChangeLang = () => {
    if(currentLang === 'en') {
      i18n.changeLanguage('nl');
      updateCurrentLang('nl');
    } else {
      i18n.changeLanguage('en');
      updateCurrentLang('en');
    }
  };

  return (
    <>
    <chakra.div m={2} p={2} borderColor="orange.100" borderWidth={1}>
      <chakra.h2 mb={2}>{name}</chakra.h2>
      <AntoherComponent/>
      <Button variant="solid" onClick={() => handleClick()}>{t('MODAL_BTN')}</Button>
      <Button variant="ghost" onClick={() => handleChangeLang()}>{t('BTN_CHANGELANG')}</Button>
    </chakra.div>

      {showModal && (
        <chakra.div>
          {t('MODAL_CONTENT')}
        </chakra.div>
      )}
    </>
  )
};
