# Add Inline Styles in React

You may have noticed in the last challenge that there were several other syntax differences from HTML inline styles in addition to the style attribute set to a JavaScript object. First, the names of certain CSS style properties use camel case. For example, the last challenge set the size of the font with fontSize instead of font-size. Hyphenated words like font-size are invalid syntax for JavaScript object properties, so React uses camel case. As a rule, any hyphenated style properties are written using camel case in JSX.

All property value length units (like height, width, and fontSize) are assumed to be in px unless otherwise specified. If you want to use em, for example, you wrap the value and the units in quotes, like {fontSize: "4em"}. Other than the length values that default to px, all other property values should be wrapped in quotes.

If you have a large set of styles, you can assign a style object to a constant to keep your code organized. Initialize a styles constant and assign an object with three style properties and their values to it. Give the div a color of purple, a font-size of 40, and a border of 2px solid purple. Then set the style attribute equal to the styles constant.
 


# 中文版本FCC
React：在 React 中添加内联样式

在上一次挑战中，你可能已经注意到，除了设置为 JavaScript 对象的style属性之外，与 HTML 内联样式相比，React 的内联样式还有其他几个语法差异。首先，某些 CSS 样式属性的名称使用驼峰式命名。例如，最后一个挑战用fontSize而不是font-size来设置字体的大小。对于 JavaScript 对象属性来说，像font-size这样的连字符命名是无效的语法，所以 React 使用驼峰式命名。通常，任何连字符的 style 属性在 JSX 中都是使用驼峰式命名的。

除非另有规定，否则所有属性值是长度的（如height、width和fontSize）其单位都假定为px。例如，如果要使用em，可以用引号将值和单位括起来，例如{fontSize: "4em"}。除了默认为px的长度值之外，所有其他属性值都应该用引号括起来。

如果你有大量样式，你可以将 style对象分配给一个常量，以保持代码的组织有序。取消对styles常量的注释，并声明具有三个样式属性及对应值的对象。使div的文字颜色为"purple"、字号为40、边框为"2px solid purple"。然后设置style属性，使其等于styles常量。


# Question
```js
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // Change code above this line
  }
};
```


# Answer
```js
const styles = {color: "purple", fontSize: 40, border: "2px solid purple"};
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};
```
