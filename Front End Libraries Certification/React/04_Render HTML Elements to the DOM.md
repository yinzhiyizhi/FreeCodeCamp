# Render HTML Elements to the DOM

So far, you've learned that JSX is a convenient tool to write readable HTML within JavaScript. With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.

ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode), where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.

As you would expect, ReactDOM.render() must be called after the JSX element declarations, just like how you must declare variables before using them.

The code editor has a simple JSX component. Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.
 

# 中文版本FCC
React：渲染 HTML 元素为 DOM 树

到目前为止，你已经了解到 JSX 是一种在 JavaScript 中编写可读 HTML 的便捷工具。在 React 中，我们可以使用它的的渲染 API（ReactDOM）将此 JSX 直接渲染到 HTML DOM。

ReactDOM 提供了一个简单的方法来将 React 元素呈现给 DOM，如下所示：ReactDOM.render(componentToRender, targetNode)，其中第一个参数是要渲染的 React 元素或组件，第二个参数是要将组件渲染到的 DOM 节点。

如你所料，必须在 JSX 元素声明之后调用ReactDOM.render()，就像你在使用变量之前必须声明它一样。

代码编辑器有一个简单的 JSX 组件。使用ReactDOM.render()方法将该组件渲染到页面。可以将定义好的 JSX 元素直接作为第一个参数传入，并使用document.getElementById()来选择要渲染到的 DOM 节点，在这个挑战中，请渲染到 id 为challenge-node的div中。


# Question
```html
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
```


# Answer
```html
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```
