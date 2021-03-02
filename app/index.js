import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./components/App";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
}

html {
  min-width: 768px;
}

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  background: #EFF2F7;
}
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App
      images={[
        {
          url: "../app/images/Onboarding-invite.png",
          name: "iPhone Image",
        },
        {
          url: "../app/images/Onboarding-location.png",
          name: "iPad Image",
        },
        {
          url: "../app/images/Main-page.png",
          name: "Desktop Image",
        },
      ]}
    />
  </>,
  document.getElementById("app")
);
