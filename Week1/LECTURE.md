# Debugging 1

Nobody writes programs that are correct the first time around. Today we'll learn
about debugging: the act of finding and fixing bugs in your code. In your career
as a programmer you'll discover and fix many bugs and you'll debug code by other
programmers. Learning how to debug a program is an essential skill for any
programmer. Throughout the entire curriculum you will get homework/exercises
that require you to fix buggy programs.

What is a bug? A bug lets a program do something it was not intended to do. But
that definition is rather vague. Let's break it down. Following
Zeller<sup>1</sup> a bug consist of three distinct parts:

1. A **defect** - "a piece of code that can cause an infection."<sup>1</sup>

*We can think of a **defect** as the source of a disease.*

2. An **infection** - "a program state that is different from the programmer's
intention."<sup>1</sup>

*From the source of the disease an **infection** takes place. Someone will take 
ill and in turn that person will make more and more people ill and so on.*

3. A **failure** - "externally observable effect of faulty program behavior
caused by the infection."<sup>1</sup>

*When we notice someone took ill we know that there has been an infection and
that there must have been a source somewhere.*

## Hello wordl

Let's look at this program. It has a defect in it:

```javascript
// This program should print:
// hackyourfuture

const elements = ["hack", "your", "future"];
let result = "";
for (let index = 0; index <= elements.length; index++) {
    result += elements[index];
}
console.log(result);
```

## Failures / reading errors

To debug our code we have to become a bit like Sherlock Holmes. We have to
question everything. Our code is wrong and we can't trust it anymore. Be
suspicious while debugging, it helps you get into the right mindset.

Debugging always starts by reading either some error message or look at
something you didn't expect. Now, what a lot of people do is throw their hands
in the air and say: "aahhhh, it's not working!". Don't do that. Something is not
working, you don't know what, but you're gonna find out. Most likely most of
your code is perfectly fine, but you just made a mistake somewhere. Reading the
error is the absolute first step and the first clue to where your defect might
be hiding.

Let's run our program to see what it does:

```javascript
console.log(result); // the observable failure: `hackyourfutureundefined`
```

Quite simply we expect `hackyourfuture` to be logged but instead we got
`hackyourfutureundefined`. This is our failure, now we need start looking
at where our program got infected.

## Infections

A defect will always result in one or multiple infections. Remember that an
infection is some program state that is different from what we intended it to
be. The program state (or state, in short) consists of all the variables and
their contents. 

**Questions:**
1. In the code we're currently debugging, what is the state?
2. Why would we want to look at the state? How does that help us get closed to
   the defect?
3. We can look at the state using `console.log`. Where should we write a
   `console.log` line?
4. What state should we log?
5. What is going to be the output of our `console.log` line?

To find the defect we first need to look at the state to see what got infected.
To do this we add a `console.log` line to our code where we let the program
write down our state every time we do a lookup in the `elements` array.

```javascript
result += elements[index];
console.log("index: " + index + " element: " + elements[i] + " result: " + result);
```

After we run the program the output of our `console.log` looks like this:

```javascript
"index i: 0 element: hack result: hack"
"index i: 1 element: your result: hackyour"
"index i: 2 element: future result: hackyourfuture"
"index i: 3 element: undefined result: hackyourfutureundefined"
```

We see that at index `3` when we do a lookup in our `elements` array. The
element isn't there and javascript gives us the `undefined` value instead. 

**Question:** Based on this information where do you think the first infection
happened?

`index++` is where the infection happens as a result of our defect, whatever
that defect may be.

**Question:** What other state got infected?

Because we add `undefined` (through `result += elements[index]`) to `result`,
the `result` variable is now infected as well.

## Defects

Why would `index` become `3` in the first place? If we can answer that question
we get close to the defect. Let's look at what the `for` loop does:

```javascript
for (let index = 0; index <= elements.length; index++)
```

A `for` loop is a very useful construct but also quite complicated. We can think
of a `for` loop as a specific kind of `while` loop.

**Question:** how do we write the `for` loop in terms of a `while` loop?

```javascript
let index = 0;
while(index <= elements.length) {
    result += elements[index];
    index = index + 1; // Same as index++
}
```

The line `while(index <= elements.length)` prevents this program from looping
infinitely until the end of time and instead only runs until `index` reaches a
certain value. We know that when `index` is `3` it's infected. 

**Question:** in what other place(s) do we find the number `3`?

We also know that `elements.length` is also `3` because it contains three
elements. We can now deduce that our defect is in the `index <= elements.length`
statement and in fact it should have been:

```javascript
index < elements.length
```

**Question:** what would the output of the following program be? Is there a bug?
If so, what's the defect?

```javascript
// This program should print:
// hackyourfuture

const elements = ["hack", "your", "future"];
let result = "";
for (let index = 1; index < elements.length; index++) {
    result += elements[index];
}
console.log(result);
```

*Background: These types of bugs are called off-by-one errors and are in fact
quite common. In our first buggy program we were expecting the value `3` to
correspond with the 3rd element in the array, but arrays in javascript start
counting at `0`. The 3rd element corresponds to the `index` variable being
equal to `2`.*

**QUESTION:** If there has never been a failure in your program does that mean
that there are no defects in it? Motivate your answer.

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

## Summary

We covered a lot of ground in this lecture, introducing many new concepts. To
summarize:

1. You learned that bugs are part of a programmer's life.
2. You learned that a bug consists of three distinct parts:
    1. A defect.
    2. One or multiple infections.
    3. An observable failure.
3. You learned how to use `console.log` to look for infections to lead you to
   the defect.

<sup>1</sup> Zeller, Andreas - Why Programs Fail, Second Edition: A Guide to
Systematic Debugging (2009)