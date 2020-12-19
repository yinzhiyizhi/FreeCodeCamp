# Bootstrap: Use a span to Target Inline Elements
You can use spans to create inline elements. Remember when we used the btn-block class to make the button fill the entire row?

<button class="btn" style="background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);">normal button</button>

<button class="btn btn-block" style="background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);">btn-block button</button>

That illustrates the difference between an "inline" element and a "block" element.

By using the inline span element, you can put several elements on the same line, and even style different parts of the same line differently.

Nest the word "love" in your "Things cats love" element below within a span element. Then give that span the class text-danger to make the text red.

Here's how you would do this with the "Top 3 things cats hate" element:

<p>Top 3 things cats <span class="text-danger">hate:</span></p>




# 中文版本FCC
Bootstrap：使用 span 创建行内元素

你可以使用 span 标签来创建行内元素。还记得我们怎么使用 btn-blockclass 来创建填满整行的按钮吗？

<button class="btn" style="background-color: rgb(0, 100, 0); color: rgb(255, 255, 255); --darkreader-inline-bgcolor:#005000; --darkreader-inline-color:#e8e6e3;" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">normal button</button>

<button class="btn btn-block" style="background-color: rgb(0, 100, 0); color: rgb(255, 255, 255); --darkreader-inline-bgcolor:#005000; --darkreader-inline-color:#e8e6e3;" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">btn-block button</button>

上面的例子就是 "inline" （行内）元素和 "block" （块级）元素的区别。

通过使用行内元素 span，你可以把不同的元素放在同一行，甚至能为一个元素的不同部分指定样式。

把 "Things cats love" 中的 "love" 放入 span标签。然后为其添加 text-dangerclass 来使其文字变成红色。

"Top 3 things cats hate" 元素的写法如下：

<p>Top 3 things cats <span class="text-danger">hate:</span></p>


# Question
```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```


# Answer
```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love</span>:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```
