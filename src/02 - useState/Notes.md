# useState

- Format: `const [value, setValue] = useState(defaultValue)`
- Updater format: `setValue(prevValue => return prevValue+1)`
- State are the variables that change over time in the component.
- The entire component re-renders (the component function gets called again) each time state changes.
- Multiple state values are done with multiple `useState`.
- The order matters to React, so we can't "conditionalize" calls to useState
- A good mental model for React is that UI is a function of state, in other words:

  - The component renders for the first time and JSX is created from initial props and state.
  - When state changes (often times through events like clicks), React calls our component function again and ensures the state variables reflect what was changed.
  - This re-render will mean new JSX is returned that reflects the new state. It's like a new instruction manual for what do change in the DOM.
  - React takes the previously returned JSX and the new JSX and finds the differences (called a diff). Only the things that are different are used to change the real DOM. This makes React very fast.
