import * as React from "react";
import * as ReactDom from "react-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { DemoComponent } from "./DemoComponent";
import createCache from '@emotion/cache'
import { CacheProvider } from "@emotion/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
class StandaloneComponent extends HTMLElement {
  mountPoint!: HTMLDivElement;
  name!: string;

  connectedCallback() {
    const mountPoint = document.createElement("div");
    const shadow = this.attachShadow({ mode: "open" })

    shadow.appendChild(mountPoint);

    const cache = createCache({
      container: mountPoint,
      key: 'shadow-style'
    });

    const name = this.getAttribute("name");
    if (name) {
      ReactDom.render(
        <CacheProvider value={cache}>
          <I18nextProvider i18n={i18n}>
            <ChakraProvider>
              <DemoComponent name={name} />
            </ChakraProvider>
          </I18nextProvider>
        </CacheProvider>, 
      mountPoint);
    }
  }
}
export default StandaloneComponent;

window.customElements.get("standalone-component") ||
  window.customElements.define("standalone-component", StandaloneComponent);
