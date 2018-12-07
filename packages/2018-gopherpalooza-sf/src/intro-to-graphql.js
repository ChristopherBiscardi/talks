// Import React
import React, { Fragment } from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

export default [
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Intro to GraphQL
    </Heading>
  </Slide>,
  <Slide
    transition={["zoom"]}
    bgColor="primary"
    notes={`
A query language
<br/><br/>
types over endpoints
<br/><br/>
GraphQL Playground (editor autocomplete)
<br/><br/>
@deprecated`}
  >
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      What is GraphQL
    </Heading>
    <List>
      <ListItem>Query Language</ListItem>
      <ListItem>Types vs Endpoints</ListItem>
      <ListItem>Powerful Devtools</ListItem>
      <ListItem>API Evolution</ListItem>
    </List>
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" notes={`SDL (more later)`}>
    <Heading textColor="primary" fit>
      Describe your Data
    </Heading>
    <CodePane
      lang="graphql"
      source={`type Project {
  name: String
  tagline: String
  contributors: [User]
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="tertiary"
    notes={`graphql is a query language
<br/><br/>
looks a lot like JSON
<br/><br/>
some function call looking things`}
  >
    <Heading textColor="primary" fit>
      Ask for what you want
    </Heading>
    <CodePane
      lang="graphql"
      source={`{
  project(name: "GraphQL") {
    tagline
  }
      }`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="tertiary"
    notes={`
Get JSON back
<br/><br/>
predictable results match the query tree`}
  >
    <Heading textColor="primary" fit>
      Get predictable results
    </Heading>
    <CodePane
      lang="json"
      source={`{
  "project": {
    "tagline": "A query language for APIs"
  }
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="tertiary"
    notes={`scalars
<br/><br/>
object types == go structs
`}
  >
    <Heading size={5} textColor="primary">
      SDL
    </Heading>
    <CodePane
      lang="graphql"
      source={`type User {
  id: ID!
  name: String
  age: Int
  balance: Float
  is_active: Boolean
  friends: [User]!
}
type Root {
   me: User
   users(limit: Int = 10): [User]!
   friends(forUser: ID!, limit: Int = 5): [User]!
}
schema {
  query: Root
  mutation: ...
  subscription: ...
}`}
    />
  </Slide>
];
