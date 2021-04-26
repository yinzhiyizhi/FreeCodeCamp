# Create a Stateful Component

One of the most important topics in React is state. State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.

You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object. Declaring it looks like this:

```js
this.state = {

}
```

You have access to the state object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The state object can be as complex or as simple as you need it to be. Note that you must create a class component by extending React.Component in order to create state like this.

There is a component in the code editor that is trying to render a name property from its state. However, there is no state defined. Initialize the component with state in the constructor and assign your name to a property of name.
 


# 中文版本FCC
React：创建一个有状态的组件

React中最重要的主题之一是state。 state 包含应用程序需要了解的任何数据，这些数据可能会随时间而变化。你希望应用程序能够响应 state 的变更，并在必要时显示更新后的 UI。React 为现代 Web 应用程序的状态管理提供了一个很好的解决方案。

你可以通过在constructor中的组件类上声明state属性来在 React 组件中创建 state，它在创建时使用state初始化组件。state属性必须设置为 JavaScript对象。声明如下：

```js
    this.state = {
      // describe your state here
    }
```

你可以在组件的整个生命周期内访问state对象，你可以更新它、在 UI 中渲染它，也可以将其作为 props 传递给子组件。state对象的使用可以很简单，亦可以很复杂，就看你怎么用了。请注意，你必须通过扩展React.Component来创建类组件，以便像这样创建state。

代码编辑器中有一个组件试图从其state中渲染一个name属性，但是state还没有定义。在constructor中使用state初始化组件，并将你的名字赋给name属性。


# Question
```js
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line

    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```


# Answer
```js
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      name: 'Bruce'
    };
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```
