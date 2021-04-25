# Use PropTypes to Define the Props You Expect

React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set propTypes on your component to require the data to be of type array. This will throw a useful warning when the data is of any other type.

It's considered a best practice to set propTypes when you know the type of a prop ahead of time. You can define a propTypes property for a component in the same way you defined defaultProps. Doing this will check that props of a given key are present with a given type. Here's an example to require the type function for a prop called handleClick:

```js
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```

In the example above, the PropTypes.func part checks that handleClick is a function. Adding isRequired tells React that handleClick is a required property for that component. You will see a warning if that prop isn't provided. Also notice that func represents function. Among the seven JavaScript primitive types, function and boolean (written as bool) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the documentation for all of the options.

Note: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';

Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.
 


# 中文版本FCC
React：使用 PropTypes 来定义你期望的 Props

React 提供了有用的类型检查特性，以验证组件是否接收了正确类型的 props。例如，你的应用程序调用 API 来检索你希望在数组中的数据，然后将数据作为 prop 传递给组件。你可以在组件上设置propTypes，以要求数据的类型为array。当数据是任何其他类型时，都会抛出警告。

当你提前知道 prop 的类型时，最好的做法是设置propTypes。可以为组件定义propTypes属性，方法与定义defaultProps相同。这样做将检查给定键的 prop 是否是给定类型。这里有一个示例，名为handleClick的 prop 应为function类型：

```js
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```

在上面的示例中，PropTypes.func部分检查handleClick是否为函数。添加isRequired是为了告诉 ReacthandleClick是该组件的必需属性。如果未提供该 prop，你将看到警告信息。另请注意，func表示function。在 7 种 JavaScript 基本类型中，function和boolean（写为bool）是仅有的使用异常拼写的两种类型。除了基本类型，还有其他类型可用。例如，你可以检查 prop 是否为 React 组件，请参阅文档以获取所有选项。

注意：在 React v15.5.0 版本中, PropTypes可以从 React 中单独引入，如下所示：

import React, { PropTypes } from 'react';

为Items组件定义propTypes，要求quantity作为 prop，并验证它是number类型。


# Question
```js
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line

// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```


# Answer
```js
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = { 
  quantity: PropTypes.number.isRequired
};
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```
