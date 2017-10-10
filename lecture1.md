# Introduction

Nobody writes programs that are correct the first time around. Today we'll learn
about debugging: techniques and tools for finding and fixing bugs in your code.
In your career as a programmer you will discover and fix many bugs and you will
debug code by other programmers. Throughout the entire curriculum you will get
homework/exercises that requires you to fix buggy programs.

So what is a bug? A bug lets a program do something it was not intended to do.
But that definition is rather vague. Let's break it down. Actually a bug consist
of three distinct parts:

1. A **defect** - a piece of code that can cause an infection.<br/>
*We can think of a **defect** as the source of a disease.*
2. An **infection** - a program state that is different from the programmer's
intention.<br/>
*From the source an **infection** takes place. Someone will take ill and in turn
that person will make more and more people ill.*
3. A **failure** - externally observable effect of faulty program behavior
caused by the infection.<br/>
*When we notice someone took ill we know that there has been an infection and
that there must have been a source somewhere.*

# Hello wordl

Let's look at this program. It has a defect in it:

```javascript
// This program should print:
// hackyourfuture

const elements = ["hack", "your", "future"];
let result = "";
for (let i = 0; i <= elements.length; i++) {
    result += elements[i];
}
console.log(result);
```

## Failures / reading errors

Debugging always starts by reading either some error message or look at
something you didn't expect. Now, what a lot of people do is throw their hands
in the air and say: "aahhhh, it's not working!". Don't do that. Something is not
working, you don't know what, but you're gonna find out. Most likely most of
your code is perfectly fine, but you just made a mistake somewhere. Reading the
error is the absolute first step and the first clue to where your defect might
be hiding.

You have to detach yourself from your code, because your code is wrong. Instead
you need to rely on the solution of the problem you have in your head.
TODO Why?

```javascript
console.log(result); // the observable failure: `hackyourfutureundefined`
```

## Infections

Let's see where our infections take place our hello wordl program. Our infection
starts here:

```javascript
i++;
```

(TODO Explain what state is: the collection of all relevant variables and their
contents.)

Remember that a defect will always result in an undesirable program state. So we
need to look at our state to understand our bug. To do this we add a
`console.log` line to our code where we let the program write down our state
every time we do a lookup in the `elements` array. Our state is `i` and
`elements`. We don't log `result` because `result` is derived from `i` and
`elements` and we assume the defect is not in the lines `result += elements[i]`
nor in `console.log(result)`. The defect must be somewhere before these lines.

```javascript
console.log("index i: " + i + " element: " + elements[i]);
result += elements[i];
```

```javascript
"index i: 0 element: hack"
"index i: 1 element: your"
"index i: 2 element: future"
"index i: 3 element: undefined"
```

We see that at index `3` when we do a lookup in our `elements` array the element
is not there and javascript gives us the `undefined` value. So `i++` is where
the infection happens as a result of our defect, whatever the defect may be.

Then `result += elements[i]` is where our the infected `i` spreads into the
`result` and now `result` is infected too.

## Defects

A defect is always the source of your bug.

*TODO Expand on this*

```javascript
i <= elements.length; // the defect
```

# Simplifying input

Often your program is big, and your defect is not so obvious. The program fails
but you have no clue where to start because the program state is too big to
reason about. So instead of frantically use `console.log` everywhere (which
might sometimes work) we take one step back. We first simplify the input so that
we get to a manageable state, something we can reason about. If our program
still fails we can continue debugging. If it doesn't we need to pick different
input.

*TODO Write a buggy program that uses a lots of input and state.*
  - Maybe a sorting algorithm?
  - Something that uses a stack
  - Filtering algorithm (something that filters on a certain string)
  -

# Find the infection origin
