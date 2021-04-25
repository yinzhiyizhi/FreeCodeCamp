# Write a React Component from Scratch

Now that you've learned the basics of JSX and React components, it's time to write a component on your own. React components are the core building blocks of React applications so it's important to become very familiar with writing them. Remember, a typical React component is an ES6 class which extends React.Component. It has a render method that returns HTML (from JSX) or null. This is the basic form of a React component. Once you understand this well, you will be prepared to start building more complex React projects.

Define a class MyComponent that extends React.Component. Its render method should return a div that contains an h1 tag with the text: My First React Component! in it. Use this text exactly, the case and punctuation matter. Make sure to call the constructor for your component, too.

Render this component to the DOM using ReactDOM.render(). There is a div with id='challenge-node' available for you to use.
 


# 中文版本FCC
React：从零开始写一个 React 组件

现在你已经了解了 JSX 和 React 组件的基础知识，现在是时候自己编写一个组件了。React 组件是 React 应用程序的核心组成部分，因此熟练编写它们是非常重要的。记住，典型的 React 组件是 ES6class，它扩展了React.Component。它有一个返回 HTML（从 JSX 返回）或null的渲染方法，这是 React 组件的基本形式。一旦你深刻地理解了这一点，你就可以开始构建更复杂的 React 项目了。

定义一个MyComponent类，它是React.Component的扩展。它的渲染方法应该返回一个div，其中包含一个h1标签，标签文本为：My First React Component!。请确保文本内容、大小写和标点符号正确，以及调用了组件的构造函数。

使用ReactDOM.render()把该组件渲染到 DOM 中。有一个id='challenge-node'的div可供你使用。


# Question
```html
// Change code below this line
```


# Answer
```html
// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```
