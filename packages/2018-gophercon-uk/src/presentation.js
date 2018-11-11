import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import { injectGlobal } from "emotion";

import author from "./author";
import graphQLIntro from "./intro-to-graphql";
import stateOfTheWorld from "./state-of-the-world";
import whyGraphQL from "./why-graphql";
import gqlGen from "./gqlgen";
import extras from "./extras";

injectGlobal`pre.prism-code{font-size: 1.5rem !important}`;
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Going GraphQL
          </Heading>
        </Slide>
        {author}
        {stateOfTheWorld}
        {whyGraphQL}
        {graphQLIntro}
        {gqlGen}
        {extras}
      </Deck>
    );
  }
}
