#  Write a Simple Counter

You can design a more complex stateful component by combining the concepts covered so far. These include initializing state, writing methods that set state, and assigning click handlers to trigger these methods.

The Counter component keeps track of a count value in state. There are two buttons which call methods increment() and decrement(). Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a reset() method so when the reset button is clicked, the count is set to 0.

Note: Make sure you don't modify the classNames of the buttons. Also, remember to add the necessary bindings for the newly-created methods in the constructor.



# 中文版本FCC
React：写一个简单的计数器

你可以结合目前为止所涵盖的概念来设计更复杂的有状态组件。这包括初始化state，编写设置state的方法，以及指定单击处理程序来触发这些方法。

Counter组件跟踪state中的count值。有两个按钮分别调用increment()和decrement()方法。编写这些方法，使计数器值在单击相应按钮时增加或减少 1。另外，创建一个reset()方法，当单击 reset 按钮时，把计数设置为 0。

注意： 确保你没有修改按钮的classNames。另外，请记住在构造函数中为新创建的方法添加必要的绑定。


# Question
```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```


# Answer
```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: state.count - 1
    }));
  }
  reset() {
    this.setState((state) => ({
      count: state.count = 0
    }));
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```
