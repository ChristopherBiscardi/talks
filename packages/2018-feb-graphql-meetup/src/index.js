import React from "react";
import ReactDOM from "react-dom";
import Presentation from "./presentation";
import registerServiceWorker from "./registerServiceWorker";
import styled from "react-emotion";

const Twitter = styled("span")`
  z-index: 1;
  position: absolute;
  right: 0;
`;

ReactDOM.render(
  <div>
    <Twitter>@chrisbiscardi</Twitter>
    <Presentation />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
