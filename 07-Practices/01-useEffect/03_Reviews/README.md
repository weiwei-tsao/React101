## React useEffect Projects - [Reviews](https://react-projects-3-reviews.netlify.app/)

### 项目的几个关键点：

- useState 的使用
- spread operator
- App 中组件的层级结构设计

### `useState` 的使用

`useState` 通常用在最上层组件中，state 中的变量和方法可以传给子组件，然后子组件通过修改或者调用 state 中的变量或者方法来实现影响。

### spread operator 用法

[JavaScript Spread Operator](https://www.javascripttutorial.net/es6/javascript-spread/)

另外会遇到的保存提示：[spread operator in react throwing error of Unexpected token](https://stackoverflow.com/questions/38490804/spread-operator-in-react-throwing-error-of-unexpected-token)

### App 中组件的层级结构设计

app 的层级设计决定了哪些组件或者 state 需要放到父级，哪些是子组件本身的。一般来说

- 子组件公用的 state 变量或者函数
- 会影响到其他子组件的
