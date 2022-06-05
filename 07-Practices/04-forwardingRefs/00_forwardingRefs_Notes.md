# React - Technique - Forwarding Ref

Official documentation: [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)

## Introduce Forwarding Refs

By using the `Forwarding Refs` technique, you can expose functionalities( or values ) from a React component to its parent compoent. Then you can use the component in upper level component through `Refs` and trigger functionalities (like calling DOM events.etc,.).

## Applying Forwarding Refs

Here is a step-by-step explanation of what happens in the above example:

1. We create a `React ref` by calling `React.useRef` and assign it to a `ref` variable.
2. We pass our `ref` down to target component `<FancyButton ref={ref}>` by specifying it as a JSX attribute.
3. React passes the `ref` to the `(props, ref) => ...` function inside `forwardRef` as a second argument.
4. We forward this `ref` argument down to `<button ref={ref}>` by specifying it as a JSX attribute.
5. When the ref is attached, `ref.current` will point to the `<button>` DOM node.

```javascript
// in sub component
const FancyButton = React.forwardRef((props, ref) => (

  const buttonRef = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      focus: () => {buttonRef.current.focus()}
    }
  })

  return (
    <button ref={buttonRef} className="FancyButton">
      {props.children}
    </button>
  );
));

// in parent component
import React from 'react';

const Demo = (props) => {
  ...
  const clickMeBtnRef = React.useRef()

  const clickHandler = (event) => {
    clickMeBtnRef.current.focus();
  }

  return (
    <FancyButton ref={clickMeBtnRef} onClick={clickHandler}>Click Me</FancyButton>
  );
}
```
