# Bootstrap: Label Bootstrap Wells
For the sake of clarity, let's label both of our wells with their ids.

Above your left-well, inside its col-xs-6 div element, add a h4 element with the text #left-well.

Above your right-well, inside its col-xs-6 div element, add a h4 element with the text #right-well. 


# 中文版本FCC
Bootstrap：给 Bootstrap Wells 贴标签
为了让我们页面逻辑更清晰，让我们为 wells 都标上它们的 id 吧。

在 left-well 的上一层，class 属性为 col-xs-6的 div元素里面，增加一个文本为 #left-well的 h4元素。

在 right-well 的上一层，class 属性为 col-xs-6的 div元素里面，增加一个文本为 #right-well的 h4元素。


# Question
```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">

      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
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
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```
