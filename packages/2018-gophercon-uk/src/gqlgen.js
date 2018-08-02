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
      GQLGen
    </Heading>
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
    <CodePane lang="markdown" source={`go get -u github.com/vektah/gqlgen`} />
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
      source={`package model

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
  filename: graph/generated.go
model:
  filename: model/generated.go

models:
  Todo:
    model: github.com/christopherbiscardi/gophercon-uk-sample-code/model.Todo
  User:
    model: github.com/christopherbiscardi/gophercon-uk-sample-code/model.User`}
    />
  </Slide>,
  ,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`Run the codegen
<br/><br/>
can stick this in a go:generate command`}
  >
    <CodePane lang="markdown" source={`gqlgen`} />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`look inside, see interfaces to implement`}
  >
    <CodePane
      lang="go"
      source={`// graph/generated.go
// NewExecutableSchema creates an ExecutableSchema from the ResolverRoot interface.
func NewExecutableSchema(resolvers ResolverRoot) graphql.ExecutableSchema {
	return MakeExecutableSchema(shortMapper{r: resolvers})
}

type ResolverRoot interface {
	Mutation() MutationResolver
	Query() QueryResolver
	Todo() TodoResolver
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
`}
  >
    <CodePane
      lang="go"
      source={`// graph/models_gen.go
type NewTodo struct {
	Text string \`json:"text"\`
	User string \`json:"user"\`
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Set up resolvers for Resolver interface
`}
  >
    <CodePane
      lang="go"
      source={`type App struct {
	todos []model.Todo
}

func (a *App) Mutation() MutationResolver {
	return &mutationResolver{a}
}

func (a *App) Query() QueryResolver {
	return &queryResolver{a}
}

func (a *App) Todo() TodoResolver {
	return &todoResolver{a}
}`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Main Query type resolver
<br/><br/>
App is our "database" right now
`}
  >
    <CodePane
      lang="go"
      source={`type queryResolver struct{ *App }

func (a *queryResolver) Todos(ctx context.Context) ([]model.Todo, error) {
	return a.todos, nil
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
      source={`type mutationResolver struct{ *App }

func (a *mutationResolver) CreateTodo(ctx context.Context, input model.NewTodo) (model.Todo, error) {
	todo := model.Todo{
		Text:   input.Text,
		ID:     fmt.Sprintf("T%d", rand.Int()),
		UserID: input.User,
	}
	a.todos = append(a.todos, todo)
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
Our graphql server
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
      0.4
    </Heading>
    <List>
      <ListItem>sponsorship (github.com/99designs/gqlgen)</ListItem>
      <ListItem>June 2018 GraphQL Spec</ListItem>
      <ListItem>Directives (@skip, @limit)</ListItem>
      <ListItem>gqlgen init</ListItem>
      <ListItem>Can generate resolver stubs</ListItem>
    </List>
  </Slide>
];
