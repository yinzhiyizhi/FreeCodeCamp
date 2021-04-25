# Pass an Array as Props

The last challenge demonstrated how to pass information from a parent component to a child component as props or properties. This challenge looks at how arrays can be passed as props. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

```js
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

The child component then has access to the array property colors. Array methods such as join() can be used when accessing the property. const ChildComponent = (props) => <p>{props.colors.join(', ')}</p> This will join all colors array items into a comma separated string and produce: <p>green, blue, red</p> Later, we will learn about other common methods to render arrays of data in React.

There are List and ToDo components in the code editor. When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"]. Then access this tasks array in the List component, showing its value within the p element. Use join(", ") to display the props.tasksarray in the p element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.
 


# 中文版本FCC
React：传递一个数组作为 Props

上一个挑战演示了如何将来自父组件的信息作为props传递给子组件。这个挑战着眼于如何将数组作为props传递。要将数组传递给 JSX 元素，必须将其视为 JavaScript 并用花括号括起来。

    <ParentComponent>
      <ChildComponent colors={["green", "blue", "red"]} />
    </ParentComponent>

这样，子组件就可以访问数组属性colors。访问属性时可以使用join()等数组方法。

const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>

这将把所有colors数组项连接成一个逗号分隔的字符串并生成：

<p>green, blue, red</p>

稍后，我们将了解在 React 中渲染数组数据的其他常用方法。

代码编辑器中有List和ToDo组件。在ToDo组件中渲染每个List时，传入tasks属性并将其分配给待办任务数组，例如["walk dog", "workout"]。然后访问List组件中的tasks数组，在p元素中显示其值。使用join(", ")把props.tasks数组作为逗号分隔列表显示在p元素中。今天的列表应该至少有 2 个任务，明天应该至少有 3 个任务。


# Question
```js
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```


# Answer
```js
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["walk doo", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["walk doo", "workout", "reading"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
