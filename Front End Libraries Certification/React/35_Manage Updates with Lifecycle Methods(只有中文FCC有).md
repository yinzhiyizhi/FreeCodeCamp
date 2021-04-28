# Manage Updates with Lifecycle Methods 


# 中文版本FCC
React：使用生命周期方法管理更新

另一个生命周期方法是componentWillReceiveProps()，只要组件将要接收新的 props 就会调用它。此方法接收新的 props（通常写为nextProps）作为参数。你可以使用此参数并与this.props进行比较，并在组件更新之前执行操作。例如，你可以在处理更新之前在本地调用setState()。

还有一个方法是componentDidUpdate()，它在组件重新渲染后立即调用。请注意，渲染和装载在组件生命周期中是不同的。当页面第一次加载时，所有组件都被装载，这就是调用componentWillMount()和componentDidMount()等方法的地方。此后，随着 state 的变化，组件会重新渲染自己。下一个挑战将更详细地讨论这一点。

子组件Dialog从其父组件Controller接收messageprops。在Dialog组件中编写componentWillReceiveProps()方法，并将this.props和nextProps记录到控制台。你需要将nextProps作为参数传递给此方法，虽然可以将其命名为任何名称，但请将其命名为nextProps。

接下来，在Dialog组件中添加componentDidUpdate()，并记录一条说明组件已更新的语句。此方法的工作方式类似于为你提供的componentWillUpdate()。现在单击按钮更改消息并观察浏览器控制台。控制台语句的顺序显示了调用方法的顺序。

注意： 为了通过测试，你需要将生命周期方法编写为普通函数，而不是箭头函数（将生命周期方法编写为箭头函数也没有好处）。


# Question
```js
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line

  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};
```


# Answer
```js
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line
  componentWillReceiveProps(nextProps) {
    console.log('props: ' + this.props.message + ' + nextProps: ' + nextProps.message);
  }
  componentDidUpdate() {
    console.log('组件已更新！');
  }
  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};
```
