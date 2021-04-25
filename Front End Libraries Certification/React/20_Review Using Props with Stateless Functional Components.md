# Review Using Props with Stateless Functional Components

Except for the last challenge, you've been passing props to stateless functional components. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props. You may be wondering what state is, and the next challenge will cover it in more detail. Before that, here's a review of the terminology for components.

A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge). Finally, a stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.

A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
 


# 中文版本FCC
React：复习如何使用 Props 和无状态函数组件

除了上一个挑战，你一直在将 props 传递给无状态的函数组件。这些组件就像纯函数，它们接收 props 作为输入，并在每次传递相同 props 时返回相同的视图。你可能会想知道什么是状态，下一个挑战将会更详细地讲述它。在此之前，我们先来回顾一下组件的术语。

无状态函数组件是一个函数，它接收 props 作为输入并返回 JSX。另一方面，无状态组件是一个类，它扩展了React.Component，但是不使用内部状态（下一个挑战中讨论）。最后，状态组件是指维护其自身内部状态的组件，它简称组件或 React 组件。

一种常见的应用模式是尽可能减少状态组件并创建无状态的函数组件。这有助于将状态管理包含到应用程序的特定区域。反过来，通过更容易地跟踪状态变化如何影响其行为，可以改进应用程序的开发和维护。

在代码编辑器中有一个CampSite组件，它把Camper组件渲染为自己的子组件。定义Camper组件，并为其分配默认 props{ name: 'CamperBot' }。你可以在Camper组件内部渲染任何你想要的代码，但是要确保有一个p元素，它只包含作为prop传递的name值。最后，在Camper组件上定义propTypes，要求提供name作为 prop，并验证它是string类型。


# Question
```js
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
```


# Answer
```js
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
const Camper = (props) => {
  return <p>{props.name}</p>
};

Camper.defaultProps = {
  name: 'CamperBot'
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};
```
