# Bootstrap: Create Bootstrap Wells
Bootstrap has a class called well that can create a visual sense of depth for your columns.

Nest one div element with the class well within each of your col-xs-6 div elements. 


# 中文版本FCC
Bootstrap：创建 Bootstrap Wells

Bootstrap 有一个叫做 well的 class，作用是赋予列一种视觉上的深度感（视觉上的效果）。

在每一个 class 属性为 col-xs-6的 div元素中都嵌入一个带有 well的 div元素。


# Question
```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

    </div>
    <div class="col-xs-6">

    </div>
  </div>
</div>
```


# Answer
```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```
