// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  graphqlEurope: require("../assets/graphql-europe-bg.jpg"),
  graphCoolLogo: require("../assets/graph-cool-logo.png"),
  relay1vs2: require("../assets/relay1vs2.png"),
  apolloDevtoolsGraphiql: require("../assets/apollo-devtools-graphiql.png"),
  graphqlEurope: require("../assets/graphql-europe-bg.jpg"),
  whichGraphqlClient: require("../assets/which-graphql-client.png"),
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
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
            Demystifying GraphQL Clients
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            @chrisbiscardi
          </Text>
        </Slide>
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={
            `
DesignOps? talk to me after or on Twitter.
`
          }
        >
          <Heading size={1} lineHeight={1} textColor="secondary">
            @chrisbiscardi
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Design Systems and UI Platform @Dropbox
          </Text>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
GraphQL from a web-based client-side view
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            GraphQL
          </Heading>
          <List>
            <ListItem>What is it?</ListItem>
            <ListItem>Raw Queries</ListItem>
            <ListItem>Why Use a Client?</ListItem>
            <ListItem>Apollo 1.0</ListItem>
            <ListItem>Relay Modern</ListItem>
          </List>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={
            `
query language for APIs
runtime for fulfilling those queries
gives clients the power to ask for exactly what they need
makes it easier to evolve APIs over time
and enables powerful developer tools.
`
          }
        >
          <Heading size={1} lineHeight={1} textColor="secondary" fit>
            What is GraphQL?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            A query language for your API
          </Text>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={
            `
GraphQL is a typed representation of your data. Schema
`
          }
        >
          <Heading size={1} lineHeight={1} textColor="secondary" fit>
            Describe your Data
          </Heading>
          <CodePane
            lang="js"
            source={
              `type Project {
  name: String
  tagline: String
  contributors: [User]
}
`
            }
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={
            `
Use the typed schema to construct a query for only the data we want.
`
          }
        >
          <Heading size={1} lineHeight={1} textColor="secondary" fit>
            Ask for What You Want
          </Heading>
          <CodePane
            lang="js"
            source={
              `{
  project(name: "GraphQL") {
    tagline
  }
}
`
            }
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={
            `JSON response matches the query
`
          }
        >
          <Heading size={1} lineHeight={1} textColor="secondary" fit>
            Get Predictable Results
          </Heading>
          <CodePane
            lang="js"
            source={
              `{
  "project": {
    "tagline": "A query language for APIs"
  }
}
`
            }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`Using GraphQL docs for familiarity`}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Querying GraphQL
          </Heading>
          <List>
            <ListItem>Fields</ListItem>
            <Appear><ListItem>Arguments</ListItem></Appear>
            <Appear><ListItem>Aliases</ListItem></Appear>
            <Appear><ListItem>Fragments</ListItem></Appear>
            <Appear>
              <div>
                <ListItem>Variables</ListItem>
                <ListItem>Operation Names</ListItem>
                <ListItem>Directives</ListItem>
                <ListItem>Mutations</ListItem>
                <ListItem>Meta Fields</ListItem>
                <ListItem>Errors</ListItem>
                <ListItem>Pagination</ListItem>
                <ListItem>Request Form</ListItem>
                <ListItem>Response Form</ListItem>
                <ListItem>Caching</ListItem>
              </div>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`Fields are fundamental unit`}
        >
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Fields
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  hero {
    name
    friends {
      name
    }
  }
}`
              }
            />

            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}`
              }
            />
          </div>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`Arguments can be dynamic (URL)`}
        >
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Arguments
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}`
              }
            />

            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 5.6430448
    }
  }
}`
              }
            />
          </div>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`Arguments can be dynamic (URL)`}
        >
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Fragments
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}`
              }
            />

            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  "data": {
    "leftComparison": {
      "name": "Luke Skywalker",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ],
      "friends": [
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        },
        {
          "name": "C-3PO"
        },
        {
          "name": "R2-D2"
        }
      ]
    },
    "rightComparison": {
      "name": "R2-D2",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ],
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}`
              }
            />
          </div>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`Can still use fetch()`}
        >
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Variables
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  query: \`query HeroNameAndFriends($episode: Episode) {
    hero(episode: $episode) {
      name
      friends {
        name
      }
    }
  }\`,
  variables: {
    "episode": "JEDI"
  }
}`
              }
            />

            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}`
              }
            />
          </div>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`Like Function Names`}
        >
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Operation Names
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `query HeroNameAndFriends {
    hero {
      name
      friends {
        name
      }
    }
  }`
              }
            />
          </div>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `Extensions to GraphQL <br><br> Server decides implementation
