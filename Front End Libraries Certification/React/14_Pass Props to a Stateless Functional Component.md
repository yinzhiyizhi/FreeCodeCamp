# Pass Props to a Stateless Functional Component

The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. With this foundation, it's time to look at another feature very common in React: props. In React, you can pass props, or properties, to child components. Say you have an App component which renders a child component called Welcome which is a stateless functional component. You can pass Welcome a user property by writing:

```jsx
<App>
  <Welcome user='Mark' />
</App>
```

You use custom HTML attributes created by you and supported by React to be passed to the component. In this case, the created property user is passed to the component Welcome. Since Welcome is a stateless functional component, it has access to this value like so:

```jsx
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

It is standard to call this value props and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.

There are Calendar and CurrentDate components in the code editor. When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object. Then access this prop in the CurrentDate component, showing its value within the p tags. Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.


# 中文版本FCC
React：将 Props 传递给无状态函数组件

之前的挑战涵盖了关于在 React 中创建和组合 JSX 元素、函数组件和 ES6 风格的类组件的很多内容。有了这个基础，现在是时候看看 React 中的另一个常见特性 props 了。在 React 中，你可以将属性传递给子组件。假设你有一个App组件，该组件渲染了一个名为Welcome的子组件，它是一个无状态函数组件。你可以通过以下方式给Welcome传递一个user属性：

```jsx
    <App>
      <Welcome user='Mark' />
    </App>
```

使用自定义 HTML 属性，React 支持将属性user传递给组件Welcome。由于Welcome是一个无状态函数组件，它可以像这样访问该值：

```jsx
    const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

调用props这个值是常见做法，当处理无状态函数组件时，你基本上可以将其视为返回 JSX 的函数的参数。这样，你就可以在函数体中访问该值。但对于类组件，访问方式会略有不同。

代码编辑器中有Calendar和CurrentDate组件。从Calendar组件渲染CurrentDate时，从 JavaScript 的Date对象分配当前日期，并将其作为date属性传入。然后访问CurrentDate组件的prop，并在p标签中显示其值。请注意，要将prop的值视为 JavaScript，必须将它们括在花括号中，例如date={Date()}。


# Question
```html
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: </p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```


# Answer
```html
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
