# React useEffect Projec - [Menu](https://react-projects-5-menu.netlify.app/)

## 项目的几个关键点：

- App 中组件的层级关系
- App 中组件设计的耦合

## App 中组件的层级关系

因为 app 本身 由 filter 和 menu 两部分构成，即可以通过组件 Categories 和 Menu 实现。

## App 中组件设计的耦合

最外层的组件包含子组件共享的 states，然后子组件本身的 event 事件函数在子组件内部实现，对外作为整体供使用。如果子组件的 event 函数需要用到上层组件的 state 资源，建议放到上层组件，因为这样只需要修改上层组件而不是进入子组件修改 ？？？不是很确定。

useEffect 用来初始化需要加载的数据等非组件资源
