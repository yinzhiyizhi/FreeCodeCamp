#  Create a Controlled Input

Your application may have more complex interactions between state and the rendered UI. For example, form control elements for text input, such as input and textarea, maintain their own state in the DOM as the user types. With React, you can move this mutable state into a React component's state. The user's input becomes part of the application state, so React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.

The code editor has the skeleton of a component called ControlledInput to create a controlled input element. The component's state is already initialized with an input property that holds an empty string. This value represents the text a user types into the input field.

First, create a method called handleChange() that has a parameter called event. When the method is called, it receives an event object that contains a string of text from the input element. You can access this string with event.target.value inside the method. Update the input property of the component's state with this new string.

In the render method, create the input element above the h4 tag. Add a value attribute which is equal to the input property of the component's state. Then add an onChange() event handler set to the handleChange() method.

When you type in the input box, that text is processed by the handleChange() method, set as the input property in the local state, and rendered as the value in the input box on the page. The component state is the single source of truth regarding the input data.

Last but not least, don't forget to add the necessary bindings in the constructor.



# 中文版本FCC
React：创建一个可以控制的输入框

你的应用程序可能在state和渲染的 UI 之间有更复杂的交互。例如，用于文本输入的表单控件元素（如input和textarea）在用户键入时在 DOM 中维护自己的 state。通过 React，你可以将这种可变 state 转移到 React 组件的state中。用户的输入变成了应用程序state的一部分，因此 React 控制该输入字段的值。通常，如果你的 React 组件具有用户可以键入的输入字段，那么它将是一个受控的输入表单。

代码编辑器具有一个名为ControlledInput的组件框架，用于创建受控的input元素。组件的state已经被包含空字符串的input属性初始化。此值表示用户在input字段中键入的文本。

首先，创建一个名为handleChange()的方法，该方法具有一个名为event的参数。方法被调用时，它接收一个event对象，该对象包含一个来自input元素的字符串文本。你可以使用方法内的event.target.value来访问这个字符串。用这个新字符串更新组件的state的input属性。

在 render 方法中，在h4标签之上创建input元素。添加一个value属性，它等于组件的state的input属性。然后将onChange()事件处理程序设置到handleChange()方法。

在输入框中键入时，该文本由handleChange()方法处理，该文本被设置为本地state中的input属性，并渲染在页面上的input框中。组件state是输入数据的唯一真实来源。

最后也是最重要的，不要忘记在构造函数中添加必要的绑定。


# Question
```js
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}

        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```


# Answer
```js
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange}/>
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```