`
          }
        >
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Directives
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  query: \`query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
      name
      friends @include(if: $withFriends) {
        name
      }
    }
  }\`,
    variables: {
    "episode": "JEDI",
    "withFriends": false
  }
}`
              }
            />

            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}`
              }
            />
          </div>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `Mutate and Query in a single request <br><br> Mutations run in series
`
          }
        >
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Mutations
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  query: \`mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
    createReview(episode: $ep, review: $review) {
      stars
      commentary
    }
  }\`,
    variables: {
    "ep": "JEDI",
    "review": {
      "stars": 5,
      "commentary": "This is a great movie!"
    }
  }
}`
              }
            />

            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  "data": {
    "createReview": {
      "stars": 5,
      "commentary": "This is a great movie!"
    }
  }
}`
              }
            />
          </div>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `null fields vs development errors
`
          }
        >
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Errors
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `# INVALID: primaryFunction does not exist on Character
{
  hero {
    name
    primaryFunction
  }
}`
              }
            />

            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `{
  "errors": [
    {
      "message": "Cannot query field \"primaryFunction\" on type \"Character\". Did you mean to use an inline fragment on \"Droid\"?",
      "locations": [
        {
          "line": 5,
          "column": 5
        }
      ]
    }
  ]
}`
              }
            />
          </div>

        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`Have to store some state locally`}
        >
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Pagination
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `Where do we store the data we get? <br><br> refetch on mount? <br><br> What if we already have the data we want?`
          }
        >
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Caching
          </Heading>
        </Slide>
        {/* Why Use a Client Start */}

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="tertiary"
          notes={
            `Where do we store the data we get? <br><br> refetch on mount? <br><br> What if we already have the data we want?`
          }
        >
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Why Use a Client?
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          textColor="secondary"
          notes={
            `
Abstract the Transportation<br><br>
fetch vs websockets<br><br>
headers
`
          }
        >
          <BlockQuote fit>
            <Quote>
              Allow the application developer to easily execute GraphQL queries, and configure transport-specific features like headers.
            </Quote>
            <Cite textColor="primary">Apollo DevBlog</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          textColor="primary"
          notes={
            `
state consistency<br><br>
multiple components have similar queries<br><br>
`
          }
        >
          <BlockQuote textColor="secondary">
            <Quote fit>
              Ensure that all GraphQL results currently being displayed in an app are consistent with one another.
            </Quote>
            <Cite textColor="primary">Apollo DevBlog</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          textColor="primary"
          notes={
            `
Reduce Caching Complexity<br><br>
redux && normalization
`
          }
        >
          <BlockQuote textColor="secondary">
            <Quote fit>
              Provide flexible ways to update the cache with results from the server when using mutations, pagination, subscriptions, and more.
            </Quote>
            <Cite textColor="primary">Apollo DevBlog</Cite>
          </BlockQuote>
        </Slide>

        {/* Apollo Start */}
        <Slide
          transition={["zoom"]}
          bgColor="secondary"
          notes={
            `
