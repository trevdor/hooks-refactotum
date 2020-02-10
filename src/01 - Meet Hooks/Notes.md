# Meet Hooks

# Built-in Hooks

- See https://reactjs.org/docs/hooks-reference.html
- Basic Hooks

  - `useState`
  - `useEffect`
  - `useContext`

- Additional Hooks

  - `useReducer`
  - `useCallback`
  - `useMemo`
  - `useRef`
  - `useImperativeHandle`
  - `useLayoutEffect`
  - `useDebugValue`

# Rules of Hooks

- See https://reactjs.org/docs/hooks-rules.html
- Only Call Hooks at the Top Level
  - Don’t call Hooks inside loops, conditions, or nested functions.
- Only Call Hooks from React Functions
  - Don’t call Hooks from regular JavaScript functions. Instead, you can:
    - ✅ Call Hooks from React function components.
    - ✅ Call Hooks from custom Hooks

- Lint rule is super important if we want our hooks to be durable and bug-free

# De-mystifying Hooks

- Ryan Florence "phony hooks"

# How do lifecycle methods correspond to Hooks?

- This comparison may be more harm that help, but people always ask this question
- It's a different way of thinking. I'd suggest you'll have a better time in React if you embrace that way instead of tying yourself to lifecycle concepts after you've been freed of them.
- But see https://reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks for reference
