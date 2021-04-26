# Render State in the User Interface

Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with this.state.

If you want to access a state value within the return of the render method, you have to enclose the value in curly braces.

state is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.

Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.

In the code editor, MyComponent is already stateful. Define an h1 tag in the component's render method which renders the value of name from the component's state.

Note: The h1 should only render the value from state and nothing else. In JSX, any code you write with curly braces { } will be treated as JavaScript. So to access the value from state just enclose the reference in curly braces.
 


# 中文版本FCC
React：在用户界面中渲染状态

一旦定义了组件的初始 state，你就可以在要渲染的 UI 中显示它的任何部分。如果组件是有状态的，它将始终可以访问render()方法中state的数据。你就可以使用this.state访问数据。

如果你想在 render 方法的return中访问 state 值，你必须把这个值用花括号括起来。

state是 React 组件中最强大的特性之一，它允许你跟踪应用程序中的重要数据，并根据数据的变化渲染 UI。如果你的数据发生变化，你的 UI 也会随之改变。React 使用所谓的虚拟 DOM 来跟踪幕后的变化。当 state 数据更新时，它会使用该数据触发组件的重新渲染--包括接收 prop 数据的子组件。React 只在必要的时候更新实际的DOM，这意味着你不必担心 DOM 的变更，只需声明 UI 的外观即可。

注意，如果组件有状态，则没有其他组件知道它的state。它的state是完全封装的，或者是局限于组件本身的，除非你将 state 数据作为props传递给子组件。封装state的概念非常重要，因为它允许你编写特定的逻辑，然后将该逻辑包含并隔离在代码中的某个位置。

在代码编辑器中，MyComponent是一个有状态组件，在组件的 render 方法中定义一个h1标签，该方法从组件的 state 渲染name的值。

注意： h1应该只渲染来自state的值。在 JSX 中，使用花括号{ }编写的任何代码都将被视为 JavaScript。因此，要访问state中的值，只需将引用括在花括号中即可。


# Question
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
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
```


# Answer
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
          <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
