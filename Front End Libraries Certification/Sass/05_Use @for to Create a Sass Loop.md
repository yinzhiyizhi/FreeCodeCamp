# Use @for to Create a Sass LoopPassed

The @for directive adds styles in a loop, very similar to a for loop in JavaScript.

@for is used in two ways: "start through end" or "start to end". The main difference is that the "start to end" excludes the end number as part of the count, and "start through end" includes the end number as part of the count.

Here's a start through end example:

```html
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

The #{$i} part is the syntax to combine a variable (i) with text to make a string. When the Sass file is converted to CSS, it looks like this:

```html
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

This is a powerful way to create a grid layout. Now you have twelve options for column widths available as CSS classes.

Write a @for directive that takes a variable $j that goes from 1 to 6.

It should create 5 classes called .text-1 to .text-5 where each has a font-size set to 15px multiplied by the index.


# 中文版本FCC
Sass：使用 @for 创建一个 Sass 循环

你可以在 Sass 中使用@for循环，它的表现类似与 JavaScript 中的for循环。

@for以两种方式使用："start through end" 或 "start to end"。主要区别在于“开始结束” 排除 结束号码，而“开始结束” 包括 结束号码。

这是一个开始 到 结束示例：

```html
    @for $i from 1 through 12 {
      .col-#{$i} { width: 100%/12 * $i; }
    }
```

#{$i}部分是将变量（i）与文本组合成字符串的语法。当 Sass 文件转换为 CSS 时，它看起来像这样：

```html
    .col-1 {
      width: 8.33333%;
    }

    .col-2 {
      width: 16.66667%;
    }

    ......

    .col-12 {
      width: 100%;
    }
```

这是创建网格布局的有效方法。现在，你有 12 个可用作 CSS classes 的列宽选项。

编写@for指令，使$j的值为从 1（包含）到 6（不包含）。

它应该创建 5 个名为.text-1的 classes 到.text-5，其中每个 class 的font-size设置为 2px+10px 乘以索引。


# Question
```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```


# Answer
```html
<style type='text/scss'>
@for $j from 1 through 5 {
  .text-#{$j} {font-size: 15px * $j;}
}



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
