# Create a React Component
The other way to define a React component is with the ES6 class syntax. In the following example, Kitten extends React.Component:

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

This creates an ES6 class Kitten which extends the React.Component class. So the Kitten class now has access to many useful React features, such as local state and lifecycle hooks. Don't worry if you aren't familiar with these terms yet, they will be covered in greater detail in later challenges. Also notice the Kitten class has a constructor defined within it that calls super(). It uses super() to call the constructor of the parent class, in this case React.Component. The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component's constructor with super, and pass props to both. This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. Soon you will see other uses for the constructor as well as props.

MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!. 


# 中文版本FCC
React：创建一个 React 组件
定义 React 组件的另一种方法是使用 ES6 的class语法。在以下示例中，Kitten扩展了React.Component：

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

这将创建一个 ES6 类Kitten，它扩展了React.Component类。因此，Kitten类现在可以访问许多有用的 React 功能，例如本地状态和生命周期钩子。如果你还不熟悉这些术语，请不要担心，在以后的挑战中我们将更详细地介绍它们。

另请注意，Kitten类中定义了一个调用super()方法的constructor。它使用super()调用父类的构造函数，即本例中的React.Component。构造函数是使用class关键字创建的特殊方法，它用在实例初始化之前。最佳做法是在组件的constructor里调用super，并将props传递给它们，这样可以保证组件能够正确地初始化。现在，你只需要知道这是标准的做法。很快你会看到构造函数的其他用途以及props。


MyComponent是使用类语法在代码编辑器中定义的。完成render方法的编写，使其返回div元素，其中包含文本内容为Hello React!的h1元素。


# Question
```html
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line



    // Change code above this line
  }
};
```


# Answer
```html
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );


    // Change code above this line
  }
};
```
