# Access Props Using this.props

The last several challenges covered the basic ways to pass props to child components. But what if the child component that you're passing a prop to is an ES6 class component, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.

Anytime you refer to a class component within itself, you use the this keyword. To access props within a class component, you preface the code that you use to access it with this. For example, if an ES6 class component has a prop called data, you write {this.props.data} in JSX.

Render an instance of the ReturnTempPassword component in the parent component ResetPassword. Here, give ReturnTempPassword a prop of tempPassword and assign it a value of a string that is at least 8 characters long. Within the child, ReturnTempPassword, access the tempPassword prop within the strong tags to make sure the user sees the temporary password.
 


# 中文版本FCC
React：使用 this.props 访问 Props

前几项挑战涵盖了将 props 传递给子组件的基本方法。但是，倘若接收 prop 的子组件不是无状态函数组件，而是一个 ES6 类组件又当如何呢？ES6 类组件访问 props 的方法略有不同。

任何时候，只要引用类组件本身，就要使用this关键字。要访问类组件中的 props，你需要在在访问它的代码前面添加this。例如，如果 ES6 类组件有一个名为data的 prop，你可以在 JSX 中这样写：{this.props.data}。

在父组件ResetPassword中渲染ReturnTempPassword组件的一个实例。在这里，为ReturnTempPassword提供一个tempPasswordprop，并赋值给 prop 一个长度至少为 8 个字符的字符串。在子组件ReturnTempPassword中，访问strong标签中的tempPasswordprop，以确保用户看到临时密码。


# Question
```js
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <p>Your temporary password is: <strong></strong></p>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* Change code below this line */ }

          { /* Change code above this line */ }
        </div>
    );
  }
};
```


# Answer
```js
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* Change code below this line */ }
          <ReturnTempPassword tempPassword="abcdefghij" />
          { /* Change code above this line */ }
        </div>
    );
  }
};
```
