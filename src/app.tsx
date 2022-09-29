import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import { DemoComponent } from "./DemoComponent";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

export const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider>
        <div className="App">
          <DemoComponent name="Im a React component" />
        </div>
      </ChakraProvider>
    </I18nextProvider>
  );
};
