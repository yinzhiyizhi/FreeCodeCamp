# Use @each to Map Over Items in a ListPassed

The last challenge showed how the @for directive uses a starting and ending value to loop a certain number of times. Sass also offers the @each directive which loops over each item in a list or map. On each iteration, the variable gets assigned to the current value from the list or map.

```html
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}

A map has slightly different syntax. Here's an example:

$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

Note that the $key variable is needed to reference the keys in the map. Otherwise, the compiled CSS would have color1, color2... in it. Both of the above code examples are converted into the following CSS:

```html
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

Write an @each directive that goes through a list: blue, black, red and assigns each variable to a .color-bg class, where the color part changes for each item. Each class should set the background-color the respective color.


# 中文版本FCC
Sass：使用 @each 遍历列表中的项目

最后一个挑战显示了@for指令如何使用起始值和结束值循环一定次数。Sass 还提供@each指令，该指令循环遍历列表或映射中的每个项目。

在每次迭代时，变量将从列表映射赋值给当前值。

```html
    @each $color in blue, red, green {
      .#{$color}-text {color: $color;}
    }
```

map 的语法略有不同。这是一个例子：

```html
    $colors: (color1: blue, color2: red, color3: green);

    @each $key, $color in $colors {
      .#{$color}-text {color: $color;}
    }
```

请注意，需要$key变量来引用 map 中的键。否则，编译后的 CSS 将包含color1，color2......

以上两个代码示例都转换为以下 CSS：

```html
    .blue-text {
      color: blue;
    }

    .red-text {
      color: red;
    }

    .green-text {
      color: green;
    }
```

编写一个@each指令，通过一个列表：blue,black,red并将每个变量分配给.color-bgclass, 其中每个项目的“颜色”部分都会发生变化。

每个 class 都应该将background-color设置为相应的颜色。


# Question
```html
<style type='text/scss'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```


# Answer
```html
<style type='text/scss'>
  $colors: (color1: blue, color2: black, color3: red);
  
  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }
  
    div {
      height: 200px;
      width: 200px;
    }
  </style>
  
  <div class="blue-bg"></div>
  <div class="black-bg"></div>
  <div class="red-bg"></div>
```
