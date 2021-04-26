# Add Event Listeners

The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality. React provides a synthetic event system which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.

You've already been using some of these synthetic event handlers such as onClick(). React's synthetic event system is great to use for most interactions you'll manage on DOM elements. However, if you want to attach an event handler to the document or window objects, you have to do this directly.

Attach an event listener in the componentDidMount() method for keydown events and have these events trigger the callback handleKeyPress(). You can use document.addEventListener() which takes the event (in quotes) as the first argument and the callback as the second argument.

Then, in componentWillUnmount(), remove this same event listener. You can pass the same arguments to document.removeEventListener(). It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action.
 


# 中文版本FCC
React：添加事件侦听器

componentDidMount()方法也是添加特定功能所需的任何事件监听器的最佳位置。React 提供了一个合成事件系统，它将本地事件系统封装在浏览器中。这意味着，不管用户的浏览器如何，合成事件系统的行为都完全相同--即使不同浏览器之间的本地事件的行为可能不同。

你已经使用了一些合成事件处理程序，如onClick()。React 的合成事件系统非常适合用于你在 DOM 元素上管理的大多数交互。但是，如果要将事件处理程序附加到 document 或 window 对象，则必须直接执行此操作。

在componentDidMount()方法中为keydown事件添加事件监听器，并让这些事件触发回调handleKeyPress()。你可以使用document.addEventListener()，它将事件（用引号括起来）作为第一个参数，将回调作为第二个参数。

然后，在componentWillUnmount()中移除相同的事件监听器。你可以把相同的参数传递给document.removeEventListener()。在卸载和销毁 React 组件之前，最好使用这种生命周期方法对它们进行清理。移除事件监听器就是这样一个清理操作的例子。


# Question
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
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
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```
