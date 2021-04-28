# Introducing Inline Styles

There are other complex concepts that add powerful capabilities to your React code. But you may be wondering about the more simple problem of how to style those JSX elements you create in React. You likely know that it won't be exactly the same as working with HTML because of the way you apply classes to JSX elements.

If you import styles from a stylesheet, it isn't much different at all. You apply a class to your JSX element using the className attribute, and apply styles to the class in your stylesheet. Another option is to apply inline styles, which are very common in ReactJS development.

You apply inline styles to JSX elements similar to how you do it in HTML, but with a few JSX differences. Here's an example of an inline style in HTML:

```js
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

JSX elements use the style attribute, but because of the way JSX is transpiled, you can't set the value to a string. Instead, you set it equal to a JavaScript object. Here's an example:

```js
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

Notice how we camelCase the fontSize property? This is because React will not accept kebab-case keys in the style object. React will apply the correct property name for us in the HTML.

Add a style attribute to the div in the code editor to give the text a color of red and font size of 72px.

Note that you can optionally set the font size to be a number, omitting the units px, or write it as 72px.
 


# 中文版本FCC
React：介绍内联样式

还有其他复杂的概念可以为你的 React 代码增加强大的功能。但是，你可能会想知道更简单的问题，比如：如何对在 React 中创建的 JSX 元素进行风格化。你可能知道，由于将 class 应用于 JSX 元素的方式与 HTML 中的使用并不完全相同。

如果从样式表导入样式，它就没有太大的不同。使用className属性将 class 应用于 JSX 元素，并将样式应用于样式表中的 class。另一种选择是使用内联样式，这在 ReactJS 开发中非常常见。

你将内联样式应用于 JSX 元素，类似于你在 HTML 中的操作方式，但有一些 JSX 差异。以下是 HTML 中内联样式的示例：

```js
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

JSX 元素使用style属性，但是由于 JSX 的传输方式，你不能将值设置为字符串。相反，你应将其设置为 JavaScript对象。这里有一个例子：

```js
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

注意我们使用驼峰式命名的 "fontSize" 属性，这是因为 React 不会接受样式对象中的连字符。React 将在 HTML 中为我们应用正确的属性名称。

在代码编辑器的div中添加一个style属性，使文本颜色为红色，字体大小为 72px。

请注意，你可以选择将字体大小设置为数字，省略单位 "px"，或者将其写为 "72px"。


# Question
```js
class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
    );
  }
};
```


# Answer
```js
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize:"72px"}}>Big Red</div>
    );
  }
};
```