Meteor Development Group sponsors Apollo Client
`
          }
        >
          <Heading size={1} lineHeight={1} textColor="tertiary" fit>
            Apollo Client
          </Heading>
          <BlockQuote>
            <Quote fit>
              The flexible, production ready GraphQL client for React and native apps.
            </Quote>
            <Cite>Apollo Docs</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What's in Apollo?
          </Heading>
          <List>
            <ListItem>Multi-Platform</ListItem>
            <ListItem>Queries</ListItem>
            <ListItem>Caching</ListItem>
            <ListItem>Mutations</ListItem>
            <ListItem>Optimistic UI</ListItem>
            <ListItem>Subscriptions</ListItem>
            <ListItem>Pagination</ListItem>
            <ListItem>Server Side</ListItem>
            <ListItem>Prefetching</ListItem>
            <ListItem>Network Layer</ListItem>
            <ListItem>Authentication</ListItem>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
2. any build setup, any GraphQL server, and any GraphQL schema.<br><br>
4. Devtools<br><br>
6. under 25kb compressed
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Project Goals
          </Heading>
          <List>
            <ListItem>Incrementally Adoptable</ListItem>
            <ListItem>Universally Compatible</ListItem>
            <ListItem>Simple Getting Started</ListItem>
            <ListItem>Inspectable and Understandable</ListItem>
            <ListItem>Build for Interactive Apps</ListItem>
            <ListItem>Small and Flexible</ListItem>
            <ListItem>Community Driven</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Interesting Tidbits
          </Heading>
          <List>
            <ListItem>Written in TypeScript</ListItem>
            <ListItem>Built on Redux</ListItem>
            <ListItem>fetch() polyfill</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Modularity
          </Heading>
          <List>
            <ListItem>graphql-tag</ListItem>
            <ListItem>graphql-anywhere</ListItem>
            <ListItem>graphql-document-collector</ListItem>
            <ListItem>apollo-codegen</ListItem>
            <ListItem>persistgraphql</ListItem>
            <ListItem>eslint-plugin-graphql</ListItem>
            <ListItem>jest-transform-graphql</ListItem>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
gql template tag (parses into AST)<br><br>
enables static analysis<br><br>
webpack loader
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            graphql-tag
          </Heading>
          <CodePane
            lang="js"
            source={
              `gql\`
    query TodoApp {
      todos {
        id
        text
        completed
      }
    }
  \``
            }
          />

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
excite!<br><br>
run graphql queries anywhere with no schema/server<br><br>
reads data from redux<br><br>
can turn results into react components
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            graphql-anywhere
          </Heading>
          <CodePane
            lang="js"
            source={
              `const query = gql\`
  {
    div {
      s1: span(id: "my-id") {
        text(value: "This is text")
      }
      s2: span
    }
  }
\`;

assert.equal(
  renderToStaticMarkup(gqlToReact(query)),
  '<div><span id="my-id">This is text</span><span></span></div>'
);`
            }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
load all graphql queries/
mutations/
subscriptions in a single location<br><br>
used with apollo-codegen for TS`
          }
        >
          {/*https://dev-blog.apollodata.com/graphql-dx-d35bcf51c943*/}
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            graphql-document-collector
          </Heading>
          <CodePane
            lang="sh"
            source={
              `graphql-document-collector '**/*.graphql' > documents.json`
            }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
with schema, queries and fragments creates the following:
`
          }
        >
          {/*https://dev-blog.apollodata.com/graphql-dx-d35bcf51c943*/}
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            apollo-codegen
          </Heading>
          <CodePane
            lang="js"
            source={
              `//  This file was automatically generated and should not be edited.

// The episodes in the Star Wars trilogy
export type Episode =
  "NEWHOPE" | // Star Wars Episode IV: A New Hope, released in 1977.
  "EMPIRE" | // Star Wars Episode V: The Empire Strikes Back, released in 1980.
  "JEDI"; // Star Wars Episode VI: Return of the Jedi, released in 1983.


export interface HeroNameQueryVariables {
  episode: Episode | null;
}

export interface HeroNameQuery {
  hero: DescribeHeroFragment;
}

export interface DescribeHeroFragment {
  name: string;
  appearsIn: Array< Episode | null >;
}`
            }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
.graphql files -> ids<br><br>
w/ network interface and express middleware
`
          }
        >
          {/*https://dev-blog.apollodata.com/persisted-graphql-queries-with-apollo-client-119fd7e6bba5*/
          }
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            persistgraphql
          </Heading>
          <CodePane
            lang="sh"
            source={`persistgraphql src/ extracted_queries.json`}
          />
          <CodePane
            lang="js"
            source={
              `import queryMap from ‘../extracted_queries.json’;
