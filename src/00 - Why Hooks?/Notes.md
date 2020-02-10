# Why Hooks?

# Why React?

- Composable
- Declarative
  - UI = fn(state)

# Why Function Components?

- Class components conflate state and time
- Class instance variables are mutable
- Functions help you think “given these inputs, what output should I produce?”
- Functions tend to be smaller 

  <details>
    <summary>Class Component</summary>

    ```js
    class Posts extends React.Component {
      state = { posts: null }
      subscribe() {
        this.unsub = subscribeToPosts(this.props.uid, posts => {
          this.setState({ posts})
        })
      }

      componentDidMount() {
        this.subscribe()
      }

      componentDidUpdate(prevProps) {
        if (prevProps.uid !== this.props.uid) {
          this.unsub()
          this.subscribe()
        }
      }

      componentWillUnmount() {
        this.unsub()
      }

      render() {
        this.propschildren(this.state.posts)
      }
    }
    ```
  </details>

  <details>
    <summary>Function Component</summary>
    
    ```js
    const [posts, setPosts] = useState(null)
    useEffect(() => subscribeToPosts(uid, setPosts), [uid])
    ```
  </details>

- Functions capture props and state

- Dan Abramov:

  > Every function inside the component render (including event handlers, effects, timeouts or API calls inside them) captures the props and state of the render call that defined it.

- Also Dan Abramov:

  > Kingdoms will rise and turn into ashes, the Sun will shed its outer layers to be a white dwarf, and the last civilization will end. But nothing will make the props “seen” [in a given render], change...

  > That’s what allows React to deal with effects right after painting — and make your apps faster by default. The old props are still there if our code needs them.

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
