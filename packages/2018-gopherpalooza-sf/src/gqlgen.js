// Import React
import React, { Fragment } from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Fit,
  Fill,
  Quote,
  Slide,
  Text
} from "spectacle";

const images = {
  DesignsLogo: require("./img/99designs-logo.png"),
  gqlgenLogo: require("./img/gqlgen.svg")
};

export default [
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} caps lineHeight={1} textColor="secondary">
      GQLGen
    </Heading>
    <Layout>
      <Fill>
        <Image src={images.DesignsLogo} />
      </Fill>
      <Fill>
        <Image style={{ padding: "8rem" }} src={images.gqlgenLogo} />
      </Fill>
    </Layout>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
You define your API using the graphql Schema Definition Language
<br/>
<br/>
You should never see map[string]interface{} here.
<br/>
<br/>
Let us generate the boring bits, so you can build your app quickly.
`}
  >
    <Heading size={6} textColor="secondary" caps>
      What is GQLGen?
    </Heading>
    <List>
      <ListItem>Schema first</ListItem>
      <ListItem>Type safe</ListItem>
      <ListItem>Codegen</ListItem>
    </List>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
go get, just like any other lib
`}
  >
    <CodePane
      lang="markdown"
      source={`go get -u github.com/99designs/gqlgen \\
          github.com/vektah/gorunpkg`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Since it's schema first, let's write a schema.
<br/><br/>
Query types
`}
  >
    <CodePane
      lang="graphql"
      source={`type Todo {
  id: ID!
  text: String!
  done: Boolean!
  user: User!
}

type User {
  id: ID!
  name: String!
}

type Query {
  todos: [Todo!]!
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
 Mutation types
`}
  >
    <CodePane
      lang="graphql"
      source={`input NewTodo {
  text: String!
  userId: String!
}

type Mutation {
  createTodo(input: NewTodo!): Todo!
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
 Mutation types
`}
  >
    <CodePane
      lang="go"
      source={`package gopherpalooza

type User struct {
	ID   string
	Name string
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`Run the codegen
<br/><br/>
gqlgen to update`}
  >
    <CodePane lang="markdown" source={`gqlgen init`} />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Any unspecified model will be generated
<br/><br/>
Can force resolvers to be written for you
<br/><br/>
Uses this to build up a resolver map
`}
  >
    <CodePane
      lang="yaml"
      source={`schema: schema.graphql
exec:
  filename: generated.go
model:
  filename: models_gen.go
resolver:
  filename: resolver.go
  type: Resolver`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`look inside, see interfaces to implement
<br/><br/>
resolvers, directives, complexity`}
  >
    <CodePane
      lang="go"
      source={`// NewExecutableSchema creates an ExecutableSchema from the ResolverRoot interface.
func NewExecutableSchema(cfg Config) graphql.ExecutableSchema {
        return &executableSchema{
                resolvers:  cfg.Resolvers,
                directives: cfg.Directives,
                complexity: cfg.Complexity,
        }
}

type ResolverRoot interface {
        Mutation() MutationResolver
        Query() QueryResolver
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Generated go input type from our graphql schema
`}
  >
    <CodePane
      lang="go"
      source={`// models_gen.go
type NewTodo struct {
	Text   string \`json:"text"\`
	UserID string \`json:"userId"\`
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
resolvers.go (stubbed)
<br/><br/>
Set up resolvers for Resolver interface
`}
  >
    <CodePane
      lang="go"
      source={`type Resolver struct{}
func (r *Resolver) Mutation() MutationResolver {
	return &mutationResolver{r}
}
func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}
`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Main Query type resolver embeds Resolver type
<br/><br/>

`}
  >
    <CodePane
      lang="go"
      source={`type queryResolver struct{ *Resolver }

func (r *queryResolver) Todos(ctx context.Context) ([]Todo, error) {
	return r.todos, nil
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Mutation resolver
<br/><br/>
generated input type
`}
  >
    <CodePane
      lang="go"
      source={`func (r *mutationResolver) CreateTodo(ctx context.Context, input NewTodo) (Todo, error) {
	todo := Todo{
		Text: input.Text,
		ID:   fmt.Sprintf("T%d", rand.Int()),
		Done: false,
		UserID: input.UserID,
	}
	r.todos = append(r.todos, todo)
	return todo, nil
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Our graphql server
`}
  >
    <CodePane
      lang="go"
      source={`func main() {
	http.Handle("/", handler.Playground("Todo", "/query"))
	http.Handle("/query", handler.GraphQL(graph.NewExecutableSchema(&graph.App{})))

	fmt.Println("Listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
what a query looks like
`}
  >
    <CodePane
      lang="graphql"
      source={`query findTodos {
  	todos {
      text
      done
      user {
        name
      }
    }
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
new project scaffolding
<br/><br/>
future: (Plugin system) generate grpc resolvers for fields
`}
  >
    <Heading textColor="secondary" caps>
      0.6
    </Heading>
    <List>
      <ListItem>sponsorship (99designs)</ListItem>
      <ListItem>June 2018 GraphQL Spec</ListItem>
      <ListItem>Directives (@skip, @limit, custom)</ListItem>
      <ListItem>Query complexity</ListItem>
      <ListItem>Can generate resolver stubs</ListItem>
    </List>
  </Slide>
];
