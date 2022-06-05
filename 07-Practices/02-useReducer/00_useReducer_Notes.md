# React - Hooks - useReducer

Official documentation: [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

## Introduce useReducer hook

`useReducer `is better for more complex state, e.g. _**multiple states**_, **_multiple ways of changing it_** or _**dependencies to other states**_, because it guarentees that the you are relying on the most _1) latest state_, and you can pass _2) custom reducer functions_ which can be powerful in complex situations. Basically, use the `useReducer `hook when you are managing complex state or relying on a lot of different state.

## Applying useReducer

`const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);`

- `state`: the latest state snapshot;
- `dispatchFn`: a function that can be used to dispatch an action (trigger an update of the state), `dispatchFn({type: type_code_in_string, payload: value_will_be_used_in_reducerFn})`
- `reducerFn`: `(prevState, action) => newState ` A function that is triggered automatically once _an action is dispatched_. It retrieves the _lastest stata snapshot_ and should return the _new, updated new state_.

  ```javascript
  const reducerFn = (preState, action) => {
  	switch (action.type) {
  		case: type_1:
  			...
  	}
  }
  ```
