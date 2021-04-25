# Create a Complex JSX Element

The last challenge was a simple example of JSX, but JSX can represent more complex HTML as well.

One important thing to know about nested JSX is that it must return a single element.

This one parent element would wrap all of the other levels of nested elements.

For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

Here's an example:

Valid JSX:

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

Invalid JSX:

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

Define a new constant JSX that renders a div which contains the following elements in order:

An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.

Note: When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. Also notice this challenge uses a div tag to wrap all the child elements within a single parent element. If you remove the div, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in React components.


# 中文版本FCC
React：创建一个复杂的 JSX 元素

上一个挑战是 JSX 的一个简单示例，但 JSX 也可以表示更复杂的 HTML。

关于嵌套的 JSX，你需要知道的一件重要的事情，那就是它必须返回单个元素。

这个父元素将包裹所有其他级别的嵌套元素。

例如，几个作为兄弟元素而编写的JSX元素没有父元素包裹将不会被转换。

这里是一个示例：

有效的 JSX：

    <div>
      <p>Paragraph One</p>
      <p>Paragraph Two</p>
      <p>Paragraph Three</p>
    </div>

无效的 JSX：

    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p>Paragraph Three</p>

定义一个新的常量JSX，渲染一个div，其中依次包含以下元素：

一个h1，一个p，一个包含三个li项的无序列表。你可以在每个元素中包含任何你想要的文本。

注意： 当像这样渲染多个元素时，你可以把它们都用圆括号括起来，但是这并不是必须的。还请注意，此挑战使用div标签把所有子元素包裹在里面。如果删除div，JSX 将不会编译这些元素。请记住这一点，因为当你在 React 组件中返回 JSX 元素时它也适用。


# Question
```html
// write your code here
```


# Answer
```html
// write your code here
const JSX = (<div>
  <h1></h1>
  <p></p>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>)
```
