# Use a Ternary Expression for Conditional Rendering

Before moving on to dynamic rendering techniques, there's one last way to use built-in JavaScript conditionals to render what you want: the ternary operator. The ternary operator is often utilized as a shortcut for if/else statements in JavaScript. They're not quite as robust as traditional if/else statements, but they are very popular among React developers. One reason for this is because of how JSX is compiled, if/else statements can't be inserted directly into JSX code. You might have noticed this a couple challenges ago — when an if/else statement was required, it was always outside the return statement. Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX. Recall that a ternary operator has three parts, but you can combine several ternary expressions together. Here's the basic syntax:

condition ? expressionIfTrue : expressionIfFalse;

The code editor has three constants defined within the CheckUserAge component's render() method. They are called buttonOne, buttonTwo, and buttonThree. Each of these is assigned a simple JSX expression representing a button element. First, initialize the state of CheckUserAge with input and userAge both set to values of an empty string.

Once the component is rendering information to the page, users should have a way to interact with it. Within the component's return statement, set up a ternary expression that implements the following logic: when the page first loads, render the submit button, buttonOne, to the page. Then, when a user enters their age and clicks the button, render a different button based on the age. If a user enters a number less than 18, render buttonThree. If a user enters a number greater than or equal to 18, render buttonTwo.
 


# 中文版本FCC
React：使用三元表达式进行条件渲染

在继续使用动态渲染技术之前，还有最后一种方法可以渲染你想要的东西，它使用内置的 JavaScript 条件：三元运算符。三元运算符经常被用作 JavaScript 中if/else语句的缩写。它们不像传统的if/else语句那样健壮，但是在 React 开发人员中非常流行，原因之一就是 JSX 的编译原理，if/else语句不能直接插入到 JSX 代码中。你可能在前几个挑战就注意到了这一点--当需要if/else语句时，它总是在return语句外面。如果你想在 JSX 中实现条件逻辑，三元表达式是一个很好的选择。回想一下，三元运算符有三个部分，但是你可以将多个三元表达式组合在一起。以下是基本语法：

    condition ? expressionIfTrue : expressionIfFalse

代码编辑器在CheckUserAge组件的render()方法中定义了三个常量，它们分别是buttonOne、buttonTwo和buttonThree。每个都分配了一个表示按钮元素的简单 JSX 表达式。首先，使用input和userAge初始化CheckUserAge的 state，并将其值设置为空字符串。

一旦组件将信息渲染给页面，用户应该有一种方法与之交互。在组件的return语句中，设置一个实现以下逻辑的三元表达式：当页面首次加载时，将提交按钮buttonOne渲染到页面。然后，当用户输入年龄并点击该按钮时，根据年龄渲染不同的按钮。如果用户输入的数字小于18，则渲染buttonThree。如果用户输入的数字大于或等于18，则渲染buttonTwo。


# Question
```js
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```


# Answer
```js
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      input: '',
      userAge: ''
    }
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}
        { this.state.userAge === ''
            ? buttonOne
            : this.state.userAge >= 18
                ? buttonTwo
                : buttonThree
        }
        {/* Change code above this line */}
      </div>
    );
  }
}
```
