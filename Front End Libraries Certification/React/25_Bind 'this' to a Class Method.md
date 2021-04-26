# Bind 'this' to a Class Method

In addition to setting and updating state, you can also define methods for your component class. A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. There are a few ways to allow your class methods to access this.

One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used this.handleClick = this.handleClick.bind(this) for its handleClick method in the constructor. Then, when you call a function like this.setState() within your class method, this refers to the class and will not be undefined.

Note: The this keyword is one of the most confusing aspects of JavaScript but it plays an important role in React. Although its behavior here is totally normal, these lessons aren't the place for an in-depth review of this so please refer to other lessons if the above is confusing!

The code editor has a component with a state that keeps track of the text. It also has a method which allows you to set the text to You clicked!. However, the method doesn't work because it's using the this keyword that is undefined. Fix it by explicitly binding this to the handleClick() method in the component's constructor.

Next, add a click handler to the button element in the render method. It should trigger the handleClick() method when the button receives a click event. Remember that the method you pass to the onClick handler needs curly braces because it should be interpreted directly as JavaScript.

Once you complete the above steps you should be able to click the button and see You clicked!.
 


# 中文版本FCC
React：将 this 绑定到 Class 方法

除了设置和更新state之外，你还可以为组件类定义方法。类方法通常需要使用this关键字，以便它可以访问方法中类的属性（例如state和props ）。有几种方法可以让你的类方法访问this。

一种常见的方法是在构造函数中显式地绑定this，这样当组件初始化时，this就会绑定到类方法。你可能已经注意到上一个挑战使用了this.handleClick = this.handleClick.bind(this)用于其在构造函数中的handleClick方法。然后，当你在类方法中调用像this.setState()这样的函数时，this指的是这个类，而不是undefined。

注意： this关键字是 JavaScript 中最令人困惑的方面之一，但它在 React 中扮演着重要的角色。虽然它的行为在这里是完全正常的，但是这些课程并不深入研究this，所以如果以上内容令你感到困惑，请参考其他课程！

代码编辑器有一个带有state的组件，用于跟踪项目计数。它还有一个方法，允许你增加此项目计数。但是，该方法不起作用，因为它使用了未定义的this关键字。可以通过将this显式绑定到组件构造函数中的addItem()方法来修复它。

接下来，向 render 方法中的button元素添加一个单击处理程序。当按钮接收到单击事件时，它应该触发addItem()方法。记住，传递给onClick处理程序的方法需要使用花括号，因为它应该直接被解释为 JavaScript。

完成上述步骤后，你应该可以单击按钮并查看 HTML 中的项目计数增量。


# Question
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
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
      text: "Hello"
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```

中文版FCC答案
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // change code below this line
    this.addItem = this.addItem.bind(this);
    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button onClick={this.addItem}>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};
```