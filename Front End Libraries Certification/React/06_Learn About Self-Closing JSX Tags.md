# Learn About Self-Closing JSX Tags

So far, you’ve seen how JSX differs from HTML in a key way with the use of className vs. class for defining HTML classes.

Another important way in which JSX differs from HTML is in the idea of the self-closing tag.

In HTML, almost all tags have both an opening and closing tag: <div></div>; the closing tag always has a forward slash before the tag name that you are closing. However, there are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start.

For example the line-break tag can be written as <br> or as <br />, but should never be written as <br></br>, since it doesn't contain any content.

In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as <br /> in order to be valid JSX that can be transpiled. A <div>, on the other hand, can be written as <div /> or <div></div>. The difference is that in the first syntax version there is no way to include anything in the <div />. You will see in later challenges that this syntax is useful when rendering React components.

Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.
 

# 中文版本FCC
React：了解自动闭合的 JSX 标记

到目前为止，你已经看到 JSX 与 HTML 的不同之处在于使用className和使用class来定义 HTML 的 class。

JSX 不同于 HTML 的另一个重要方面是自闭合标签。

在HTML中，几乎所有的标签都有一个开始和结束标签：<div></div>，结束标签在你要关闭的标签名之前始终具有正斜杠。但是，HTML 中有一些称为“自闭合标签”的特殊实例，它们在另一个标签开始之前，不需要开始和结束标签都存在。

例如，换行标签可以写成<br>或者<br />，但是不应该写成<br></br>，因为它不包含任何内容。

在 JSX 中，规则略有不同。任何 JSX 元素都可以使用自闭合标签编写，并且每个元素都必须关闭。例如，换行标签必须始终编写为<br />。另一方面<div>可以写成<div />或者<div></div>。不同之处在于，在第一个语法版本中，无法在<div />中包含任何内容。在后面的挑战中你会发现，这种语法在渲染 React 组件时非常有用。

修复代码编辑器中的错误，使其成为有效的 JSX 并成功转换。确保你不更改任何内容--你只需要在需要的地方关闭标签。


# Question
```html
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
  </div>
);
```


# Answer
```html
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
```
