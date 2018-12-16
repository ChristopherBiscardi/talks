# Title

Let's Go, Generate!

# Elevator Pitch

> Please use go generate creatively. It's there to encourage experimentation.
>
> - Rob Pike

Codegen is often thought of as mystical dark art but it's a powerful
tool in the go toolbox. In this talk we'll demystify go:generate, and
talk through interesting use cases in open source projects.

# Description

The audience will walk away from this talk equipped with the tools and
conceptual framework they need to start using go:generate (and codegen
in general) in their own libraries and applications. We'll cover the
basics (what `go:generate` is, how it works, why using `go run` makes
more sense than depending on other binaries) before advancing to
investigating implementations in real-world open source projects like
gqlgen, which uses codegen to maintain type safety in GraphQL
APIs. Finally we'll touch on more advanced and creative codegen in
projects like Kubernetes, which can generate clients and other API
machinery using a universal DeepCopy method and has its own go package
and comment syntax.
