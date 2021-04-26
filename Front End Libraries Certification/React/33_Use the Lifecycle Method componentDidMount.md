# Use the Lifecycle Method componentDidMount

Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action.

The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

There is a mock API call in componentDidMount(). It sets state after 2.5 seconds to simulate calling a server to retrieve data. This example requests the current total active users for a site. In the render method, render the value of activeUsers in the h1 after the text Active Users:. Watch what happens in the preview, and feel free to change the timeout to see the different effects.
 


# 中文版本FCC
React：使用生命周期方法：componentDidMount

某些时候，大多数 web 开发人员需要调用 API 端点来检索数据。如果你正在使用 React，知道在哪里执行这个动作是很重要的。

React 的最佳实践是在生命周期方法componentDidMount()中对服务器进行 API 调用或任何其他调用。将组件装载到 DOM 后会调用此方法。此处对setState()的任何调用都将触发组件的重新渲染。在此方法中调用 API 并使用 API​​ 返回的数据设置 state 时，一旦收到数据，它将自动触发更新。

componentDidMount()中有一个模拟 API 调用。它在 2.5 秒后设置 state，以模拟调用服务器检索数据。本示例请求站点的当前活动用户总数。在 render 方法中，把activeUsers渲染到h1标签中。观看预览中发生的事情，随意更改超时时间以查看不同的效果。


# Question
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
```


# Answer
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
```
