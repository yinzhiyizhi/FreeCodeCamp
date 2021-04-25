# Extend One Set of CSS Styles to Another ElementPassed

Sass has a feature called extend that makes it easy to borrow the CSS rules from one element and build upon them in another.

For example, the below block of CSS rules style a .panel class. It has a background-color, height and border.

```html
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

Now you want another panel called .big-panel. It has the same base properties as .panel, but also needs a width and font-size. It's possible to copy and paste the initial CSS rules from .panel, but the code becomes repetitive as you add more types of panels. The extend directive is a simple way to reuse the rules written for one element, then add more for another:

```html
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

The .big-panel will have the same properties as .panel in addition to the new styles.

Make a class .info-important that extends .info and also has a background-color set to magenta.


# 中文版本FCC
Sass：将一组CSS样式扩展到另一个元素

Sass 有一个名为extend的功能，可以很容易地从一个元素中借用 CSS 规则并在另一个元素上重用它们。

例如，下面的 CSS 规则块设置了.panelclass 的样式。它有background-color，height和border。

```html
    .panel{
      background-color: red;
      height: 70px;
      border: 2px solid green;
    }
```

现在你需要另一个名为.big-panel的面板。它具有与.panel相同的基本属性，但还需要width和font-size。

可以从.panel复制并粘贴初始 CSS 规则，但是当你添加更多类型的面板时，代码会变得重复。

extend指令是一种重用为一个元素编写的规则的简单方法，然后为另一个元素添加更多：

```html
    .big-panel{
      @extend .panel;
      width: 150px;
      font-size: 2em;
    }
```

除了新样式之外，.big-panel将具有与.panel相同的属性。

创建一个扩展.info的 class.info-important，并将background-color设置为洋红色。


# Question
```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```


# Answer
```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important{
    @extend .info;
    background-color: magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```
