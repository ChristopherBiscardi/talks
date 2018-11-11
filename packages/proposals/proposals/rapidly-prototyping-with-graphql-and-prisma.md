# Title

Rapidly Prototyping with GraphQL and Prisma

# Abstract


In this talk, we will cover how to drive API development forward with the
data model as the source of truth using the GraphQL Schema Definition
Language. In typical REST approaches, UI development is often blocked on
APIs and API development is hampered by not knowing how clients are
using the API. With a GraphQL approach the data model is the shared
point of communication separating the implementation details of the
endpoint from the implementation details of clients. Takeaways from
this talk will include practical knowledge of Prisma, Apollo,
GraphiQL, and more. The audience will also walk away knowing how to
define a new GraphQL API, generate fake data, and communicate API
evolution through directives. Whether building a new product, breaking
up a monolith, or just plain prototyping GraphQL makes it easier to
communicate and verify changes by focusing on data modeling rather
than software abstraction.

# Talk

Start with Docker Hub story. Built out the APIs and frontend
simulataniously, which worked, but resulted in quite a longer
development cycle than necessary (and it was hard!)

## What does audience already know?

* Backend API development

## 

Instead of [graph of waterfall API -> UI development], We should
[graph of data model tree based development].
