// Import React
import React, { Fragment } from "react";
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  Image,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
const images = {
  gloryOfRest: require("./img/glory-of-rest.png"),
  webmachineRESTDiagram: require("./img/webmachine-rest-diagram.png")
};

export default [
  <Slide
    transition={["zoom"]}
    bgColor="primary"
    notes={`
When we build APIs, who are we building them for?

Multiple UI Surfaces

CLIs? GUIs? Web? Native? Random jobs?
`}
  >
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      APIs for Who?
    </Heading>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
and how does that affect who we build it for?
`}
  >
    <Heading size={6} textColor="secondary" caps>
      Built with what?
    </Heading>
    <List>
      <ListItem>REST</ListItem>
      <ListItem>GRPC</ListItem>
      <ListItem>GraphQL</ListItem>
    </List>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
been around since 2000
<br/>
<br/>
popular a few years later
<br/>
<br/>
"true rest" conversations
`}
  >
    <Heading textColor="secondary" caps>
      REST
    </Heading>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Q: Anyone reached the top level?
<br/><br/>
problem is partially that no one makes it all the way to REST
<br/><br/>
Architectural concept that has devolved into being "GET and POST HTTP based API"
`}
  >
    <Image src={images.gloryOfRest} />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
rigid, nested, manually enforced URL structure
<br/><br/>
"resources"
`}
  >
    <Heading size={6} textColor="secondary" caps>
      URL Structure
    </Heading>
    <CodePane
      source={`authors/

authors/1

authors/1/books

authors/1/books/10

authors/1/books/10/summary`}
    />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Q: Implemented Put vs Post?
<br/><br/>
Then had to explain the difference
`}
  >
    <Heading textColor="secondary">HTTP</Heading>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Best showcase of a REST toolkit flow -- erlang webmachine
`}
  >
    <Image src={images.webmachineRESTDiagram} />
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Swagger, markdown, etc for documentation
`}
  >
    <Heading textColor="secondary" fit>
      Documentation
    </Heading>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
sparse fieldsets, but not often implemented
`}
  >
    <Heading textColor="secondary" fit>
      Overfetching
    </Heading>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
Get a resource that has list of IDs
<br/><br/>
lucky if you have a "multi-get" endpoint
<br/><br/>
if hypermedia: list of URLs
<br/><br/>
Some people implement expand APIs, most don't (And still gets hairy)
`}
  >
    <Heading textColor="secondary" fit>
      Underfetching (N+1)
    </Heading>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
last note on REST: Netflix style
<br/><br/>
BFF: not bad. REST just pushes you there sooner.
<br/><br/>
resource intensive to support
`}
  >
    <Heading textColor="secondary" fit>
      Backends for Frontends
    </Heading>
  </Slide>,
  <Slide
    transition={["zoom"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
RPC Framework, not REST.
<br/><br/>
Useful when you control the stack
`}
  >
    <Heading textColor="secondary" fit>
      GRPC
    </Heading>
    <List>
      <ListItem>Authentication</ListItem>
      <ListItem>Bidirectional streaming and flow control</ListItem>
      <ListItem>Blocking or nonblocking bindings</ListItem>
      <ListItem>Cancellation</ListItem>
      <ListItem>Timeouts</ListItem>
    </List>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="tertiary"
    notes={`
grpc web is beta
<br/><br/>
grpc-web: General-Available by Oct. 2018
<br/><br/>
`}
  >
    <Heading textColor="secondary" fit>
      GRPC Web
    </Heading>
  </Slide>
];
