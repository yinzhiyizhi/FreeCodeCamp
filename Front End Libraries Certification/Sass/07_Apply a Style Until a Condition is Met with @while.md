# Apply a Style Until a Condition is Met with @whilePassed

The @while directive is an option with similar functionality to the JavaScript while loop. It creates CSS rules until a condition is met.

The @for challenge gave an example to create a simple grid system. This can also work with @while.

$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}

First, define a variable $x and set it to 1. Next, use the @while directive to create the grid system while $x is less than 13. After setting the CSS rule for width, $x is incremented by 1 to avoid an infinite loop.

Use @while to create a series of classes with different font-sizes.

There should be 5 different classes from text-1 to text-5. Then set font-size to 15px multiplied by the current index number. Make sure to avoid an infinite loop!


# 中文版本FCC
Sass：使用 @while 当条件满足时样式生效

Sass 中的@while指令与 JavaScript 中的while类似。只要满足条件，它就会一直创建 CSS 代码。

@for挑战提供了一个创建简单网格系统的示例。这也适用于@while。

    $x: 1;
    @while $x< 13 {
      .col-#{$x} { width: 100%/12 * $x;}
      $x: $x + 1;
    }

首先，定义变量$x并将其设置为 1。接下来，使用@while指令，当$x小于 13 时创建网格系统 。

在设置width的 CSS 规则后，$x增加 1 以避免无限循环。

使用@while创建一系列具有不同font-sizes的 class。

从text-1到text-10应该有 10 个不同的 class。然后将font-size设置为 2px+10px 乘以当前索引号。注意不要写成死循环！


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
$x: 1;
@while $x < 6 {
  .text-#{$x} { font-size: $x * 15px; }
  $x: $x + 1;
}


</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
