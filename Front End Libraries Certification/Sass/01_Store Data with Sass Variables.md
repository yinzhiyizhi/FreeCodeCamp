# Store Data with Sass Variables 
One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the let and const keywords. In Sass, variables start with a $ followed by the variable name.

Here are a couple examples:

$main-fonts: Arial, sans-serif;
$headings-color: green;

And to use the variables:

h1 {
  font-family: $main-fonts;
  color: $headings-color;
}

One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.

Create a variable $text-color and set it to red. Then change the value of the color property for the .blog-post and h2 to the $text-color variable.


# 中文版本FCC
Sass：用 Sass 变量存储数据

Sass 不同于 CSS 的一个特点是它允许使用变量。我们可以在 Sass 中声明变量，并为它赋值，就像我们在 JavaScript 中一样。

在 JavaScript 中，变量是使用let和const关键字定义的。在 Sass 中，变量以$开头的，后跟变量名。

这里有几个例子：

    $main-fonts: Arial, sans-serif;
    $headings-color: green;

    //To use variables:
    h1 {
      font-family: $main-fonts;
      color: $headings-color;
    }

当需要把多个元素设置成相同颜色时，变量就会很有用。一旦我们需要更改颜色，只需要改变这个变量的值就好。

创建一个变量$text-color并将其设置为红色。然后更改.blog-post和h2的color属性的值为$text-color变量。


# Question
```html
<style type='text/scss'>


  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```


# Answer
```html
<style type='text/scss'>
$text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```
