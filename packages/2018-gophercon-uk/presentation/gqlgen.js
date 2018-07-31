// Import React
import React from "react";

// Import Spectacle Core tags
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

export default (
  <div hasSlideChildren>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        GQLGen
      </Heading>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        What is GQLGen?
      </Heading>
      <List>
        <ListItem>
          Schema first: You define your API using the graphql Schema Definition
          Language
        </ListItem>
        <ListItem>
          Type safe: You should never see map[string]interface{} here.
        </ListItem>
        <ListItem>
          Codegen: Let us generate the boring bits, so you can build your app
          quickly.
        </ListItem>
      </List>
    </Slide>
  </div>
);
