# Stock Image

## Learning how to call external API

- get the API

the image API: [Unsplash Developers](https://unsplash.com/oauth/applications/280700)

- call it to get the data

- use .env to configure it
  - to create .env file in root path
  - typing the key and values for the env vars => `REACT_APP_YOURNAME = YOUR_VALUE`
  - in js file, accessing the env vars => `process.env.REACT_APP_YOURNAME`
  - restart the client server whenever the env vars changed
  - to make sure `.env` is in `.gitignore`

## automatic refresh when scrolling

- the DOM event => `addEventListener(eventName, handler)` / `removeEventListener(eventName, handler)`
- who is going to be manipulated => `window` object, not any HTML Node elements
- when to determine auto-refresh is should be triggered => the `window.innerHeight + window.scrollY >= document.body.scrollHeight - 2`

  > // console.log('visible window height: ', window.innerHeight)
  >
  > // console.log('vertical scroll offset: ', window.scrollY)
  >
  > // console.log('total height: ', document.body.scrollHeight)

- how to apply it in React => try useEffect() hook
  > It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes

The workflow:

- initial render of the code in return statement => componentDidMount
- anything which triggers re-render => componentDidUpdate

## Two scenarios of using `useRef`

- One of the usage is to refer another elements or components
- The other is to [keep any mutable value around in current](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)

## Others

- spread operator to keep previous values in the data variable
- loading useState when initialize components
