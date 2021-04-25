# Render a Class Component to the DOM

You may remember using the ReactDOM API in an earlier challenge to render JSX elements to the DOM. The process for rendering React components will look very similar. The past few challenges focused on components and composition, so the rendering was done for you behind the scenes. However, none of the React code you write will render to the DOM without making a call to the ReactDOM API.

Here's a refresher on the syntax: ReactDOM.render(componentToRender, targetNode). The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.

React components are passed into ReactDOM.render() a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example ReactDOM.render(<ComponentToRender />, targetNode). You use this syntax for both ES6 class components and functional components.

Both the Fruits and Vegetables components are defined for you behind the scenes. Render both components as children of the TypesOfFood component, then render TypesOfFood to the DOM. There is a div with id='challenge-node' available for you to use.


# 中文版本FCC
React：渲染 class 组件为 Dom 树

你可能还记得在早期挑战中使用 ReactDOM API 将 JSX 元素渲染到 DOM，这与渲染 React 组件的过程十分相似。过去的几个挑战主要针对组件和组合，因此渲染是在幕后为你完成的。但是，如果不调用 ReactDOM API，你编写的任何 React 代码都不会渲染到 DOM。

以下是语法的复习：ReactDOM.render(componentToRender, targetNode)。第一个参数是要渲染的 React 组件。第二个参数是要在其中渲染该组件的 DOM 节点。

React 组件传递到ReactDOM.render()与 JSX 元素略有不同。对于 JSX 元素，你传入的是要渲染的元素的名称。但是，对于 React 组件，你需要使用与渲染嵌套组件相同的语法，例如ReactDOM.render(<ComponentToRender />, targetNode)。你可以将此语法用于ES6类组件和函数组件。

在后台为你定义了Fruits和Vegetables组件。将两个组件渲染为TypesOfFood组件的子组件，然后将TypesOfFood渲染到 DOM 节点，在这个挑战中，请渲染到 id 为challenge-node的div中。


# Question
```html
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
```


# Answer
```html
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
          <Fruits />
          <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```
