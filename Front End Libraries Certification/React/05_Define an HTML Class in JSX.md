# Define an HTML Class in JSX

Now that you're getting comfortable writing JSX, you may be wondering how it differs from HTML.

So far, it may seem that HTML and JSX are exactly the same.

One key difference in JSX is that you can no longer use the word class to define HTML classes. This is because class is a reserved word in JavaScript. Instead, JSX uses className.

In fact, the naming convention for all HTML attributes and event references in JSX become camelCase. For example, a click event in JSX is onClick, instead of onclick. Likewise, onchange becomes onChange. While this is a subtle difference, it is an important one to keep in mind moving forward.

Apply a class of myDiv to the div provided in the JSX code.
 

# 中文版本FCC
React：在 JSX 中定义一个 HTML Class

现在你已经习惯了编写 JSX，你可能想知道它与 HTML 有什么不同。

到目前为止，HTML 和 JSX 似乎完全相同。

JSX 的一个关键区别是你不能再使用class这个单词来定义 HTML 的 class 名。这是因为class是 JavaScript 中的关键字。JSX 使用className代替。

事实上，JSX 中所有 HTML 属性和事件引用的命名约定都变成了驼峰式。例如，JSX 中的单击事件是 onClick，而不是 onclick。同样，onchange变成了onChange。虽然这是一个微妙的差异，但请你一定要记住。

将 classmyDiv 应用于 JSX 提供的div上。


# Question
```html
const JSX = (
  <div>
    <h1>Add a class to this div</h1>
  </div>
);
```


# Answer
```html
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);
```
