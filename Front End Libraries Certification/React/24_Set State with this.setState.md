# Set State with this.setState

The previous challenges covered component state and how to initialize state in the constructor. There is also a way to change the component's state. React provides a method for updating component state called setState. You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For instance, if we were storing a username in state and wanted to update it, it would look like this:

```js
this.setState({
  username: 'Lewis'
});
```

React expects you to never modify state directly, instead always use this.setState() when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the setState method can be asynchronous. There is an alternative syntax for the setState method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! Please consult the React documentation for further details.

There is a button element in the code editor which has an onClick() handler. This handler is triggered when the button receives a click event in the browser, and runs the handleClick method defined on MyComponent. Within the handleClick method, update the component state using this.setState(). Set the name property in state to equal the string React Rocks!.

Click the button and watch the rendered state update. Don't worry if you don't fully understand how the click handler code works at this point. It's covered in upcoming challenges.
 


# 中文版本FCC
React：用 this.setState 设置状态

前面的挑战涵盖了组件的state以及如何在constructor中初始化 state。还有一种方法可以更改组件的state，React 提供了setState方法来更新组件的state。在组件类中调用setState方法如下所示：this.setState()，传入键值对的对象，其中键是 state 属性，值是更新后的 state 数据。例如，如果我们在 state 中存储username，并想要更新它，代码如下所示：

```js
    this.setState({
      username: 'Lewis'
    });
```

React 希望你永远不要直接修改state，而是在 state 发生改变时始终使用this.setState()。此外，你应该注意，React 可以批量处理多个 state 更新以提高性能。这意味着通过setState方法进行的 state 更新可以是异步的。setState方法有一种替代语法可以解决异步问题，虽然这很少用到，但是最好还是记住它！有关详细信息，请参阅React 文档。

代码编辑器中有一个button元素，它有一个onClick()处理程序。当button在浏览器中接收到单击事件时触发此处理程序，并运行MyComponent中定义的handleClick方法。在handleClick方法中，使用this.setState()更新组件的state。设置state中的name属性为字符串React Rocks!。

单击按钮查看渲染的 state 的更新。如果你不完全理解单击处理程序代码在此时的工作方式，请不要担心。在接下来的挑战中会有讲述。


# Question
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```


# Answer
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```