import { invert } from 'lodash';
app.use(
  '/graphql',
  (req, resp, next) => {
    if (config.persistedQueries) {
      const invertedMap = invert(queryMap);
      req.body.query = invertedMap[req.body.id];
    }
    next();
  },
);`
            }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
check gql tags and .graphql files against schema<br><br>
Supports Apollo, Relay and Lokka out of the box
`
          }
        >
          {/**/}
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            eslint-plugin-graphql
          </Heading>
          <CodePane
            lang="js"
            source={
              `// .eslintrc.js
module.exports = {
  parser: "babel-eslint",
  rules: {
    "graphql/template-strings": ['error', {
      env: 'apollo',
      schemaJson: require('./schema.json'),
    }]
  },
  plugins: [
    'graphql'
  ]
}`
            }
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
.graphql files for Jest<br><br>
package.json
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            jest-transform-graphql
          </Heading>
          <CodePane
            lang="json"
            source={
              `{
  "jest": {
    "transform": {
      "\\.(gql|graphql)$": "jest-transform-graphql",
      ".*": "babel-jest"
    }
  }
}`
            }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
“it’s just GraphQL”<br><br>
If it works in GraphiQL it works in Apollo<br><br>
1. data comes from redux or server<br><br>
2. subscribes to store (bc mutations)
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Simple Query
          </Heading>
          <CodePane
            lang="js"
            source={
              `import React, { Component, PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

class Profile extends Component { ... }

const CurrentUserForLayout = gql\`
        query CurrentUserForLayout {
          currentUser {
            login
            avatar_url
          }
        }
        \`;

const ProfileWithData = graphql(CurrentUserForLayout)(Profile);
`
            }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
for query on last slide<br><br>
.data<br><br>
.data.loading<br><br>
.data.error
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            prop-types
          </Heading>
          <CodePane
            lang="js"
            source={
              `Profile.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    currentUser: PropTypes.object,
  }).isRequired,
};`
            }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
many methods which can be used for given query<br><br>
Abstraction
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            There's a lot here
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `query getUserAndLikes($id: ID!) {
  user(userId: $id) { name }
  likes(userId: $id) { count }
}`
              }
            />

            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `data: {
  user: { name: "James" },
  likes: { count: 10 },
  loading: false,
  error: null,
  variables: { id: 'asdf' },
  refetch() { ... },
  fetchMore() { ... },
  startPolling() { ... },
  stopPolling() { ... },
  // ... more methods
}`
              }
            />
          </div>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Query APIs
          </Heading>
          <List>
            <ListItem>props.data</ListItem>
            <ListItem>.loading/.error</ListItem>
            <ListItem>.networkStatus</ListItem>
            <ListItem>.variables</ListItem>
            <ListItem>.refetch</ListItem>
            <ListItem>.fetchMore</ListItem>
            <ListItem>.subscribeToMore</ListItem>
            <ListItem>.startPolling/stopPolling</ListItem>
            <ListItem>.updateQuery</ListItem>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
