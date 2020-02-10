# Why Hooks?

# Why React?

- Composable
- Declarative
  - UI = fn(state)

# Why Function Components?

- Class components conflate state and time
- Class instance variables are mutable
- Functions capture props and state
- Functions help you think “given these inputs, what output should I produce?”

# Why Hooks?

- Function components needed a way to "hook into" React state and lifecycle features
  - They're a way to reuse stateful logic--not state itself--without changing your component hierarchy
- React provides some bulit-ins and you can make your own, too

# Resources

- [Official React Hooks Docs](https://reactjs.org/docs/hooks-intro.html)
- [React Training Hooks Workshop](https://github.com/ReactTraining/hooks-workshop)
  - [Workshop notes](https://github.com/ReactTraining/hooks-workshop/blob/master/student-lesson-notes.md)
- [Function vs. Class Components](https://overreacted.io/how-are-function-components-different-from-classes/)

# Super nerdy extra

- Seb Markbage gist: [Why is React Doing This? (hooks)](https://gist.github.com/sebmarkbage/a5ef436427437a98408672108df01919)
  - Features Rich Harris arguing the Svelte approach
