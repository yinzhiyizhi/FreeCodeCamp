# Use @if and @else to Add Logic To Your StylesPassed

The @if directive in Sass is useful to test for a specific case - it works just like the if statement in JavaScript.

```html
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

And just like in JavaScript, @else if and @else test for more conditions:

```html
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

Create a mixin called border-stroke that takes a parameter $val. The mixin should check for the following conditions using @if, @else if, and @else:

```html
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

If $val is not light, medium, or heavy, the border should be set to none.


# 中文版本FCC
Sass：使用 @if 和 @else 为你的样式添加逻辑

Sass 中的@if指令对于测试特定情况非常有用--它的工作方式与 JavaScript中的if语句类似。

```html
    @mixin make-bold($bool) {
      @if $bool == true {
        font-weight: bold;
      }
    }
```

类似 JavaScript，你可以在 Sass 中使用@else if和@else添加更多条件：

```html
    @mixin text-effect($val) {
      @if $val == danger {
        color: red;
      }
      @else if $val == alert {
        color: yellow;
      }
      @else if $val == success {
        color: green;
      }
      @else {
        color: black;
      }
    }
```

创建一个名为border-stroke的mixin，它接受一个参数$val。mixin应使用@if，@else if和@else检查以下条件：

```html
    light - 1px solid black
    medium - 3px solid black
    heavy - 6px solid black
    none - no border
```


# Question
```html
<style type='text/scss'>



  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```


# Answer
```html
<style type='text/scss'>
@mixin border-stroke($val){
  @if $val == light {
    border: 1px solid black;
  }
  @else if $val == medium {
    border: 3px solid black;
  }
  @else if $val == heavy {
    border: 6px solid black;
  }
  @else {
    border: none;
  }
}


  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```