Things you get that aren't viable with strings<br><br>
networkStatus < 7 === data.loading
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            data.networkStatus
          </Heading>
          <List ordered>
            <ListItem>loading</ListItem>
            <ListItem>setVariables</ListItem>
            <ListItem>fetchMore</ListItem>
            <ListItem>refetch</ListItem>
            <ListItem>unused</ListItem>
            <ListItem>poll</ListItem>
            <ListItem>ready</ListItem>
            <ListItem>error</ListItem>
          </List>
        </Slide>

        {/*
  <ListItem>variables</ListItem>
  <ListItem>refetch</ListItem>
  <ListItem>fetchMore</ListItem>
  <ListItem>subscribeToMore</ListItem>
  <ListItem>startPolling/stopPolling</ListItem>
  <ListItem>updateQuery</ListItem>

    <ListItem>options.fetchPolicy</ListItem>
    <ListItem>options.notifyOnNetworkStatusChange</ListItem>
    <ListItem>Query Deduplication</ListItem>
*/
        }

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`mutation handlers just like normal handlers`}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Mutations
          </Heading>
          <CodePane
            lang="js"
            style={{ minWidth: "50%" }}
            source={
              `import React, { Component, PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

const NewEntry = ({ submit }) => (
  <div onClick={() => submit('apollographql/apollo-client')}>
    Click me
  </div>
);

const submitRepository = gql\`mutation submitRepository($repoFullName: String!) {
  submitRepository(repoFullName: $repoFullName) {
    createdAt
  }
}\`;

const NewEntryWithData = graphql(submitRepository, {
  props: ({ mutate }) => ({
    submit: (repoFullName) => mutate({ variables: { repoFullName } }),
  }),
})(NewEntry);`
            }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`Optimistic data doesn't have to be perfect`}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Optimistic UI
          </Heading>
          <CodePane
            lang="js"
            source={
              `const CommentPageWithData = graphql(submitComment, {
  props: ({ ownProps, mutate }) => ({
    submit: ({ repoFullName, commentContent }) => mutate({
      variables: { repoFullName, commentContent },

      optimisticResponse: {
        __typename: 'Mutation',
        submitComment: {
          __typename: 'Comment',
          postedBy: ownProps.currentUser,
          createdAt: +new Date,
          content: commentContent,
        },
      },
    });
  }),
})(CommentPage);`
                   }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`Fetch data when user signals intent`}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Prefetching
          </Heading>
          <CodePane
            lang="jsx"
            source={
              `const FeedEntry = ({ entry, currentUser, onVote, client }) => {
  const repoLink = \`/$\{entry.repository.full_name}\`;
  const prefetchComments = (repoFullName) => () => {
    client.query({
      query: COMMENT_QUERY,
      variables: { repoName: repoFullName },
    });
  };

  return (
    <div className="media">
      ...
      <div className="media-body">
        <RepoInfo
          description={entry.repository.description}
          stargazers_count={entry.repository.stargazers_count}
          open_issues_count={entry.repository.open_issues_count}
          created_at={entry.createdAt}
          user_url={entry.postedBy.html_url}
          username={entry.postedBy.login}
        >
          <Link to={repoLink} onMouseOver={prefetchComments(entry.repository.full_name)}>
              View comments ({entry.commentCount})
          </Link>
        </RepoInfo>
      </div>
    </div>
  );
};

const FeedEntryWithApollo = withApollo(FeedEntry);`
                   }
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`Trivial to Rehydrate bc Redux/JSON`}
        >
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            SSR
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `// server
import { getDataFromTree } from "react-apollo"

const client = new ApolloClient(....);

getDataFromTree(app).then(() => {
  const content = ReactDOM.renderToString(app);
  const initialState = {
    [client.reduxRootKey]: client.getInitialState()
  };

  const html = <Html content={content} state={initialState} />;

  res.status(200);
  res.send(\`<!doctype html>\n$\{ReactDOM.renderToStaticMarkup(html)}\`);
  res.end();
});`
              }
                  />

                  <CodePane
                    lang="js"
                    style={{ minWidth: "50%" }}
                    source={
                      `// client
const client = new ApolloClient({
  initialState: window.__APOLLO_STATE__,
});`
                           }
                  />
              </div>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`
bit of work to get going<br><br>
custom network interface<br><br>
call \`subscribeToComments\` in componentDidMount
`}
        >
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Subscriptions
          </Heading>
            <CodePane
              lang="js"
              source={
                `graphql(COMMENT_QUERY, {
  name: 'comments',
  options: ({ params }) => ({
    variables: {
      repoName: \`$\{params.org}/$\{params.repoName}\`
    },
  }),
  props: props => {
    return {
      subscribeToNewComments: params => {
        return props.comments.subscribeToMore({
          document: COMMENTS_SUBSCRIPTION,
          variables: {
            repoName: params.repoFullName,
          },
          updateQuery: (prev, {subscriptionData}) => {
            if (!subscriptionData.data) {
              return prev;
            }

            const newFeedItem = subscriptionData.data.commentAdded;

            return {
              ...prev,
              entry: {
                comments: [newFeedItem, ...prev.entry.activities]
              }
            };
          }
        });
      }
    };
  },
});`
                     }
            />

        </Slide>

        <Slide transition={["fade"]} textColor="tertiary">
          <Image width="100%" src={images.apolloDevtoolsGraphiql} />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
