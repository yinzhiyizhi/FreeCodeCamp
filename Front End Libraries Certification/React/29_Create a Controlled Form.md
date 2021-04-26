# Create a Controlled Form

The last challenge showed that React can control the internal state for certain elements like input and textarea, which makes them controlled components. This applies to other form elements as well, including the regular HTML form element.

The MyForm component is set up with an empty form with a submit handler. The submit handler will be called when the form is submitted.

We've added a button which submits the form. You can see it has the type set to submit indicating it is the button controlling the form. Add the input element in the form and set its value and onChange() attributes like the last challenge. You should then complete the handleSubmit method so that it sets the component state property submit to the current input value in the local state.

Note: You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page.

Finally, create an h1 tag after the form which renders the submit value from the component's state. You can then type in the form and click the button (or press enter), and you should see your input rendered to the page.
 


# 中文版本FCC
React：创建一个可以控制的表单

上一个挑战展示了 React 能控制某些元素的内部 state，比如input和textarea，这使得这些元素成为受控组件。这也适用于其他表单元素，包括常规的 HTML 表单form元素。

MyForm组件中是一个带有提交处理程序的空form元素，提交处理程序将在提交表单时被调用。

我们增加了一个提交表单的按钮。你可以看到它的type被设置为submit，表明它是控制表单的按钮。在表单中添加input元素，并像上次挑战一样设置其value和onChange()属性。然后，你应该完成handleSubmit方法，以便将组件 state 属性submit设置为本地state下的当前输入值。

注意：  你还必须在提交处理程序中调用event.preventDefault()，以防止默认的表单提交行为刷新网页。

最后，在form元素之后创建一个h1标签，该标签从组件的state渲染submit的值。然后，你可以在表单中键入任何内容，然后单击按钮（或按 enter 键），你的输入会渲染到页面上。


# Question
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
    
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}

          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```


# Answer
```js

```
