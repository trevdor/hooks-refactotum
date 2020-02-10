# useEffect

- Format: `useEffect(callbackFunction, [dependencyArray])`
- `useEffect` is used for side-effects. Typically this means we want to do something outside of our component, like a network request or perhaps with cookies/localStorage, and we want to do that side effect any time state changes.
- The effect callback runs when the component first mounts and then anytime the values in the dependency array change. Having an empty dependency array is a way to ensure the effect only runs once.
- However, be careful, any variables that your effect uses (depends on) need to be stated in your dependency array. With the older mental model of time and `componentDidMount`, we thought in terms of "this just needs to happen once when we mount". But now with useEffect we need to think in terms of "anytime state changes, what do I need to do". Therefore you'll probably need to put values in your dependency array often.

```js
useEffect(fn); // runs when any state changes
useEffect(fn, []); // runs when no state changes
useEffect(fn, [some, state]); // runs when some state changes
```

- [React Docs](https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies):
  > It is only safe to omit a function from the dependency list if nothing in it (or the functions called by it) references props, state, or values derived from them.
- For people who have some React experience, it's easy to compare `useEffect` to things like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`. However, this older mental model where "time" is considered will not be a good mental model for hooks and `useEffect`. **Instead we think in terms of state and changes to that state and how that needs to synchronize to the DOM and what effects may need to be run again when state changes.**

> To get productive, you need to “think in effects”, and their mental model is closer to implementing synchronization than to responding to lifecycle events.

# Thinking in Effects

- Try to think in states, not events
  - JSX expresses how we want the DOM to look given the inputs of props and state
  - `useEffect` lets you think about side-effects in terms of their relation to state: "when these deps change, do these side-effects (imperative work)"
- Effects are synchronous. You can include async calls inside the function you pass to `useEffect`, but the first arg fn the hook takes must be synchronous

## Data Loading

When setting state asynchronously in an effect, there's always a chance the component will become unmounted or the dependency array might change before the set state is called. For both cases, we need to use a cleanup function to ensure we're not setting state on the unmounted component or setting state that was based on the previous values of the dependency array. This is how we might prevent this problem with a isCurrent variable:

```js
useEffect(() => {
  // 1. The effect first runs so we'll say it's "current"
  let isCurrent = true;
  // 2. Go out and get a user on the network
  fetchUser(uid).then(user => {
    // 5. A moment later, the promise does resolve (the component
    // is no longer mounted though). This condition will prevent us
    // from setting state on an unmounted component.
    if (isCurrent) {
      setUser(user);
    }
  });
  // 3. Here is a function that can be called if we need to
  // cleanup the effect
  return () => {
    // 4. Lets imagine the user leaves the page before the fetchUser
    // promise resolves. This cleanup will be called and set isCurrent
    // to be false.
    isCurrent = false;
  };
}, [uid]);
```

Here is how a cleanup might look for a subscription if the API for the subscription were to return an unsubscribe function for itself:

```js
useEffect(() => {
  const unsubscribe = subscribeToPosts(uid, setPosts);
  return () => {
    unsubscribe();
  };
}, [uid]);
```

# Resources

- ["Using the Effect Hook"](https://reactjs.org/docs/hooks-effect.html)
- A very long but complete guide to `useEffect`: https://overreacted.io/a-complete-guide-to-useeffect/

  - Starts with a must-read tl;dr

- [Dan Abramov: Disabling exhaustive-reps is usually a bad idea](https://github.com/facebook/create-react-app/issues/6880#issuecomment-485912528)
  - Later in the same thread: [Dan offering better options to folks who wanted to disable the rule](https://github.com/facebook/react/issues/14920#issuecomment-471070149)
