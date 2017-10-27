# Full Stack Product Development
TODO: title not great; needs to imply the decision making process

Chris Biscardi, Founder mntnr.systems
ex-Docker, Dropbox

----
Talk is about making decisions when building a new product. Hit on the
most relevant considerations like:

* What is the core product value.
  - will inform about what we choose to build vs buy
  - Ex: Monitoring (probably buy), core data pipeline (probably build)
* Match that against current skills and choose what to invest in
  learning
* Go into how to find resources once choosing what to invest in
* Cover a range of topics. The point is constructing a full product
  which means deployments, multiple languages, picking outside
  services, marketing pages, etc. Focus on the problems and then
  follow through to solutions.
----

# What's the product?

Tooling for maintainers with active codebases, such as Open Source
maintainers.

# What are your Core Problems?

First, determine what "your problems" are. The ones you'll solve in
house. For example, honeycomb.io built a columnar data store because
it was a core piece of their business. We won't be building a data
store.

* Ingesting Webhooks and doing analyses on them. ie: a data
  pipeline.

# Decisions, Decisions

Most important part of the platform will be the data pipeline. Since
this is the most important part of the platform we'll spend special
attention to make sure we upskill in this area and get the right
model.

## Data Pipeline Requirements

* Forever Storage of Events (Webhooks)
* Replay of Events
  - Backfill new features with data
  - Fix bugs without disrupting production
* Highly Available
  - This can't go down because we only get one shot at receiving a
    webhook.

Nice to haves

* Stream Processing
* Support a Microservice Architecture

This means Kafka!

### Why Kafka?

* All of the Above
* Kafka Connect (to Postgres)
* Exciting Future
  - KSQL
  - Kafka Streaming
* Upskilling Kafka
  - Kafka: the definitive guide

## Deployment

* Background in containers (Worked at Docker)
* Isolation and individual deployments
  - We don't want the UI and the data pipeline to be deployed at the
    same time. Comparatively, I'm perfectly happy bringing down the
    website, it's only one of the possible UIs. I'm not happy at all
    to cause downtime for ingestion of webhooks. Webhook ingestion
    downtime 
* Oh boy can we not transition another Django app to API driven
  frontend? Pretty Pls? Celery, etc isn't going to work here anyway.

### Why K8s

* Standout leader in container orchestration
* RBAC, Istio,

### Upskilling on K8s

* background in containers (Docker)
  - familiar with exec, run, logs, docker-compose, etc
  - Shipping containers to prod since 2014
    * No orchestration at that time
  - Familiar with registries, etc (Worked on Docker Hub)
* Kubernetes Up and Running
  - All practical knowledge
  - Pods, ReplicaSets, StatefulSets (kafka), betas!
* TGIK8s video series
  - RBAC, Istio, Pods, etc

### Why GKE

* Maintaining infrastructure is not a core value prop of the product.
* GKE handles upgrades, kube master, node pools

### Making GKE Easier

* Don't want to hit up the GUI for everything
* Would love a CI based solution for expanding node pools, etc

### Terraform!

* CI deployed node-pools!
* Testable Infrastructure
* "Cons"
  - Terraform Enterprise is basically required for a locking solution.
    * Solution: [red warning.md jpg]

# Kafka Data Pipeline

* Deploying Zookeeper/Kafka on K8s?
  - Turns out, yes!
  - StatefulSets

## Webhook Receiver

* Highly Available
* Stateless
* kafka producer

# Why Go

* Prototyped in Haskell
* Solid, supported clients
  - confluentinc/confluent-kafka-go
  - google/go-github
* Small binaries
  - Speed of deployment (pulls)
  - Less registry space
* Easy Static Builds
  - Smaller containers (alpine/musl)
* Community
  - Building on K8s, containers, etc is a "go ecosystem"
* Cons:
  - Avro/Schema Registry is a pain

# Getting Data Out

* Multiple Clients
* GraphQL Server
* Node is reigning champ in the ecosystem
  - apollo tools, engine, etc

# UIs

* Marketing
* Webapp
* Native Mobile Apps (iOS/Android)
* CLIs, Editors, and Browser Extensions

## Marketing Site

* Interactivity
* Reuse preact components
* Gatsby or preact-cli

## Web App UI

* Users are highly sensitive to "JS lag"
  - open source maintainers
  - (load, parse, execution, etc)
* Not giving up React Component Paradigm
  - It's too useful
  - Better DX leads to better products
* The default UI, but not the only UI
* Automated Deployment!

### Preact, Emotion, Apollo

* Emotion
  - Small, Performant
  - Best CSS-in-JS solution out there
  - Disclaimer, I contribute
* Preact
  - Small, Performant.
  - Components, Router, conditional fetch/promise polyfills in 4.5kb
  - preact-cli!!
* Netlify
  - Deploy on push
  - Deploy Previews for PRs

## Native Presence

* React Native

## Editors and CLIs

* A lot of OSS maintainers live on the CLI or in Editors

