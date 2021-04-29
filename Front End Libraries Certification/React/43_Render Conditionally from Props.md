# Render Conditionally from Props

So far, you've seen how to use if/else, &&, and the ternary operator (condition ? expressionIfTrue : expressionIfFalse) to make conditional decisions about what to render and when. However, there's one important topic left to discuss that lets you combine any or all of these concepts with another powerful React feature: props. Using props to conditionally render code is very common with React developers — that is, they use the value of a given prop to automatically make decisions about what to render.

In this challenge, you'll set up a child component to make rendering decisions based on props. You'll also use the ternary operator, but you can see how several of the other concepts that were covered in the last few challenges might be just as useful in this context.

The code editor has two components that are partially defined for you: a parent called GameOfChance, and a child called Results. They are used to create a simple game where the user presses a button to see if they win or lose.

First, you'll need a simple expression that randomly returns a different value every time it is run. You can use Math.random(). This method returns a value between 0 (inclusive) and 1 (exclusive) each time it is called. So for 50/50 odds, use Math.random() >= .5 in your expression. Statistically speaking, this expression will return true 50% of the time, and false the other 50%. In the render method, replace null with the above expression to complete the variable declaration.

Now you have an expression that you can use to make a randomized decision in the code. Next you need to implement this. Render the Results component as a child of GameOfChance, and pass in expression as a prop called fiftyFifty. In the Results component, write a ternary expression to render the h1 element with the text You Win! or You Lose! based on the fiftyFifty prop that's being passed in from GameOfChance. Finally, make sure the handleClick() method is correctly counting each turn so the user knows how many times they've played. This also serves to let the user know the component has actually updated in case they win or lose twice in a row.
 


# 中文版本FCC
React：根据 Props 有条件地渲染

到目前为止，你已经看到了如何使用if/else、&&,、null和三元运算符（condition ? expressionIfTrue : expressionIfFalse）对渲染什么和何时渲染做出有条件的判定。然而，还有一个重要的话题需要讨论，让你将这些概念中的任何一个或所有概念与另一个强大的 React 功能结合起来：props。使用 props 有条件地渲染代码在 React 开发人员中很常见--也就是说：他们使用给定 prop 的值来自动决定渲染什么。

在这个挑战中，你将设置一个子组件来根据 props 做出渲染决定。你可以使用三元运算符，但是你可以看到过去几个挑战中涵盖的其他几个概念在这种情况下可能同样有用。

代码编辑器有两个部分为你定义的组件：一个名为GameOfChance的父组件和一个名为Results的子组件。他们被用来创建一个简单的游戏，用户按下按钮来看他们是赢还是输。

首先，你需要一个简单的表达式，每次运行时都会随机返回一个不同的值。你可以使用Math.random()。每次调用此方法时，此方法返回0（包括）和1（不包括）之间的值。因此，对于50/50的几率，请在表达式中使用Math.random() > .5。从统计学上讲，这个表达式有 50％ 的几率返回true，另外 50％ 返回false。在第 30 行，用此表达式替换注释以完成变量声明。

现在你有了一个表达式，可以用来在代码中做出随机决定，接下来你需要实现以下功能：将Results组件渲染为GameOfChance的子组件，并将expression作为 prop 传递出去，prop 的名字是fiftyFifty。在Results组件中，编写一个三元表达式基于从GameOfChance传来的 propfiftyFifty来渲染文本"You win!"或者"You lose!"。最后，确保handleClick()方法正确计算每个回合，以便用户知道他们玩过多少次。这也可以让用户知道组件实际上已经更新，以防他们连续赢两次或输两次时自己不知道。


# Question
```js
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return <h1></h1>;
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: 0 // Change this line
    });
  }
  render() {
    const expression = null; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}

        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```


# Answer
```js
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return (
        <h1>
          { this.props.fiftyFifty ? "You win!" : "You lose!" }
        </h1>
      )
    {/* Change code above this line */}
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // Change this line
    });
  }
  render() {
    const expression = Math.random() >= 0.5 ? true : false; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```
