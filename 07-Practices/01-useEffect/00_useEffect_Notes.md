# React - Hooks - useEffect

Official documentation: [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

## What are side effects

Whenever state changes react re-executes the function but doesn't necessarily re-renders the entire `JSX` in return statement. It only updates the parts that have been changed.

Side effects are something that might be happening in the application except the elements themselves. Typically, it includes storing data, sending HTTP requests, setting timers,...

`useEffect()` is used to ensure the DOM has loaded ( _exists_ ) **before** ( _for example_ ) fetched data is loaded into the DOM.

## Introduce useEffect hook

![](image/notes/1649558357745.png)

## Applying useEffect

### Infinite loops when not using useEffect

the app **re-renders** whenever the _state is changed_, so at first time app shows in good. Then, once use typed credentials and logged data saved, the app will go to infinite loop. This is because the `isUserLoggedIn` is always `true` and it triggers the set method in anyway and this will cause app re-render since state is changed.

```javascript
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isUserLoggedIn = localStorage.getItem("isLoggedIn");

  if (isUserLoggedIn === "1") {
    setIsLoggedIn(true);
  }

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
```

`Too many re-renders. React limits the number of renders to prevent an infinite loop.`

### Using useEffect to fix it

```javascript
useEffect(() => {
  const isUserLoggedIn = localStorage.getItem("isLoggedIn");

  if (isUserLoggedIn === "1") {
    setIsLoggedIn(true);
  }
  // an empty dependency array means useEffect will run once at the very beginning
}, []);
```

### Using dependencies and cleanup function in useEffect

About dependencies:

- No array as a dependency = it'll run every time the component is rendered.
- Empty array as a dependency = will run only once when the component is first rendered.
- someValue inside the array as a dependency = will trigger every time someValue changes.

When we need **cleanup** function:

防抖（ **Debounce** ）和节流（ **throttle** ）都是用来控制某个函数在一定时间内执行多少次的技巧, 针对一些 `执行频率非常高` 的交互或事件，做性能优化.

`debounce` 和 `throttle` 的不同点：

> `debounce` 有一个等待时长，如果在这个等待时长内，再次调用了函数，就取消上一个定时器，并新建一个定时器。所以 `debounce` 适用于 `input`, `keyup`, `keydown` 等事件, 亦或者 `click` 事件需要防止用户在某个时间范围内多次点击的时候，也可以用。注：在 `lodash` 的实现中 中并没有 `取消新建`定时器的做法，是用时间来判断的。

> `throttle` 也有一个等待时长，每隔一段这个等待时长，函数必须执行一次。如果在这个等待时长内，当前延迟执行没有完成，它会忽略接下来调用该函数的请求，不会去取消上一个定时器。所以 `throttle` 适用于 `scroll`, `mousemove` 等事件。在 `lodash` 的实现中，还有一个等待的最大时长，这个我们分析源码时再讨论。

[作者：jkCaptain](https://juejin.cn/post/6844903760334946312)

Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked. A simple technique is to use `setTimeout()` to execute the function in a delay.

The trick is we save a timer and for next time we clear it (not being executed at all). So at last we only have one ongoing timer at a time because there is no next time it will be triggered.

Concerning a `useEffect()` using an **empty** dependency array. When the component (_containing_ `useEffect()`) **mounts**:

- `useEffect()` runs, including its "**task**" function (arrow function).
- `useEffect()`'s **cleanup function** is placed inside a JavaScript **closure** . When this component **unmounts** , ( _then_ ) the mentioned **cleanup function** inside the **closure** runs (not `useEffect()`).

A simplified implementation of useEffect demo => "03-React-Hooks-Adv-Topics/03-useEffect-project/07_useEffect_tutorial/useEffect_implementation/"

[A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
