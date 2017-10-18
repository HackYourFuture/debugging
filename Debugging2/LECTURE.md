# Debugging 2

## Examples

Work through some examples and/or homework assignments together with the
students.

## Creating variables

Inlining is great but not when debugging.

TODO Explain how to extract function call results into variables and why that is
useful.

## ESLint

TODO

## Simplifying input

Often a program is big, and the defect not obvious. The program fails but you
have no clue where to start because the program state is too big to reason
about. Instead of frantically using `console.log` everywhere (which might
sometimes work) we take one step back. We first simplify the input so that we
get to a manageable state, something we can reason about. If our program still
fails we can continue debugging. If it doesn't we need to pick different input.

*TODO Write a buggy program that uses a lots of input and state.*

  - Maybe a sorting algorithm?
  - Something that uses a stack
  - Filtering algorithm (something that filters on a certain string)