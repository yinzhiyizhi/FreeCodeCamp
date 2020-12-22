#  jQuery: Learn How Script Tags and Document Ready Work
Now we're ready to learn jQuery, the most popular JavaScript tool of all time.

Before we can start using jQuery, we need to add some things to our HTML.

First, add a script element at the top of your page. Be sure to close it on the following line.

Your browser will run any JavaScript inside a script element, including jQuery.

Inside your script element, add this code: $(document).ready(function() { to your script. Then close it on the following line (still inside your script element) with: });

We'll learn more about functions later. The important thing to know is that code you put inside this function will run as soon as your browser has loaded your page.

This is important because without your document ready function, your code may run before your HTML is rendered, which would cause bugs.


# 中文版本FCC
jQuery：了解 Script 和 Document 是如何工作的

现在我们已经准备好学习有史以来最受欢迎的 JavaScript 框架——jQuery 了。

在使用 jQuery 之前，我们需要在 HTML 页面中添加一些东西。

首先，在页面顶部添加script标签，记得在后面为script标签添加结束标签。

浏览器在script标签中运行所有的 JavaScript 脚本包括 jQuery。

在script标签中添加代码$(document).ready(function() {。然后在后面（仍在该script标签内）用});闭合它。

稍后我们将详细介绍functions，现在需要知道的是，只要浏览器加载页面，function中放入的代码就会运行。

有一点很重要，如果没有document ready function，你的代码将在 HTML 页面呈现之前运行，这将导致错误。


# Question
```html
<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


# Answer
```html

```
