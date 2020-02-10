# useEffect

- Format: `useEffect(callbackFunction, [dependencyArray])`
- `useEffect` is used for side effects. Typically this means we want to do something outside of our component, like a network request or perhaps with cookies/localStorage, and we want to do that side effect any time state changes.
- The effect callback runs when the component first mounts and then anytime the values in the dependency array change. Having an empty dependency array is a way to ensure the effect only runs once.
- However, be careful, any variables that your effect uses (depends on) need to be stated in your dependency array. With the older mental model of time and `componentDidMount`, we thought in terms of "this just needs to happen once when we mount". But now with useEffect we need to think in terms of "anytime state changes, what do I need to do". Therefore you'll probably need to put values in your dependency array often.

```js
useEffect(fn); // runs when any state changes
useEffect(fn, []); // runs when no state changes
useEffect(fn, [some, state]); // runs when some state changes
```

- For people who have some React experience, it's easy to compare `useEffect` to things like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`. However, this older mental model where "time" is considered will not be a good mental model for hooks and `useEffect`. **Instead we think in terms of state and changes to that state and how that needs to synchronize to the DOM and what effects may need to be run again when state changes.**

> To get productive, you need to “think in effects”, and their mental model is closer to implementing synchronization than to responding to lifecycle events.

# Resources

- ["Using the Effect Hook"](https://reactjs.org/docs/hooks-effect.html)
- A very long but complete guide to `useEffect`: https://overreacted.io/a-complete-guide-to-useeffect/

  - Starts with a must-read tl;dr

- [Dan Abramov: Disabling exhaustive-reps is usually a bad idea](https://github.com/facebook/create-react-app/issues/6880#issuecomment-485912528)
  - Later in the same thread: [Dan offering better options to folks who wanted to disable the rule](https://github.com/facebook/react/issues/14920#issuecomment-471070149)
