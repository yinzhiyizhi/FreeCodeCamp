# Override Default Props

The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.

The ShoppingCart component now renders a child component Items. This Items component has a default prop quantity set to the integer 0. Override the default prop by passing in a value of 10 for quantity.

Note: Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, {100}. This syntax tells JSX to interpret the value within the braces directly as JavaScript.
 


# 中文版本FCC
React：覆盖默认的 Props

在 React 中，设置默认的 props 是一个很有用的特性，显式设置组件的 prop 值即可覆盖默认 props。

ShoppingCart组件现在渲染了一个子组件Items。该Items组件有一个默认quantityprop，其值被设置为整数0。通过传入数值10来覆盖quantity的默认 prop。

注意： 请记住，向组件添加 prop 的语法与添加 HTML 属性类似。但是，由于quantity的值是整数，所以它不会加引号，但应该用花括号括起来，例如{100}。这个语法告诉 JSX 直接将花括号中的值解释为 JavaScript。


# Question
```js
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items />
    { /* Change code above this line */ }
  }
};
```


# Answer
```js
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return <Items quantity={10}/>
    { /* change code above this line */ }
  }
};
```
