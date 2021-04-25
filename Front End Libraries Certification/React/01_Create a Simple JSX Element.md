# Create a Simple JSX Element

React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.

React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. This has several benefits. It lets you use the full programmatic power of JavaScript within HTML, and helps to keep your code readable. For the most part, JSX is similar to the HTML that you have already learned, however there are a few key differences that will be covered throughout these challenges.

For instance, because JSX is a syntactic extension of JavaScript, you can actually write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: { 'this is treated as JavaScript code' }. Keep this in mind, since it's used in several future challenges.

However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process. For your convenience, it's already added behind the scenes for these challenges. If you happen to write syntactically invalid JSX, you will see the first test in these challenges fail.

It's worth noting that under the hood the challenges are calling ReactDOM.render(JSX, document.getElementById('root')). This function call is what places your JSX into React's own lightweight representation of the DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.

The current code uses JSX to assign a div element to the constant JSX. Replace the div with an h1 element and add the text Hello JSX! inside it.


# 中文版本FCC
React：创建一个简单的 JSX 元素

简介：React 是由 Facebook 创建和维护的开源视图库。它是渲染当代 Web 应用程序用户界面（UI）的绝佳工具。

React 使用名为 JSX 的 JavaScript 语法扩展，允许你直接在 JavaScript 中编写 HTML。这有几个好处。它允许你在 HTML 中使用 JavaScript 的完整程序功能，并有助于保持代码的可读性。在大多数情况下，JSX 类似于你已经学过的 HTML，但是在这些挑战中将会涉及一些关键差异。

例如，因为 JSX 是 JavaScript 的语法扩展，所以你实际上可以直接在 JSX 中编写 JavaScript。要做到这一点，你只需在花括号中包含你希望被视为 JavaScript 的代码：{“这被视为 JavaScript 代码”}。请牢记这个写法，你将会在接下来的挑战中使用。

但是，由于浏览器不能解析 JSX，因此必须将 JSX 代码编译为 JavaScript。在这个过程中，转换器 Babel 是一个很受欢迎的工具。后续挑战已经在后台引入了 Babel，你可以直接写 JSX 代码。如果你的代码不符合 JSX 语法，那么挑战中的第一个测试就不会通过。

值得注意的是，这些挑战在底层调用ReactDOM.render(JSX, document.getElementById('root'))。这个函数调用是将你的 JSX 置于 React 自己的轻量级 DOM 中。然后，React 使用自己的 DOM 快照来优化更新实际 DOM 的特定部分。

说明：当前代码使用 JSX 将div元素赋值给常量JSX。将div替换为h1元素，并在其中添加文本Hello JSX!。


# Question
```html
const JSX = <div></div>;
```


# Answer
```html
const JSX = <h1>Hello JSX!</h1>;
```
