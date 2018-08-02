// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  Fit,
  Fill,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

const images = {
  graphqlPlayground: require("./img/graphql-playground.png")
};

export default (
  <div hasSlideChildren>
    <Slide
      transition={["zoom"]}
      bgColor="primary"
      notes={`
GraphQL, not to the exclusion of all others, but as the main client-server interaction
`}
    >
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Why GraphQL?
      </Heading>
    </Slide>
    <Slide
      transition={["zoom"]}
      bgColor="primary"
      notes={`
When the API is a Product
<br/><br/>
REST is usually bound to database schemas, etc
`}
    >
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Product APIs
      </Heading>
    </Slide>
    <Slide
      transition={["zoom"]}
      bgColor="primary"
      notes={`
Strongly typed -> Automatic Documentation
<br/><br/>
We can put autocomplete in editors, etc
<br/><br/>
don't have to write markdown docs anymore
`}
    >
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Documentation
      </Heading>
    </Slide>
    <Slide
      transition={["zoom"]}
      bgColor="primary"
      bgImage={images.graphqlPlayground}
      notes={`
Strongly typed -> Automatic Documentation
<br/><br/>
`}
    />
  </div>
);
