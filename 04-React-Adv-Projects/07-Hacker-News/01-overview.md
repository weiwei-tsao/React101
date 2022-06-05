# Hacker News

## Using useReducer hook

useReducer is more like a bunch of stats and corresponding actions.

- To declare a useReducer hook like this: ` const [state, dispatch] = useReducer(reducer, initialState);`

  - setup an initial value for the set of `state`:

  ```javascript
  const initialState = {
    isLoading: true,
    hits: [],
    query: "react",
    page: 0,
    nbPages: 0,
  };
  ```

  - the `state` is an object contains the set of stats as the properties
  - `dispatch({type: ACTION})` is a function to trigger the `reducer()` function by the type

- in a reducer file, the reduce() should be like this:

```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORY:
      return {
        ...state,
        isLoading: false,
        hits: state.hits.filter((item) => item.objectID !== action.payload.id),
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload.value, page: 0 };
    case HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }

        return { ...state, page: nextPage };
      }

      if (action.payload === "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }

    default:
      throw new Error(`No matching ${action.type} action type`);
  }
};
```

## The search form in React

```javascript
const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(event) => event.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(event) => handleSearch(event.target.value)}
      ></input>
    </form>
  );
};
```
