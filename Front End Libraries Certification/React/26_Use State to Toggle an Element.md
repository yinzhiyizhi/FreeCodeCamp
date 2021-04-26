# Use State to Toggle an Element

Sometimes you might need to know the previous state when updating the state. However, state updates may be asynchronous - this means React may batch multiple setState() calls into a single update. This means you can't rely on the previous value of this.state or this.props when calculating the next value. So, you should not use code like this:

```js
this.setState({
  counter: this.state.counter + this.props.increment
});
```

Instead, you should pass setState a function that allows you to access state and props. Using a function with setState guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:

```js
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

You can also use a form without props if you need only the state:

```js
this.setState(state => ({
  counter: state.counter + 1
}));
```

Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.

MyComponent has a visibility property which is initialized to false. The render method returns one view if the value of visibility is true, and a different view if it is false.

Currently, there is no way of updating the visibility property in the component's state. The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called toggleVisibility(). Pass a function to setState to define this method so that the state of visibility toggles to the opposite value when the method is called. If visibility is false, the method sets it to true, and vice versa.

Finally, click the button to see the conditional rendering of the component based on its state.

Hint: Don't forget to bind the this keyword to the method in the constructor!
 


# 中文版本FCC
React：使用 State 切换元素

有时您可能需要在更新状态时了解先前的状态。但是，状态更新可能是异步的-这意味着React可以将多个setState（）调用批处理为一个更新。这意味着在计算下一个值时，您不能依赖this.state或this.props的前一个值。因此，您不应使用以下代码：

```js
this.setState({
  counter: this.state.counter + this.props.increment
});
```

相反，您应该传递setState一个允许您访问状态和道具的函数。将函数与setState一起使用可确保您正在使用state和props的最新值。这意味着以上内容应重写为：

```js
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

如果只需要状态，也可以使用不带props的表单：

```js
this.setState(state => ({
  counter: state.counter + 1
}));
```

请注意，您必须将对象文字用括号括起来，否则JavaScript认为这是一段代码。

MyComponent有一个初始值为false的visibility属性。如果visibility的值为 true，render 方法返回一个视图，如果为 false，返回另一个视图。

目前，无法更新组件的state中的visibility属性，该值应在 true 和 false 之间来回切换。按钮上有一个单击处理程序，它触发一个名为toggleVisibility()的类方法。定义此方法，以便visibility的state在调用方法时切换到相反的值。如果visibility是false，则该方法将其设置为true，反之亦然。

最后，单击按钮以查看基于其state的组件的条件渲染。

提示： 不要忘记将this关键字绑定到构造函数中的方法上！


# Question
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```


# Answer
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility
    }));
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```
