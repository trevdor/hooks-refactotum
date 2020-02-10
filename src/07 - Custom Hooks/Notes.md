# Custom Hooks

- The React docs:

  > Custom Hooks are more of a convention than a feature. If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook. The useSomething naming convention is how our linter plugin is able to find bugs in the code using Hooks.

- Allow you to neatly share behaviors between function components
- Moar React docs:
  > Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always start with `use` so that you can tell at a glance that the [rules of Hooks](https://reactjs.org/docs/hooks-rules.html) apply to it.
