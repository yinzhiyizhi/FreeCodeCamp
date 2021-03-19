# jQuery: Target Even Elements Using jQuery
You can also target elements based on their positions using :odd or :even selectors.

Note that jQuery is zero-indexed which means the first element in a selection has a position of 0. This can be a little confusing as, counter-intuitively, :odd selects the second element (position 1), fourth element (position 3), and so on.

Here's how you would target all the odd elements with class target and give them classes:

$(".target:odd").addClass("animated shake");

Try selecting all the even target elements and giving them the classes of animated and shake. Remember that even refers to the position of elements with a zero-based system in mind. 


# 中文版本FCC
jQuery：使用 jQuery 选择偶数元素

你也可以用基于位置的:odd和:even选择器选取标签。

注意，jQuery 是零索引（zero-indexed）的，这意味着第 1 个标签的位置编号是0。这有点混乱和反常——:odd表示选择第 2 个标签（位置编号 1），第 4 个标签（位置编号 3）……等等，以此类推。

下面的代码展示了选取所有的奇标签并设置类：

$(".target:odd").addClass("animated shake");

请尝试选取所有target标签的偶标签并给他们设置animated和shake类。要考虑到偶（even）指的是标签位置编号基于0的系统。


# Question
```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");

  });
</script>

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
