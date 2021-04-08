# Nest CSS with SassPassed

Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.

Normally, each element is targeted on a different line to style it, like so:

```
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```

For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:

```
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```

Use the nesting technique shown above to re-organize the CSS rules for both children of .blog-post element. For testing purposes, the h1 should come before the p element.


# 中文版本FCC
Sass：用 Sass 嵌套 CSS

Sass 允许 CSS 规则的嵌套，这在写样式表的时候会很有用。

在 CSS 里，每个元素的样式都需要写在独立的代码块中，如下所示：

```
    nav {
      background-color: red;
    }

    nav ul {
      list-style: none;
    }

    nav ul li {
      display: inline-block;
    }
```

对于一个大型项目，CSS 规则会很复杂。这时，引入嵌套功能（即在对应的父元素中写子元素的样式）可以有效地简化代码：

```
    nav {
      background-color: red;

      ul {
        list-style: none;

        li {
          display: inline-block;
        }
      }
    }
```

根据上面关于嵌套的例子，来简化.blog-post中两个子元素的 CSS 代码。出于测试目的，h1应该出现在p元素之前。


# Question
```html
<style type='text/scss'>
  .blog-post {

  }
  h1 {
    text-align: center;
    color: blue;
  }
  p {
    font-size: 20px;
  }
</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
</div>
```


# Answer
```html
<style type='text/scss'>
  .blog-post {
    h1 {
      text-align: center;
      color: blue;
    }
    p {
      font-size: 20px;
    }
  }
  
</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
</div>
```
