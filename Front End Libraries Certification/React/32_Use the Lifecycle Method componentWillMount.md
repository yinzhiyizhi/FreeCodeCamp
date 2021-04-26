#  Use the Lifecycle Method componentWillMount

React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods: componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount() The next several lessons will cover some of the basic use cases for these lifecycle methods.

Note: The componentWillMount Lifecycle method will be deprecated in a future version of 16.X and removed in version 17. (Source)

The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() - you may want to have your browser console open to see the output.



# 中文版本FCC
React：使用生命周期方法：componentWillMount

React 组件有几种特殊方法，可以在组件生命周期的特定点执行操作。这些称为生命周期方法或生命周期钩子，允许你在特定时间点捕获组件。这可以在渲染之前、更新之前、接收 props 之前、卸载之前等等。以下是一些主要生命周期方法的列表：

componentWillMount()

componentDidMount()

componentWillReceiveProps()

shouldComponentUpdate()

componentWillUpdate()

componentDidUpdate()

componentWillUnmount()

接下来的几节课将讲述这些生命周期方法的一些基本用例。

当组件被挂载到 DOM 时，componentWillMount()方法在render()方法之前被调用。在componentWillMount()中将一些内容记录到控制台--你需要打开浏览器控制台以查看输出。


# Question
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return <div />
  }
};
```


# Answer
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log("这是内容记录")
    // Change code above this line
  }
  render() {
    return <div />
  }
};
```
