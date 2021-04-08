# Create Reusable CSS with MixinsPassed

In Sass, a mixin is a group of CSS declarations that can be reused throughout the style sheet.

Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes. Consider box-shadow:

```html
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

It's a lot of typing to re-write this rule for all the elements that have a box-shadow, or to change each value to test different effects. Mixins are like functions for CSS. Here is how to write one:

```html
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

The definition starts with @mixin followed by a custom name. The parameters (the $x, $y, $blur, and $c in the example above) are optional. Now any time a box-shadow rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the @include directive:

```html
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

Write a mixin for border-radius and give it a $radius parameter. It should use all the vendor prefixes from the example. Then use the border-radius mixin to give the #awesome element a border radius of 15px.


# 中文版本FCC
Sass：用 Mixins 创建可重用 CSS

在 Sass 中，mixin是一组 CSS 声明，可以在整个样式表中重复使用。

CSS 的新功能需要一段时间适配后，所有浏览器后才能完全使用。随着浏览器的不断升级，使用这些 CSS 规则时可能需要添加浏览器前缀。比如 "box-shadow":

```html
    div {
      -webkit-box-shadow: 0px 0px 4px #fff;
      -moz-box-shadow: 0px 0px 4px #fff;
      -ms-box-shadow: 0px 0px 4px #fff;
      box-shadow: 0px 0px 4px #fff;
    }
```

对于所有具有box-shadow属性的元素重写此规则，或者更改每个值以测试不同的效果，需要花费大量的精力。

Mixins就像 CSS 的函数。以下是一个例子：

```html
    @mixin box-shadow($x, $y, $blur, $c){
      -webkit-box-shadow: $x, $y, $blur, $c;
      -moz-box-shadow: $x, $y, $blur, $c;
      -ms-box-shadow: $x, $y, $blur, $c;
      box-shadow: $x, $y, $blur, $c;
    }
```

定义以@mixin开头，后跟自定义名称。参数（$x，$y，$blur，以及上例中的$c是可选的。

现在，只要在需要的地方使用@include调用上面定义的mixin，就可以自动添加好所有的浏览器前缀：mixin使用@include指令调用：

```html
    div {
      @include box-shadow(0px, 0px, 4px, #fff);
    }
```

为border-radius写一个mixin，并给它一个$radius参数。它应该使用示例中的所有浏览器前缀，然后使用border-radius mixin为#awesome元素提供 15px 的边框半径。


# Question
```html
<style type='text/scss'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>
```


# Answer
```html
<style type='text/scss'>
@mixin border-radius($radius){
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```
