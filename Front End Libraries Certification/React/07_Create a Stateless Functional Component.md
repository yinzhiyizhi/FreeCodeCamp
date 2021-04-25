# Create a Stateless Functional Component
Components are the core of React. Everything in React is a component and here you will learn how to create one.

There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We'll cover the second way to create a React component in the next challenge.)

To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter. Here's an example of a stateless functional component that assigns an HTML class in JSX:

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

After being transpiled, the <div> will have a CSS class of customClass.

Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.

The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag. 


# 中文版本FCC
React：创建一个无状态的函数组件
组件是 React 的核心。React 中的所有内容都是一个组件，在这里你将学习如何创建一个组件。

有两种方法可以创建 React 组件。第一种方法是使用 JavaScript 函数。以这种方式定义组件会创建无状态功能组件。应用程序中的状态概念将在以后的挑战中介绍。目前，可以将无状态组件视为可以接收数据并对其进行渲染的组件，但是它不管理或跟踪对数据的更改，我们将在下一次挑战中介绍创建 React 组件的第二种方法。

要用函数创建组件，只需编写一个返回 JSX 或null的 JavaScript 函数。需要注意的一点是，React 要求你的函数名以大写字母开头。下面是一个无状态功能组件的示例，该组件在 JSX 中分配一个 HTML 的 class：

```jsx
// After being transpiled, the <div> will have a CSS class of 'customClass'
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

因为 JSX 组件代表 HTML，所以你可以将几个组件放在一起以创建更复杂的 HTML 页面，这是 React 提供的组件架构的关键优势之一，它允许你用许多独立的组件组成 UI。这使得构建和维护复杂的用户界面变得更加容易。


代码编辑器中有一个名为MyComponent的函数。完成此函数，使其返回包含一些文本字符串的单个div元素。

注意： 文本被视为是div的子元素，因此你将不能使用自闭合标签。


# Question
```html
const MyComponent = function() {
  // Change code below this line



  // Change code above this line
}
```


# Answer
```html
const MyComponent = function() {
  // Change code below this line
  return (
    <div>myComponent</div>
  );


  // Change code above this line
}
```
