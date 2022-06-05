# Movie Database

## .env setup for external API key

- in the project root, add the `.env` file containing the API key:

```
# OMDb API
REACT_APP_MOVIE_API_KEY = 36087229
```

- in somewhere of the code to use it like this:

```javascript
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
```

## global variables in context

- create the `context.js` file, then

```javascript

// 1. create AppContext variable
const AppContext = React.createContext();

// 2. identify global variables and encapsulate children components
const AppProvider ({children}) => {
    // put hooks, and functions to encapsulate the useContext() if it needs
    return <AppContext.Provider value='dummy' >{children}</AppContext.Provider>
};

// 3. put the context into useContext() for usage
const useGlobalContext = () => {
    return useContext(AppContext)
};

// 4. export context components
export {AppContext, AppProvider, useGlobalContext}
```

- in the `App.js` to wrap the components

```javascript

import { AppProvider } from './context'


// step 2
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')

```

- in any children components, to use it like this

```javascript
const { value1, value2 } = useGlobalContext(); // step 4
```

## App wrapper setup

```javascript
return (
  // React error handler
  <ErrorBoundary>
    // MUI theme
    <ThemeProvider>
      // graphql wrapper
      <ApolloProvider client={apolloClient}>
        // router
        <BrowserRouter>
          // context
          <GlobalContextContainer>
            <Routes>
              <AuthenticatedRoute
                path="/home"
                element={<HomePage />}
                layout={MainLayout}
              />
              <Route path="/login" element={<Login />} />
              <AuthenticatedRoute
                path="/profile"
                element={<ViewProfile />}
                layout={MainLayout}
              />
              <AuthenticatedRoute
                path="/panels/*"
                element={<Panels />}
                layout={MainLayout}
              />
              <Navigate to="/home" />
            </Routes>
          </GlobalContextContainer>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  </ErrorBoundary>
);
```

## Search form setup in React

- using `<form>` and `<input>` elements
- add a state for input value property
- attach a handler to onChange event of `<input>`
- attach the onSubmit event of `<form>`

```javascript
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  const handleSubmit = (event) => {
    // to avoid refresh page when hitting enter key
    event.preventDefault();
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={handleChange}
      ></input>
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};
```

## Do not repeat yourself, using custom hook

```javascript
import React, { useState, useEffect } from "react";

// make sure to use https
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = (urlParam) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchMovies = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        // data.Search => movies, data => single movie
        setData(data.Search || data);
      } else {
        setError({ show: true, msg: data.Error });
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParam}`);
  }, [urlParam]);
  return { loading, error, data };
};
```
