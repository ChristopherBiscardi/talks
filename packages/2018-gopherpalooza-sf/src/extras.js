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
      Extras
    </Heading>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
`}
  >
    <Heading size={6} textColor="secondary" caps>
      Dataloaders
    </Heading>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
What happens if we send this query?
<br/><br/>
100 todos can result in 100 DB queries
<br/><br/>
dataloaden (code gen dataloaders)
`}
  >
    <CodePane lang="graphql" source={`query { todos { users { name } } }`} />
    <hr />
    <CodePane
      lang="go"
      source={`func (r *Resolver) Todo_user(ctx context.Context, obj *Todo) (*User, error) {
	res := logAndQuery(r.db, "SELECT id, name FROM user WHERE id = ?", obj.UserID)
	defer res.Close()

	if !res.Next() {
		return nil, nil
	}
	var user User
	if err := res.Scan(&user.ID, &user.Name); err != nil {
		panic(err)
	}
	return &user, nil
}`}
    />
  </Slide>
];
