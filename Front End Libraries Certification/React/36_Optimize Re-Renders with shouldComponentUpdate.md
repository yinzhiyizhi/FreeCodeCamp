# Optimize Re-Renders with shouldComponentUpdate

So far, if any component receives new state or new props, it re-renders itself and all its children. This is usually okay. But React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.

This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new props, even if the props haven't changed. You can use shouldComponentUpdate() to prevent this by comparing the props. The method must return a boolean value that tells React whether or not to update the component. You can compare the current props (this.props) to the next props (nextProps) to determine if you need to update or not, and return true or false accordingly.

The shouldComponentUpdate() method is added in a component called OnlyEvens. Currently, this method returns true so OnlyEvens re-renders every time it receives new props. Modify the method so OnlyEvens updates only if the value of its new props is even. Click the Add button and watch the order of events in your browser's console as the lifecycle hooks are triggered.
 


# 中文版本FCC
React：使用 shouldComponentUpdate 优化重新渲染

到目前为止，如果任何组件接收到新的state或新的props，它会重新渲染自己及其所有子组件。这通常是好的。但是 React 提供了一种生命周期方法，当子组件接收到新的state或props时，你可以调用该方法，并特别声明组件是否应该更新。方法是shouldComponentUpdate()，它将nextProps和nextState作为参数。

这种方法是优化性能的有效方法。例如，默认行为是，当组件接收到新的props时，即使props没有改变，它也会重新渲染。你可以通过使用shouldComponentUpdate()比较props来防止这种情况。该方法必须返回一个布尔值，该值告诉 React 是否更新组件。你可以比较当前的 props（this.props）和下一个 props（nextProps），以确定你是否需要更新，并相应地返回true或false。

shouldComponentUpdate()方法添加到名为OnlyEvens的组件中。目前，该方法返回true，因此每次收到新的props时，OnlyEvens都会重新渲染。修改该方法，以便OnlyEvens仅在其新 props 的value为偶数时更新。单击Add按钮，在触发其他生命周期钩子时，在浏览器控制台中查看事件的顺序。


# Question
```js
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return true;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```


# Answer
```js
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if(nextProps.value % 2 === 0) {
      return true;
    }
    else {
      return false;
    }
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```
