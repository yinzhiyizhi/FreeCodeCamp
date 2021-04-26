# Pass State as Props to Child Components

You saw a lot of examples that passed props to child JSX elements and child React components in previous challenges. You may be wondering where those props come from. A common pattern is to have a stateful component containing the state important to your app, that then renders child components. You want these components to have access to some pieces of that state, which are passed in as props.

For example, maybe you have an App component that renders a Navbar, among other components. In your App, you have state that contains a lot of user information, but the Navbar only needs access to the user's username so it can display it. You pass that piece of state to the Navbar component as a prop.

This pattern illustrates some important paradigms in React. The first is unidirectional data flow. State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need. The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. It begins to create a separation where state management is handled in one part of code and UI rendering in another. This principle of separating state logic from UI logic is one of React's key principles. When it's used correctly, it makes the design of complex, stateful applications much easier to manage.

The MyApp component is stateful and renders a Navbar component as a child. Pass the name property in its state down to the child component, then show the name in the h1 tag that's part of the Navbar render method. name should appear after the text Hello, my name is:.
 


# 中文版本FCC
React：将 State 作为 Props 传递给子组件

在之前的挑战中，你看到了很多将 props 传递给子 JSX 元素和子 React 组件的例子。你可能想知道那些 props 是从哪里来的。一个常见的模式是：有状态组件中包含对应用程序很重要的state，然后用它渲染子组件。你希望这些组件能够访问该state的某些部分，就把这些部分作为 props 传入。

例如，也许你有一个App组件可以渲染Navbar以及其他组件。在你的App中，你的state中包含大量用户信息，但是Navbar只需要访问用户的用户名就可以显示出来，这时你将该state作为一个 prop 传递给Navbar组件即可。

这个模式说明了 React 中的一些重要范例。第一个是单向数据流，state 沿着应用程序组件树的一个方向流动，从有状态父组件到子组件，子组件只接收它们需要的 state 数据。第二，复杂的有状态应用程序可以分解成几个，或者可能是一个单一的有状态组件。其余组件只是从父组件简单的接收 state 作为 props，并从该 state 渲染 UI。它开始创建一种分离，在这种分离中，state 管理在代码的一部分中处理，而 UI 渲染在另一部分中处理。将 state 逻辑与 UI 逻辑分离是 React 的关键原则之一。当它被正确使用时，它使得复杂的、有状态的应用程序的设计变得更容易管理。

MyApp组件是有状态的，它将Navbar组件渲染成它的为子组件。将MyApp组件state中的name属性向下传递给子组件，然后在h1标签中显示name，name是Navbarrender 方法的一部分。


# Question
```js
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar />
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: </h1>
      {/* Change code above this line */}
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
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar name={this.state.name}/>
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* Change code above this line */}
    </div>
    );
  }
};
```
