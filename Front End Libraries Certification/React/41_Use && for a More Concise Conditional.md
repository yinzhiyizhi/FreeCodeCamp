# Use && for a More Concise Conditional

The if/else statements worked in the last challenge, but there's a more concise way to achieve the same result. Imagine that you are tracking several conditions in a component and you want different elements to render depending on each of these conditions. If you write a lot of else if statements to return slightly different UIs, you may repeat code which leaves room for error. Instead, you can use the && logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is true, and if it is, return some markup. Here's an example:

```js
{condition && <p>markup</p>}
```

If the condition is true, the markup will be returned. If the condition is false, the operation will immediately return false after evaluating the condition and return nothing. You can include these statements directly in your JSX and string multiple conditions together by writing && after each one. This allows you to handle more complex conditional logic in your render() method without repeating a lot of code.

Solve the previous example again, so the h1 only renders if display is true, but use the && logical operator instead of an if/else statement.
 


# 中文版本FCC
React：使用 && 获得更简洁的条件

if/else 语句在上一次挑战中是有效的，但是有一种更简洁的方法可以达到同样的结果。假设你正在跟踪组件中的几个条件，并且希望根据这些条件中的每一个来渲染不同的元素。如果你写了很多else if语句来返回稍微不同的 UI，你可能会写很多重复代码，这就留下了出错的空间。相反，你可以使用&&逻辑运算符以更简洁的方式执行条件逻辑。这是完全可行的，因为你希望检查条件是否为真，如果为真，则返回一些标记。这里有一个例子：

```js
{condition && <p>markup</p>}
```

如果condition为 true，则返回标记。如果 condition 为 false，操作将在判断condition后立即返回false，并且不返回任何内容。你可以将这些语句直接包含在 JSX 中，并通过在每个条件后面写&&来将多个条件串在一起。这允许你在render()方法中处理更复杂的条件逻辑，而无需重复大量代码。

再来看看前面的示例，h1还是在display为true时被渲染，但使用&&逻辑运算符代替if/else语句。


# Question
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
  }
};
```


# Answer
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```
