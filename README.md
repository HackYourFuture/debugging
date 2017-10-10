# Debugging

*(This is still a work in progress)*

Debugging is a big part of a programmer's life. Programmers inevitably produce
bugs as a side-effect of writing code. Having a proper understanding of what a
bug is and how to squash it is an essential skill for any developer. In this
class we provide the students with a vocabulary and tools for talking and
thinking about bugs and how to get rid of them.

## Theory

Following Andreas Zeller's *Why programs fail* we start by introducing a
vocabulary:

1. a **defect** - a piece of code that can cause an infection
2. an **infection** - a program state that is different from the programmer's intention.
3. a **failure** - externally observable effect of faulty program behavior caused by the
infection.

## Practice

The nature of classes in HackYourFuture is very hands-on and in that spirit we
should provide the students with tools and assignments. We show some tools that
can help track infections like `console.log`, the Chrome javascript debugger,
assertions, and unit tests.

Assignments are comprised of buggy programs, ranging from easy/hard to fix. It's
then up to the students to find and fix the bugs.

*Of course for us as teachers it's gonna be challenging to come up with various
 buggy programs that strike the right difficulty balance.*

## Requirements

- To teach students how to systematically debug programs.
- Integrate this material into the curriculum as much as possible.
- Class is taught in a mandatoryhangout session.
- Do actual debugging in front of the class
- Work through one of the homework examples during class. Ask them if they made
  homework, and solve it together.

## Ideas

- Use the MAKEME, README, REVIEW structure just like the other classes.
- Unit tests with npm and Github giving the student/teacher feedback (George)
- Use the default structure for assignments:
    - For every assignment the student has to add a file.
    - Little programs they need to fork and fix. Clone and then pull request.
    - The student has to give a name to the file to explain what it does.
- Give a master class to the HYF teachers and alumni.
- Add assignments on unit testing.
- Let them read the program line by line in class.
- Look at the javascript 1 assignments for inspiration on writing buggy assignments.

## Notes

- Students use various IDEs: Brackets, Visual Studio Code, Chrome debugger.

## TODO

- Introduce myself (Frank) to class 12 before giving a hangouts lecture.
- Ask the teachers to add debugging assignments.
- What version of javascript do we use? If we use ES6, we need an ES6 compatible
debug environment as well. I'm not sure the Chrome debugger can help us there.

