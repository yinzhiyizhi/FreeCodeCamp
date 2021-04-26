# Pass a Callback as Props

You can pass state as props to child components, but you're not limited to passing data. You can also pass handler functions or any method that's defined on a React component to a child component. This is how you allow child components to interact with their parent components. You pass methods to a child just like a regular prop. It's assigned a name and you have access to that method name under this.props in the child component.

There are three components outlined in the code editor. The MyApp component is the parent that will render the GetInput and RenderInput child components. Add the GetInput component to the render method in MyApp, then pass it a prop called input assigned to inputValue from MyApp's state. Also create a prop called handleChange and pass the input handler handleChange to it.

Next, add RenderInput to the render method in MyApp, then create a prop called input and pass the inputValue from state to it. Once you are finished you will be able to type in the input field in the GetInput component, which then calls the handler method in its parent via props. This updates the input in the state of the parent, which is passed as props to both children. Observe how the data flows between the components and how the single source of truth remains the state of the parent component. Admittedly, this example is a bit contrived, but should serve to illustrate how data and callbacks can be passed between React components.
 


# 中文版本FCC
React：传递回调作为 Props

你可以将state作为 props 传递给子组件，但不仅限于传递数据。你也可以将处理函数或在 React 组件中定义的任何方法传递给子组件。这就是允许子组件与父组件交互的方式。你可以把方法像普通 prop 一样传递给子组件，它会被分配一个名字，你可以在子组件中的this.props下访问该方法的名字。

代码编辑器中列出了三个组件。MyApp是父组件，GetInput和RenderInput是它的子组件。将GetInput组件添加到MyApp的 render 方法，然后将一个名为input的 prop 传给MyApp的state中的inputValue。还要创建一个名为handleChange的 prop，并将输入处理程序handleChange传递给它。

接下来，将RenderInput添加到MyApp中的 render 方法中，然后创建一个名为input的 prop，并将state中的inputValue传递给它。完成后，你将能够在GetInput组件中的input字段中键入内容，然后该组件通过 props 调用其父组件中的处理函数方法。这将更新处于父组件state中的 input，该 input 将作为 props 传递给两个子组件。观察数据如何在组件之间流动，以及单一数据源如何保持父组件state。诚然，这个示例有点做作，但是应该能用来说明数据和回调是如何在 React 组件之间传递的。


# Question
```js
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```


# Answer
```js
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
        <GetInput 
          input={this.state.inputValue}
          handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```
