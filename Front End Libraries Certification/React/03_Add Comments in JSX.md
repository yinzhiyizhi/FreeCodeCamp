# Add Comments in JSX

JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this.

To put comments inside JSX, you use the syntax {/* */} to wrap around the comment text.

The code editor has a JSX element similar to what you created in the last challenge. Add a comment somewhere within the provided div element, without modifying the existing h1 or p elements.


# 中文版本FCC
React：在 JSX 中添加注释

JSX 是一种可以编译成有效 JavaScript 的语法。有时，为了便于阅读，你可能需要在代码中添加注释。像大多数编程语言一样，JSX 也有自己的方法来实现这一点。

要将注释放在 JSX 中，可以使用{/* */}语法来包裹注释文本。

代码编辑器中的 JSX 元素与你在上一个挑战中创建的元素类似。在提供的div元素中的某处添加注释，而不修改现有的h1或p元素。


# Question
```html
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```


# Answer
```html
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>{/*h1*/}
    <p>Here's a subtitle</p>{/*p*/}
  </div>
);
```
