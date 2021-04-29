#  Render with an If-Else Condition

Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is true, one view renders. When it's false, it's a different view. You can do this with a standard if/else statement in the render() method of a React component.

MyComponent contains a boolean in its state which tracks whether you want to display some element in the UI or not. The button toggles the state of this value. Currently, it renders the same UI every time. Rewrite the render() method with an if/else statement so that if display is true, you return the current markup. Otherwise, return the markup without the h1 element.

Note: You must write an if/else to pass the tests. Use of the ternary operator will not pass here.



# 中文版本FCC
React：使用 If/Else 条件进行渲染

使用 JavaScript 控制渲染视图的另一个应用是将渲染的元素绑定到一个条件。当条件为真时，将呈现一个视图，反之，则呈现另一种视图。你可以在 React 组件的render()方法中使用的标准if/else语句来实现这一点。

MyComponent 的 state 中包含一个布尔值，用于跟踪是否要在 UI 中显示某个元素。按钮切换此值的状态。目前，它每次都呈现相同的 UI。用if/else语句重写render()方法，如果display为true则返回当前标记。否则，返回不带h1元素的标记。

注意： 写if/else语句才能通过测试，使用三元运算符是不会通过的。


# Question
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
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
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if(this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1 display={this.state.display}>Displayed!</h1>
        </div>
     );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
     );
    }
  }
};
```
