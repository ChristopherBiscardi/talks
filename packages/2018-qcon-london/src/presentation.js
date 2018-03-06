// Import React
import React from "react";
// Import Spectacle Core tags
import {
  Appear,
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
import CodeSlide from "spectacle-code-slide";
import FA from "@fortawesome/react-fontawesome";
import { faNpm, faTwitterSquare } from "@fortawesome/fontawesome-free-brands";
import { faCoffee } from "@fortawesome/fontawesome-free-solid";
import "./prism.css";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const DIAGRAM_BG_COLOR = "rgb(240,244,247)";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    diagram: DIAGRAM_BG_COLOR
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
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`round of applause for Jamund
<br/><br/>
My context is mostly high-growth startups, so I learned a lot from his talk
<br/><br/>
This talk is *title*
<br/><br/>
We're going to talk about GraphQL implementations that prioritize the GraphQL Schema Language and how that can be used to improve human to human communication
<br/><br/>
We'll also cover a few tools`}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Parallelizing
          </Heading>

          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Product Development
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            with GraphQL
          </Heading>
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
        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes={`First let's set the context for the class of applications we're talking about.
<br/><br/>
I'm also going to argue that the class of applications I'm talking about should be the first option in your toolbelt
`}
        >
          <Heading size={6} fit textColor="primary" caps>
            Application
          </Heading>
          <Heading size={6} fit textColor="primary" caps>
            Architecture
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="diagram"
          notes={`API Driven Applications
<br/><br/>
contrast to server-rendered
<br/><br/>
The approach being that there are two objects you really need to care about (ui/db) and by placing this layer in between them, they become less brittle
<br/><br/>
We can abstract as we grow. microservices && web, native, sketch`}
        >
          <Image src={require("./basic-api-drive-development.png")} />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="diagram"
          notes={`This is a GraphQL talk, so it's no surprise that I'll tell you GraphQL should be this API layer and clients should use the GraphQL query language to retrieve and mutate data`}
        >
          <Image
            src={require("./basic-api-drive-development-with-graphql.png")}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="diagram"
          notes={`A developing application
<br/><br/>
"unintentional monolith datastore"
<br/><br/>
gateways
<br/><br/>
Multiple UIs. People are talking about DesignOps and rendering UI with production data into Sketch!
`}
        >
          <Image src={require("./api-gateway-pattern.png")} />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="diagram"
          notes={`Once again it's no surprise that I'm going to tell you that GraphQL let's you scale this approach to many clients and many backend services
<br/><br/>
truth is that we'll never know what clients will exist in the future
<br/><br/>
Architecting in this way is as useful for small applications as it is for scaling out
`}
        >
          <Image src={require("./api-gateway-pattern-with-graphql.png")} />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes={`As I start talking about why we need GraphQL here, focus on the Schema Definition Language
<br/><br/>
Primary way to define behavior
<br/><br/>
like protobufs, avro, or thrift
`}
        >
          <Heading size={6} textColor="primary" caps>
            Schema Definition Language
          </Heading>
        </Slide>

        <Slide
          bgColor="rgb(18,32,44)"
          notes={`How do we know what to query?
<br/><br/>
Never have to mention HATEOS again`}
        >
          <Image src={require("./graphql-playground.gif")} />
        </Slide>

        <Slide notes={`raise hand if first query<br/><br/>vaguely jsony`}>
          <Heading>Queries</Heading>
          <CodePane
            lang="graphql"
            source={`{
  drafts {
    title
  }
}`}
          />
        </Slide>
        <Slide
          notes={`what you get back
<br/><br/>
no imperative ajax requests`}
        >
          <Heading>Results</Heading>
          <CodePane
            lang="json"
            source={`{
  "data" {
    "drafts": [{
      "title": "Solving World Hunger"
    }]
  }
}`}
          />
        </Slide>

        <Slide
          notes={`back to How do we know what to query
<br/><br/>
looks like this
<br/><br/>
a bit like json`}
        >
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

        <CodeSlide
          notes="custom scalars parse/format"
          transition={[]}
          lang="graphql"
          showLineNumbers={false}
          color="white"
          bgColor="black"
          code={`type Post {
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
          ranges={[
            { loc: [0, 1], title: "Type" },
            { loc: [1, 2], title: "Scalars" },
            { loc: [3, 4], title: "Custom Scalars" },
            { loc: [5, 6], title: "Directives" },
            { loc: [11, 12], title: "Arrays" }
          ]}
        />

        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes={`Directives are the "everything else" of GraphQL
<br/><br/>
custom server implementations
<br/><br/>
They enable us to use the SDL to communicate extra information such as deprecation
`}
        >
          <Heading size={4} textColor="primary" caps>
            Directives
          </Heading>
          <Heading size={5} textColor="secondary" caps>
            Everything Else
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes={`How do we get JSON back?
<br/><br/>
Ask for types via query, resolvers are responsible for getting you JSON
`}
        >
          <Heading fit textColor="primary" caps>
            Resolvers
          </Heading>
        </Slide>

        <Slide notes={`fetched Human by id<br/><br/>obj is the human`}>
          <Heading>Trivial Resolvers</Heading>
          <CodePane
            lang="js"
            source={`Human: {
  name(obj, args, context) {
    return obj.name
  }
}`}
          />
        </Slide>

        <Slide notes={`get from database<br/><br/>return promise`}>
          <Heading>Async Resolvers</Heading>
          <CodePane
            lang="js"
            source={`human(obj, args, context) {
  return context.db.loadHumanByID(args.id).then(
    userData => new Human(userData)
  )
}`}
          />
        </Slide>

        <Slide notes={`Power lies in custom implementations`}>
          <Heading fit>Directive Resolvers</Heading>
          <CodePane
            lang="graphql"
            source={`directive @upper on FIELD_DEFINITION

type Query {
  hello: String @upper
}`}
          />
        </Slide>
        <Slide notes={`Power lies in custom implementations`}>
          <Heading fit>Directive Resolvers</Heading>
          <CodePane
            lang="js"
            source={`upper(next, src, args, context ) {
  return next().then((str) => {
    if (typeof(str) === 'string') {
      return str.toUpperCase();
    }
    return str;
  });
}`}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes={`Greenfield OR Docker rewrite (large scale)<br/><br/>two django apps -> apis`}
        >
          <Heading size={6} textColor="primary" caps>
            Scenario 1
          </Heading>
          <Heading textColor="secondary">A New Product</Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes={`two ways to approach a new product.
<br/><br/>
db schema -> gql (PostGraphile)
<br/><br/>
gql -> db`}
        >
          <Image src={require("./prisma-logo.png")} />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes={`prisma is two things. A database interface and a graphql api`}
        >
          <Image src={require("./prisma-architecture.png")} />
        </Slide>

        <Slide
          notes={`one of the hardest parts of GraphQL
<br/><br/>
can get very complicated`}
        >
          <Heading fit>Resolving with SQL</Heading>
          <CodePane
            lang="sql"
            source={`return mysql.query(\`SELECT
  "user"."id" AS "id",
  "posts"."id" AS "postId",
  "posts"."title" AS "postTitle",
  "posts"."body" AS "postText",
  "posts"."tags" AS "postTags",
  "posts"."created" AS "postCreated",
FROM accounts AS "user"
LEFT JOIN posts ON "user".id = "posts".authorId
WHERE "user".id = \${obj.id}
AND isPublished = 1
LIMIT \${args.skip}, 1000\`)
`}
          />
        </Slide>
        <Slide
          notes={`prisma-binding
<br/><br/>
built on graphql-binding
<br/><br/>`}
        >
          <Heading fit>SQL with Prisma</Heading>
          <CodePane
            lang="js"
            source={`publicPosts(obj, args, ctx, info) {
  return ctx.prisma.query.posts(
    where: {
      author: { id: obj.id },
      isPublished: true,
    },
    skip: args.skip,
    info // enables schema stitching
  )
}`}
          />
        </Slide>

        <Slide
          notes={`lets take a look at setting up a new prisma project
<br/><br/>
minimal is toy version
<br/><br/>
fullstack is the api gateway + database APIs
<br/><br/>
gateway is how you connect to other microservices`}
        >
          <Heading>prisma init</Heading>
          <CodePane
            lang="markup"
            source={`➜ prisma init full-03
? How to set up a new Prisma service?

  Minimal setup: database-only
❯ GraphQL server/fullstack boilerplate (recommended)`}
          />
        </Slide>

        <Slide
          notes={`node-basic. No auth, but auth can be implemented with directives too
<br/><br/>
TypeScript == autocomplete
<br/><br/>
fullstack with UI is a nono. Docker/Universal/complicated++`}
        >
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
        <Slide
          notes={`deploy to prisma cloud OR Docker!!
<br/><br/>
you can also deploy to a kube cluster with yaml from the docs`}
        >
          <Heading>prisma deploy</Heading>
          <CodePane
            lang="markup"
            source={`[graphql create] Running boilerplate install script...
Running $ prisma deploy...

? Please choose the cluster you want to deploy "full-03@dev" to

  prisma-eu1      Public development cluster
  prisma-us1      Public development cluster
❯ local           Local cluster (requires Docker)
`}
          />
        </Slide>

        <Slide
          notes={`migrations! graphql types to mysql types
<br/><br/>
Seed some data into the database`}
        >
          <Heading>prisma deploy</Heading>
          <CodePane
            lang="markup"
            source={`Changes:

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

        <Slide notes={`mysql data dump in Docker init.d vs GraphQL Mutations`}>
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

        <Slide notes={`playground script from boilerplate`}>
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

        <Slide
          notes={`life is change and engineering is no different
<br/><br/>
communicating deprecation`}
        >
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
Changes:

  Post (Type)
  + Created field \`title2\` of type \`String\`

Applying changes 1.1s

Your GraphQL database endpoint is live:

  HTTP:  http://localhost:4466/full-03/dev
  WS:    ws://localhost:4466/full-03/dev
`}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes={`Frontend wants to get started <br/><br/>
 Designs are ready <br/><br/>
 Backend hasn't written the resolvers yet
`}
        >
          <Heading size={6} textColor="primary" caps>
            Scenario 2
          </Heading>
          <Heading textColor="secondary">Frontend</Heading>
        </Slide>

        <Slide
          notes={`point it at your schema.graphql or extend a server<br/><br/>don't have to wait for backend`}
        >
          <Heading>graphql-faker</Heading>
          <Image src={require("./faker-extend-mode.gif")} />
        </Slide>
        <Slide
          notes={`@fake takes a type<br/><br/>@examples take a list of values`}
        >
          <Heading fit>Faker Directives</Heading>
          <CodePane
            lang="graphql"
            source={`type Person {
  name: String @fake(type: firstName)
  gender: String @examples(values: ["male", "female"])
}
`}
          />
        </Slide>

        <Slide
          notes={`Assuming a client like Apollo<br/><br/> popular
`}
        >
          <Image src={require("./apollo-logo.png")} />
        </Slide>

        <Slide>
          <Heading>Apollo Boost</Heading>
          <Notes>
            Preset<br />
            <br /> Remote data fetching<br />Error Handling<br />Local state<br />
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
            haven’t settled on how to approach client-side schema yet<br />
            <br />
            Means UI can proceed without backend support once again
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

        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes={`
`}
        >
          <Heading size={6} textColor="primary" caps>
            Scenario 3
          </Heading>
          <Heading textColor="secondary">Go is Awesome!</Heading>
        </Slide>

        <Slide
          notes={`we have the full generated schema<br/><br/>Only have to implement the resolvers`}
        >
          <Heading size={2}>src/schema.graphql</Heading>
          <CodePane
            lang="graphql"
            source={`# import Post from "./generated/prisma.graphql"

type Query {
  feed: [Post!]!
  drafts: [Post!]!
  post(id: ID!): Post
}

type Mutation {
  createDraft(title: String!, text: String): Post
  deletePost(id: ID!): Post
  publish(id: ID!): Post
}`}
          />
        </Slide>

        <Slide
          notes={`we have the full generated schema<br/><br/>Only have to implement the resolvers`}
        >
          <Heading fit>gqlgen -out generated.go -package main</Heading>
          <CodePane
            lang="go"
            source={`type Query struct {
	PostsID           int
	PostID            int
	PostsConnectionID int
	NodeID            int
}
type PostWhereInput struct {
	AND                   []PostWhereInput
	OR                    []PostWhereInput
	ID                    *string
	Id_not                *string
	Id_in                 []string
	Id_not_in             []string
	Id_lt                 *string
}
`}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="diagram"
          notes={`test in production
<br/><br/>
ingress
<br/><br/>
shadow proxy<br/><br/>`}
        >
          <Image src={require("./gql-test-in-production.png")} />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Credits
          </Heading>
          <List>
            <ListItem>
              <span style={{ display: "inline-block", minWidth: "13ch" }}>
                [presentation]:
              </span>
              <a href="http://formidable.com/open-source/spectacle/">
                Spectacle
              </a>
            </ListItem>
            <ListItem>
              <span style={{ display: "inline-block", minWidth: "13ch" }}>
                [diagrams]:
              </span>
              <a href="https://whimsical.co">whimsical.co</a>
            </ListItem>
          </List>
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
