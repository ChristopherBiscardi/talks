// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  CodePane,
  Quote,
  Slide,
  Text
} from "spectacle";
import { SocialIcon } from 'react-social-icons';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Static Sites Through SPAs and GraphQL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Chris Biscardi
          </Text>
        </Slide>

      <Slide transition={["zoom"]} bgColor="primary" notes={`
If you're interested in DesignOps, talk to me after or on Twitter.
`}>
      <Heading size={1} lineHeight={1} textColor="secondary">
      @chrisbiscardi
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      Design Systems and UI Platform @Dropbox
      </Text>
      </Slide>

      <Slide transition={["zoom"]} bgColor="primary" notes={`
I'll mention LEO a few times today. It implements a lot of concepts we'll be talking about.
`}>
      <Heading size={1} fit lineHeight={1} textColor="secondary">
      Low Earth Orbit
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      superawesomelabs/leo
      </Text>
      </Slide>

      <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={`
  Some topics for today. Go into detail.
<br>
<br>
"PWAs if we have time."
`}>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Static Sites
      </Heading>
          <List>
            <ListItem>Templating</ListItem>
            <ListItem>Styling</ListItem>
            <ListItem>Data Model</ListItem>
            <ListItem>Universal Apps</ListItem>
            <ListItem>Routing</ListItem>
            <ListItem>PWAs</ListItem>
            <ListItem>Low Earth Orbit</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes={`
templating == way we render the content
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Templating
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            liquid, jsx, handlebars, etc
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" notes={`
templates grow features of general purpose languages
<br><br>
this is breadcrumbs
`}>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Liquid
          </Heading>
          <CodePane source={require('raw-loader!./liquid.txt')}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} caps lineHeight={1} textColor="secondary" notes="use javascript">
            JSX
          </Heading>
          <CodePane lang="jsx" source={require('raw-loader!./jsx.txt')}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" notes="multiple libraries support jsx">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            React
          </Heading>
          <CodePane lang="jsx" source={require('raw-loader!./react.txt')}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" notes="just composable, typed functions">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Flow
          </Heading>
          <CodePane lang="jsx" source={require('raw-loader!./flow.txt')}/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="how we style static sites">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Styling
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            CSS, SASS, CSS Modules, Glamor
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes="css works, but gets hairy as codebase grows. <br><br> we also want to reuse our design systems">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            CSS
          </Heading>
          <CodePane lang="css" source={`.f1 { font-size: 1rem };
.red { background: red };
.f1.red { font-size: 2rem };
`}/>
          <CodePane lang="jsx" source={`<div class="f1 red">
  I'm red and 2rem!
</div>
`}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Problems with CSS at Scale
          </Heading>
          <List>
            <ListItem>Global Namespace</ListItem>
            <ListItem>Dependencies</ListItem>
            <ListItem>Dead Code Elimination</ListItem>
            <ListItem>Minification</ListItem>
            <ListItem>Sharing Constants</ListItem>
            <ListItem>Non-deterministic Resolution</ListItem>
            <ListItem>Isolation</ListItem>
          </List>
          <Cite>React: CSS in JS by vjeux</Cite>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes="hard to accomplish targetting a button in a table row">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            CSS Modules
          </Heading>
          <CodePane lang="css" source={`.f1 { font-size: 1rem };
.red { background: red };
.f1red { composes: red; font-size: 2rem };
`}/>
            <CodePane lang="jsx" source={`<div class="Thing__f1red_h83sn">
  I'm red and 2rem!
</div>
`}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes="not inline styles">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Glamor (replicating css)
          </Heading>
          <CodePane lang="jsx" source={require('raw-loader!./glamor-traditional.txt')}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes="would be great to use new approaches in marketing and documentation sites">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Glamor
          </Heading>
          <CodePane lang="jsx" source={require('raw-loader!./glamor.txt')}/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes={`
Jekyll, etc use a markdown-to-page model. Collections can feel tacked on.
Hugo has "data files", what if it was all just data?
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Data Model
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            .md, .json, APIs and GraphQL
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
If we separate out our data model and think of it as a database [JSON], we can more trivially enable complex integrations.
Contentful, Markdown, Latex, APIs, etc.
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Content Database
          </Heading>
          <CodePane lang="jsx" source={`
const data = [
  Markdown,
  Yaml,
  JSON,
  Latex,
  GitHub API,
  Contentful Posts,
]
`}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
This Markdown happens to have come from a file, but it doesn't need to.
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JSON Model
          </Heading>
          <CodePane lang="js" source={`
const Markdown = {
  attributes: {
    title: 'My First Post',
    slug: 'my-first-post',
    url: '/my-first-post',
  },
  file: {
    path: './data/posts/my-first-post.md',
  },
  body: '<h1>thing</h1>...',
  rawBody: '# thing\\n...',
}
`}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
How do we access the data now that it's blobs of JSON?
GraphQL.
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Querying
          </Heading>
          <CodePane lang="js" source={`
query MyStuff {
  markdown(first: 5) {
    attributes: {
      title
      slug
    },
    body
  }
}
`}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
GraphQL Query Result.
Instead of pushing content into our templates, we can pull content based on URLs, which enables a much higher level of flexibility.
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Query Result
          </Heading>
          <CodePane lang="js" source={`
{
  attributes: {
    title: 'My First Post',
    slug: 'my-first-post',
  },
  body: '<h1>thing</h1>...',
}
`}/>
</Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
Interfaces for data.
`}>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Content Types
        </Heading>
        <CodePane lang="graphql" source={`
type Markdown {
  attributes: MarkdownAttributes
  body: HTML
  rawBody: RawMarkdown
}
`}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
published is a boolean, gen a filter argument.
<br>
<br>
graph.cool is driving this forward
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Auto-Generated Filtering APIs
          </Heading>
          <CodePane lang="graphql" source={`
query {
  allPosts(
    filter: {
      published: false
    }
  ) {
    id
    title
    published
  }
}
`}/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="universal apps are static sites in disguise <br><br> difference is availability of data. build vs runtime">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Universal Apps
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            SSR vs Static
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Universal Code
          </Heading>
          <List>
            <ListItem>Render on Server and Client</ListItem>
            <ListItem>Unified Routing</ListItem>
            <ListItem>Code Sharing</ListItem>
            <ListItem>Unified Data Layer</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
Render app on server. Render app on client. Differences can be trivial.
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Universal Rendering
          </Heading>
          <CodePane lang="jsx" source={require('raw-loader!./universal-static.txt')}/>
          <hr/>
          <CodePane lang="jsx" source={require('raw-loader!./universal-client.txt')}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={`
List of frameworks that support universal rendering.
...and lots more!
Elm, PureScript, etc.
Talk a bit about each framework.
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            UI Frameworks Support Universal Rendering
          </Heading>
          <List>
            <ListItem>React</ListItem>
            <ListItem>Preact</ListItem>
            <ListItem>Inferno</ListItem>
            <ListItem>Angular 2</ListItem>
            <ListItem>Ember</ListItem>
            <ListItem>Vue.js</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
          React Router 4 enables consistency. App ignores routing env.
          `}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Unified Routing
          </Heading>
          <CodePane lang="jsx" source={require('raw-loader!./unified-routing-server.txt')}/>
          <CodePane lang="jsx" source={require('raw-loader!./unified-routing.txt')}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
Reuse the same code to generate a static site *and* provide a progressive enhanced layer.
Enables page transitions, etc.
Build webapp as normal, render to static.
          `}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Code Sharing
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Routing
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            URL Generation and Rendering
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={`
dirs&paths works for simple cases
gets tougher with adv. usecases (multiple versions of docs)
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            URL Generation
          </Heading>
          <List>
            <ListItem>dirs&paths</ListItem>
            <ListItem>Content</ListItem>
            <ListItem>Post Processing</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={`
static render is literally a function that uses a url and data
              `}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            UI as Function of URL
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
Finally, let's discover how these topics combine in LEO, a library for building static site generators.
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Low Earth Orbit
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} bold>
            A Library for Building Static Site Generators
          </Text>
        </Slide>

      <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={`
static bundle is responsible for fetching Data via GraphQL and writing out JSON files.
`}>
<List>
<ListItem>Acquire Data</ListItem>
<ListItem>Process Data</ListItem>
<ListItem>Expose Data as GraphQL API</ListItem>
<ListItem>Extract URLs from Data</ListItem>
<ListItem>Webpack Bundles</ListItem>
<ListItem>Static Bundle (URL)</ListItem>
</List>
        </Slide>

      <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={`
What makes up LEO?
`}>
<List>
<ListItem>Webpack</ListItem>
<ListItem>Plugins</ListItem>
<ListItem>Data Processing</ListItem>
<ListItem>GraphQL</ListItem>
<ListItem>Pluggable Scaffolding</ListItem>
<ListItem>Content Types and Sources</ListItem>
<ListItem>Decoupling Editing, Rendering, and Storage</ListItem>
</List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes={`
We already have a flexible, extensible build tool in Webpack. DLLs for perf. loaders for typescript, etc. plugins for PWAs.
<br><br>
based on webpack
`}>
          <BlockQuote>
            <Quote>... Jekyll is not meant to be included in a build process. Jekyll was created to *be* the build process</Quote>
            <Link href="https://www.smashingmagazine.com/2016/08/using-a-static-site-generator-at-scale-lessons-learned/#separation-of-concerns"><Cite>Smashing Magazine</Cite></Link>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={`
index adds self to webpack config.
process post-processes database.
graphql schema segment (composes them)
webpack loader.js if necessary
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            LEO Plugins
          </Heading>

          <List>
            <ListItem>index</ListItem>
            <ListItem>process</ListItem>
            <ListItem>schema</ListItem>
            <ListItem>loader</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
> leo api
<br><br>
Apollo dev tools
<br><br>
Introspect and validate queries across projects
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            GraphQL
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
entry-static
<br><br>
entry-client
<br><br>
support for React/Preact/Apollo/etc
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Pluggable Scaffolding
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes={`
PWAs offline-plugin
<br><br>
GUIs for editing, store anywhere. Use Dropbox Paper Project as your editor and content source.
<br><br>

`}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            etc...
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={`
`}>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Fin
          </Heading>

          <List>
            <ListItem>@chrisbiscardi</ListItem>
            <ListItem>superawesomelabs/leo</ListItem>
            <ListItem>[webpack] 3:45; Track 2</ListItem>
            <ListItem>[universal apps] 4:35; Track 2</ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
