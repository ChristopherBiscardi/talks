# Talks

This repo contains talks I've given and proposals that have been
rejected. I think both contain interesting data for others who are
trying to speak more at conferences. The content here is not intended
to be complete, but rather a useful repo for my own organization as
well as a look into proposals which are accepted/rejected and the
talks they develop into.

- **PDFs** can be found in [./pdfs](./pdfs/). They are named by `talkTitle_location_year`.
- **Source** for the PDFs can be found in [./packages](./packages/).
- **Proposals** are organized
  in [proposals/submissions.org](./packages/proposals/submissions.org)
  and detailed
  in [proposals/proposals](./packages/proposals/proposals/).

# GopherCon UK: Going GraphQL

[video](https://www.youtube.com/watch?v=FdURVezcdcw)

This talk covers GraphQL from a Golang perspective, covering REST,
GRPC, and finally GraphQL. We introduce a Golang library for building
GraphQL servers, [gqlgen](https://github.com/99designs/gqlgen)

# GothamGo: From JS to Go

[video](https://www.youtube.com/watch?v=1S1t0jhktqI)

How and why should JS engineers consider moving to Golang.

# QCon: SDL First Products

[infoq](https://www.infoq.com/presentations/graphql-sdl)

[video](https://www.youtube.com/watch?v=xTZkDYZXh14) of a cut-down
version of the talk given at an Apollo meetup.

Talking about how to drive API development forward with the data model
as the source of truth using the GraphQL Schema Definition
Language. How to use GraphQL and its SDL to separate back-end
from front-end development so they can proceed independently, and some
of the limitations GraphQL has.

# Static Sites Through SPAs and GraphQL

[PDF](./pdfs/static-sites-through-spas-and-graphql_forwardjs-2017.pdf)

After using Jekyll style static site generators for years and
contributing to [Gatsby](https://github.com/gatsbyjs/gatsby) I found
that what I wanted to do required a completely separate project. Thus
[Low Earth Orbit](https://github.com/superawesomelabs/leo) was
born. This talk details the motivations behind LEO including

- Reframing static site generation as a Universal Rendering problem
- Using GraphQL to enable powerful new approaches to Atom feeds, pages
  with multiple different kinds of data, and PWAs.
- Using any UI technology (React, Preact, Inferno, Angular) instead of
  being tied to a template language or specific technology.
- Reusing components built from design systems to build static sites.

# Demystifying GraphQL Clients

[PDF](./pdfs/demystifying-graphql-clients_react-amsterdam-2017.pdf)

This talk covers GraphQL from the client's point of view. We start
with plain strings and introduce the varied facets of a GraphQL query
including Fields, Fragments, Arguments, etc. Then we move into why you
would want to use a GraphQL client like Relay or Apollo and dive into
concrete examples to reveal how Apollo 1.0 and Relay Modern enable
advanced use cases such as optimistic UI and prefetching.

# Generating GraphQL APIs for Content-Based Sites

[video](https://www.youtube.com/watch?v=bc_28oOhoBQ)

# Developing and Deploying Haskell on Docker

[video](https://begriffs.com/posts/2015-08-11-dev-deploy-haskell-docker.html)
