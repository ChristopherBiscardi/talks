# Proposed title:
Advanced Component Libraries

# Description of the presentation

BEM -> CSS Modules -> Glamor?

BEM enables modularization through user effort. CSSModules enables
isolation on top of modularization through automation and mangled
classnames. Glamor provides escape hatches through the isolation of
CSS Modules but keeps the mangling default and allows static analysis
of escape hatch usage.

The CSS we write today is static and unyielding. This presents
problems when trying to build component libraries in fast paced
environments. We have to predefine APIs up front with little
extensibility except through JS manipulation of tasks CSS is already
quite good at. With Glamor we can opt to use the full power of CSS
when it makes sense and in the process solve tricky issues with other
approaches such as CSS Modules.

Problems we will cover:
  * Buttons in a Group (Overrides)
  * Table Row with Hover Button (Targetting Children)

We will also explore four levels of API design when building component
libraries in this fashion:
  * Ideal APIs
  * Exposing official APIs through props
  * Variable-based theming ("Officially Supported Overrides API")
  * Failure Modes: Overriding vs Forking

By generating CSS as needed we can expose a JavaScript APIs that
do not rely on inline styles. This enables classic CSS features such
as pseudoselectors, keyframes, and children selection.

# Suggested main topic

Frontend frameworks and libraries

-- Audience information

# Who is the presentation is for?
It will be primarily targetted at professionals who need or want to
build their own component libraries. The topics may be new to a large
range of people so the content also allows for a less experienced
developer to follow along.

# What will they be able to take away?

Audience members will walk away with an enhanced understanding of
CSS-in-JS techniques specifically targetted at building and
maintaining component libraries. This will enable them to advocate to
other engineers, designers, and especially people who are more
comfortable with classic CSS techniques.

# What prerequisite knowledge do they need
* Knowledge of a component based JS framework (React, Angular, etc) as
  the talk works through a combined CSS/JS combined approach.
* CSS techniques as used in Bootstrap, Foundation, etc.

# Is this a session (40 minutes) or a tutorial (3 hours)?
40 minutes

Speaker(s):
# biography

Chris built the UI team at Docker before continuing to work on
component libraries at Dropbox. He is the author of LEO: A GraphQL
based static site generator.

# hi-res headshot (minimum 1400 pixels wide; required)

# A video of the speaker
