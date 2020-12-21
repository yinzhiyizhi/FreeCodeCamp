# Bootstrap: Split Your Bootstrap Row
Now that we have a Bootstrap Row, let's split it into two columns to house our elements.

Create two div elements within your row, both with the class col-xs-6. 


# 中文版本FCC
Bootstrap：分割你的 Bootstrap Row

既然我们已经有了一个 Bootstrap Row，就让我们把它分成两列来放置我们的元素。

在行内创建两个 class 属性为 col-xs-6的 div元素。


# Question
```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">


  </div>
</div>
```


# Answer
```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
</div>
```
