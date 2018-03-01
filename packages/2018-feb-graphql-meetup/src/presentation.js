// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  MarkdownSlides,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";
import FA from "@fortawesome/react-fontawesome";
import { faNpm, faTwitterSquare } from "@fortawesome/fontawesome-free-brands";
import { faCoffee } from "@fortawesome/fontawesome-free-solid";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Inter UI",
    secondary: "Mezlo LG M DZ for Powerline"
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
            SDL First Products
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Parallelizing Product Development with GraphQL
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            @chrisbiscardi
          </Heading>
          <List className="fa-ul">
            <ListItem>
              <Image
                src={require("./honey-logo.jpg")}
                width={30}
                style={{ display: "inline" }}
                className="fa-li"
              />honeycomb.io
            </ListItem>
            <ListItem>
              <FA icon={faCoffee} listItem />coffee
            </ListItem>
            <ListItem>
              <FA icon={faTwitterSquare} listItem />@chrisbiscardi
            </ListItem>
            <ListItem>
              <FA icon={faNpm} listItem />biscarch
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Schema Definition Language
          </Heading>
        </Slide>
        <Slide>
          <Heading>blog schema</Heading>
          <CodePane
            lang="graphql"
            source={`type Post {
  id: String!
  title: String!
  publishedAt: DateTime!
  likes: Int! @default(value: 0)
  blog: Blog @relation(name: "Posts")
}
type Blog {
  id: String!
  name: String!
  description: String,
  posts: [Post!]! @relation(name: "Posts")
}`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Scenario 1
          </Heading>
          <Heading textColor="secondary">A New Product</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Notes>
            prisma is two things. A database interface and a graphql api
          </Notes>
          <Image src={require("./prisma-logo.png")} />
        </Slide>
        <Slide>
          <Heading>prisma init</Heading>
          <CodePane
            lang="markup"
            source={`➜ prisma init full-03
? How to set up a new Prisma service?

  Minimal setup: database-only
❯ GraphQL server/fullstack boilerplate (recommended)`}
          />
        </Slide>

        <Slide>
          <Heading>prisma init</Heading>
          <CodePane
            lang="markup"
            source={`➜ prisma init full-03
? How to set up a new Prisma service?

Running $ graphql create ...
? Choose GraphQL boilerplate project:
❯ node-basic              Basic GraphQL server (incl. database)
  node-advanced           GraphQL server (incl. database & authentication)
  typescript-basic        Basic GraphQL server (incl. database)
  typescript-advanced     GraphQL server (incl. database & authentication)
  react-fullstack-basic   React app + GraphQL server (incl. database )`}
          />
        </Slide>
        <Slide>
          <Heading>prisma deploy</Heading>
          <CodePane
            lang="markup"
            source={`[graphql create] Running boilerplate install script...
Running $ prisma deploy...

? Please choose the cluster you want to deploy "full-03@dev" to

  prisma-eu1      Public development cluster (hosted in EU on Prisma Cloud)
  prisma-us1      Public development cluster (hosted in US on Prisma Cloud)
❯ local           Local cluster (requires Docker)

  Log in or create new account on Prisma Cloud

  Note: When not logged in, service deployments to Prisma Cloud expire after 7 days.
  You can learn more about deployment in the docs: http://bit.ly/prisma-graphql-deployment`}
          />
        </Slide>

        <Slide>
          <Heading>prisma deploy</Heading>
          <CodePane
            lang="markup"
            source={` Please choose the cluster you want to deploy "full-03@dev" to
Added cluster: local to prisma.yml
Creating stage dev for service full-03 ✔
Deploying service \`full-03\` to stage \`dev\` on cluster \`local\` 201ms

Changes:

  Post (Type)
  + Created type \`Post\`
  + Created field \`id\` of type \`GraphQLID!\`
  + Created field \`isPublished\` of type \`Boolean!\`
  + Created field \`title\` of type \`String!\`
  + Created field \`text\` of type \`String!\`
  + Created field \`updatedAt\` of type \`DateTime!\`
  + Created field \`createdAt\` of type \`DateTime!\`

Applying changes 1.1s

Hooks:
Importing seed dataset from \`seed.graphql\` 498ms

Your GraphQL database endpoint is live:

  HTTP:  http://localhost:4466/full-03/dev
  WS:    ws://localhost:4466/full-03/dev

Checking, if schema file changed 180ms
Writing database schema to \`src/generated/prisma.graphql\`  0ms`}
          />
        </Slide>

        <Slide>
          <Heading textColor="secondary" size={3}>
            tree . -I node_modules
          </Heading>
          <CodePane
            lang="markup"
            source={`➜ tree . -I node_modules
.
├── README.md
├── database
│   ├── datamodel.graphql
│   ├── prisma.yml
│   └── seed.graphql
├── package.json
├── src
│   ├── generated
│   │   └── prisma.graphql
│   ├── index.js
│   └── schema.graphql
└── yarn.lock

3 directories, 9 files`}
          />
        </Slide>

        <Slide>
          <Heading>Schema</Heading>
          <CodePane
            lang="graphql"
            source={`type Post {
  id: ID! @unique
  isPublished: Boolean! @default(value: false)
  title: String!
  text: String!
}
`}
          />
        </Slide>

        <Slide>
          <Heading>Seeds</Heading>
          <CodePane
            lang="graphql"
            source={`mutation {
  first: createPost(data: {
    title: "Hello World"
    text: "This is my first blog post ever!"
    isPublished: true
  }) {
    id
  }

  second: createPost(data: {
    title: "My Second Post"
    text: "My first post was good, but this one is better!"
    isPublished: true
  }) {
    id
  }

  third: createPost(data: {
    title: "Solving World Hunger"
    text: "This is a draft..."
    isPublished: false
  }) {
    id
  }
}`}
          />
        </Slide>

        <Slide>
          <Heading>playground</Heading>
          <CodePane
            lang="markup"
            source={`➜ yarn playground
yarn run v1.3.2
$ graphql playground
Serving playground at http://localhost:3000/playground`}
          />
        </Slide>
        <Slide>
          <Heading>playground</Heading>
          <CodePane
            lang="markup"
            source={`brew cask install graphql-playground`}
          />
        </Slide>
        <Slide bgColor="rgb(18,32,44)">
          <Image src={require("./graphql-playground.gif")} />
        </Slide>

        <Slide>
          <Heading>Updating</Heading>
          <CodePane
            lang="graphql"
            source={`type Post {
  id: ID! @unique
  isPublished: Boolean! @default(value: false)
  title: String! @deprecated
  title2: String
  text: String!
}
`}
          />
        </Slide>
        <Slide>
          <Heading>Updating</Heading>
          <CodePane
            lang="markup"
            source={`➜ yarn prisma deploy
yarn run v1.3.2
$ prisma deploy
Deploying service \`full-03\` to stage \`dev\` on cluster \`local\` 176ms

Changes:

  Post (Type)
  + Created field \`title2\` of type \`String\`

Applying changes 1.1s

Your GraphQL database endpoint is live:

  HTTP:  http://localhost:4466/full-03/dev
  WS:    ws://localhost:4466/full-03/dev


Hooks:
Checking, if schema file changed 178ms
Writing database schema to \`src/generated/prisma.graphql\`  0ms
Running $ graphql prepare...
✨  Done in 6.29s.`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Scenario 2
          </Heading>
          <Heading textColor="secondary">Frontend Needs More</Heading>
        </Slide>
        <Slide>
          <Image src={require("./apollo-logo.png")} />
        </Slide>
        <Slide>
          <Heading>Apollo Boost</Heading>
          <Notes>
            Remote data fetching<br />Error Handling<br />Local state<br />
          </Notes>
          <List>
            <ListItem>apollo-client</ListItem>
            <ListItem>apollo-cache-inmemory</ListItem>
            <ListItem>apollo-link-http</ListItem>
            <ListItem>apollo-link-error</ListItem>
            <ListItem>apollo-link-state</ListItem>
            <ListItem>graphql-tag</ListItem>
          </List>
        </Slide>
        <Slide>
          <Notes>
            haven’t settled on how to approach client-side schema yet
          </Notes>
          <Heading>link-state</Heading>
          <CodePane
            lang="js"
            source={`import { withClientState } from 'apollo-link-state';

// This is the same cache you pass into new ApolloClient
const cache = new InMemoryCache(...);

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected
          },
        };
        cache.writeData({ data });
        return null
      },
    },
  }
});`}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Q & A
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

/**
  <Slide transition={["fade"]} bgColor="tertiary">
  <Heading size={6} textColor="primary" caps>
  Scenario 3
  </Heading>
  <Heading textColor="secondary">Communicating Deprecation</Heading>
  </Slide>

  <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
  <BlockQuote>
  <Quote>Example Quote</Quote>
  <Cite>Author</Cite>
  </BlockQuote>
  </Slide>
*/
