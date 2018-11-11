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

export default [
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`Who am I and why should you listen to me?
<br/><br/>
UI Team@Docker; Also started writing Go;
<br/><br/>
GraphQL for about two years (since Relay)
<br/><br/>
Consulting for startups (gql, react, go, JS)
`}
  >
    <Heading size={6} textColor="secondary" caps>
      @chrisbiscardi
    </Heading>
    <List>
      <ListItem>Docker</ListItem>
      <ListItem>GraphQL</ListItem>
      <ListItem>Consulting</ListItem>
    </List>
  </Slide>
];
