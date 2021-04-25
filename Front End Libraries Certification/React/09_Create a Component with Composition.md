#  Create a Component with Composition
Now we will look at how we can compose multiple React components together. Imagine you are building an app and have created three components: a Navbar, Dashboard, and Footer.

To compose these components together, you could create an App parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the render method you could write:

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

When React encounters a custom HTML tag that references another component (a component name wrapped in < /> like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the App component and the Navbar, Dashboard, and Footer.

In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash.

Note: ChildComponent is defined with an ES6 arrow function because this is a very common practice when using React. However, know that this is just a function. If you aren't familiar with the arrow function syntax, please refer to the JavaScript section.


# 中文版本FCC
React：用组合的方式创建一个 React 组件
现在我们来看看如何组合多个 React 组件。想象一下，你正在构建一个应用程序，并创建了三个组件：Navbar、Dashboard和Footer。

要将这些组件组合在一起，你可以创建一个App父组件，将这三个组件分别渲染成为子组件。要在 React 组件中渲染一个子组件，你需要在 JSX 中包含作为自定义 HTML 标签编写的组件名称。例如，在render方法中，你可以这样编写：

```jsx
return (
<App>
  <Navbar />
  <Dashboard />
  <Footer />
</App>
)
```

当 React 遇到引用另一个组件的自定义 HTML 标签时（如本例所示，组件名称包含在< />中），它在标签的位置渲染该组件的标签。这可以说明App组件和Navbar、Dashboard以及Footer之间的父子关系。


在代码编辑器中，有一个名为ChildComponent的简单功能组件和一个名为ParentComponent的 React 组件。通过在ParentComponent中渲染ChildComponent来将两者组合在一起。确保使用正斜杠关闭ChildComponent标签。

注意： ChildComponent是使用 ES6 的箭头函数定义的，因为这是使用 React 时非常常见的做法。但是，要知道这只是一个函数。如果你不熟悉箭头函数语法，请参阅 JavaScript 部分。


# Question
```html
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }


        { /* Change code above this line */ }
      </div>
    );
  }
};
```


# Answer
```html
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
          <ChildComponent />

        { /* Change code above this line */ }
      </div>
    );
  }
};
```
