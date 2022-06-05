# React Router Notes

## Overview

React Router is published to `npm` in three different packages[1]:

- `react-router` contains most of the core functionality of React Router including the route matching algorithm and most of the core components and hooks

- `react-router-dom` includes everything from `react-router` and adds a few DOM-specific APIs, including `<BrowserRouter>`, `<HashRouter>`, and `<Link>`

- `react-router-native` includes everything from `react-router` and adds a few APIs that are specific to React Native, including `<NativeRouter>` and a native version of `<Link>`

## Setup

To get React Router working in your app, you need to render a router element at or near the root of your element tree[1].

- `<BrowserRouter>` or `<HashRouter>` should be used when running in a web browser (which one you pick depends on the style of URL you prefer or need)

- `<StaticRouter>` should be used when server-rendering a website

- `<NativeRouter>` should be used in _React Native_ apps

- `<MemoryRouter>` is useful in testing scenarios and as a reference implementation for the other routers

- `<unstable_HistoryRouter>` is used with your own `history` instance.

Each one renders a `<Router>` automatically.

## Routing

Routing is the process of deciding which React elements will be rendered on a given page of your app, and how they will be nested. `React Router` provides two interfaces for declaring your routes.

- `<Routes>` and `<Route>` if you're using `JSX`
- `useRoutes` if you'd prefer a JavaScript object-based config

### `<Routes>` and `<Route>`

- Basics

`<Routes>` and `<Route>` are the primary ways to render something in React Router based on the current `location`. You can think about a `<Route>` kind of like an `if` statement; if its `path` matches the current URL, it renders its `element`! The `<Route caseSensitive>` prop determines if the matching should be done in a case-sensitive manner (defaults to false).

Whenever the `location` changes, `<Routes>` looks through all its children `<Route>` elements to find the best match and renders that branch of the UI. `<Route>` elements may be nested to indicate nested UI, which also correspond to nested URL paths.

- Nested Route

Parent routes render their child routes by rendering an `<Outlet>`. It's a kind of shared layout component, it renders whatever the parent element and the child as an `<Outlet>`.

Using `index` to match the index page of the shared route if exists.

```javascript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
  <footer>our footer</footer>
</BrowserRouter>
```

## Links

React Router's navigation interfaces let you change the currently rendered page by modifying the current location. There are two main interfaces for navigating between pages in your app, depending on what you need.

<Link> and <NavLink> render an accessible <a> element, or a TouchableHighlight on React Native. This lets the user initiate navigation by clicking or tapping an element on the page.
useNavigate and <Navigate> let you programmatically navigate, usually in an event handler or in response to some change in state

To see the differenct between <Link> and <NavLink>, check [this](https://stackoverflow.com/questions/66185077/when-should-i-use-link-over-navlink) post.

- get url params from url

The `useParams` hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the `<Route path>`. Child routes inherit all params from their parent routes.

## Navigating Programmatically

The `useNavigate` hook returns a function that lets you navigate programmatically.

The navigate function has two signatures:

- Either pass a `To` value (same type as `<Link to>`) with an optional second `{ replace, state }` arg or

- Pass the delta you want to go in the history stack. For example, `navigate(-1)` is equivalent to hitting the back button.

A `<Navigate>` element changes the current location when it is rendered. It's a component wrapper around `useNavigate`, and accepts all the same arguments as props.

---

[1]. [React Router](https://reactrouter.com/docs/en/v6)