TODO: http://dev.apollodata.com/core/devtools.html
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Apollo DevTools
          </Heading>
          <List>
            <ListItem>GraphiQL</ListItem>
            <ListItem>Normalized Store Inspector</ListItem>
            <ListItem>Watched Query Inspector</ListItem>
            <ListItem>Redux DevTools</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text>
            ༼ つ ◕_◕ ༽つ Give RELAY <Appear><span>Modern</span></Appear>
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="rgb(11,93,60)"
          textColor="tertiary"
        >
          <Image width="100%" src={images.relay1vs2} />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
Static Analysis (including Persisted Queries)
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Relay Modern
          </Heading>
          <List>
            <ListItem>Complete Rewrite</ListItem>
            <ListItem>Optimized for low-end mobile devices</ListItem>
            <ListItem>
              Simpler Developer Experience
            </ListItem>
            <ListItem>Client Schema Extensions</ListItem>
            <ListItem>Subscriptions</ListItem>
      <ListItem>Static Analysis</ListItem>
            <ListItem>Built in Flow Support</ListItem>
            <ListItem>Prototype "live" polling</ListItem>
            <ListItem>__generated__</ListItem>
            <ListItem>20% Smaller than Classic</ListItem>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
runtime is framework independent
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Modularity
          </Heading>
          <List>
            <ListItem>relay-compiler</ListItem>
            <ListItem>relay-runtime</ListItem>
            <ListItem>react-relay</ListItem>
            <ListItem>new babel-plugin-relay</ListItem>
          </List>
        </Slide>

      <Slide
      transition={["fade"]}
      bgColor="primary"
      textColor="tertiary"
      notes={
        `
many methods which can be used for given query<br><br>
Abstraction
`
      }
      >
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      relay-compiler
          </Heading>
          <div style={{ display: "flex" }} width="100%">
            <CodePane
              lang="sh"
              style={{ minWidth: "50%" }}
              source={
                `relay-compiler --src ./src --schema ./schema.graphql`
              }
            />

            <CodePane
              lang="js"
              style={{ minWidth: "50%" }}
              source={
                `import type {
  DictionaryComponent_word
} from './__generated__/DictionaryComponent_word.graphql';`
}
      />
      </div>
      </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
`
          }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Relay Modern
          </Heading>
          <List>
            <ListItem>Container</ListItem>
            <ListItem>Refetch Container</ListItem>
            <ListItem>Pagination Container</ListItem>
            <ListItem>Fragment Container</ListItem>
            <ListItem>Query Renderer</ListItem>
            <ListItem>Relay Environment</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
        notes={'Pre Relay Modern; clearly Apollo'}>
          <Image width="100%" src={images.whichGraphqlClient}/>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
Interesting to talk about the similarities more than the differences
`
                }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Similarities
          </Heading>
          <List>
            <ListItem>Modularity</ListItem>
            <ListItem>Static Analysis</ListItem>
            <ListItem>View/Data Colocation</ListItem>
            <ListItem>Network Layer Abstractions</ListItem>
            <ListItem>Subscriptions</ListItem>
            <ListItem>Client State</ListItem>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={
            `
shortlist<br><br>
Deserves more space than I have time for<br><br>
Apollo has wider ecosystem
`
                }
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Differences (Relay vs Apollo)
          </Heading>
          <List>
            <ListItem>Build Time vs Runtime AST</ListItem>
            <ListItem>Apollo's Fragment read/write APIs</ListItem>
            <ListItem>Custom Store vs Redux</ListItem>
            <ListItem>Dev Tools</ListItem>
            <ListItem>Ecosystem</ListItem>
          </List>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={
            `
Working on a more complete comparison for graph.cool
`
          }
        >
          <Image src={images.graphCoolLogo} />
          <Heading size={1} lineHeight={1} textColor="secondary" fit>
            Relay vs Apollo
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold fit>
            https://www.graph.cool/docs/tutorials/relay-vs-apollo-iechu0shia/
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" bgImage={images.graphqlEurope}>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Q&A
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            @chrisbiscardi
          </Text>
        </Slide>

      </Deck>
    );
  }
}
