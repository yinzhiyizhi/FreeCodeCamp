# Use Default Props

React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare MyComponent.defaultProps = { location: 'San Francisco' }, you have defined a location prop that's set to the string San Francisco, unless you specify otherwise. React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.

The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0.
 


# 中文版本FCC
React：使用默认的 Props

React 还有一个设置默认 props 的选项。你可以将默认 props 作为组件本身的属性分配给组件，React 会在必要时分配默认 prop。如果没有显式的提供任何值，这允许你指定 prop 值应该是什么。例如，如果你声明MyComponent.defaultProps = { location: 'San Francisco' }，即定义一个 location 属性，并且其值在没有另行制定的情况下被设置为字符串San Francisco。如果 props 未定义，则 React 会分配默认 props，但如果你将null作为 prop 的值，它将保持null。

代码编辑器中有一个ShoppingCart组件。在这个组件上定义默认 props，它指定一个itemsprop，其值为0。


# Question
```js
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
```


# Answer
```js
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = { items: 0 };
```
