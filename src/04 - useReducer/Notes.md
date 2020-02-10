# useReducer

- Sometimes state changes are more complex, or synchronized
- We talk about our product in terms we don’t see in our code, like “if the login failed, then this”
  - With a reducer, we can respond to semantically meaningful dispatched types: `LOGIN_FAILED`, `FETCH_REQUESTED`
- `useState` is actually implemented using `useReducer` in the React source code (citation needed)
