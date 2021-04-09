# Split Your Styles into Smaller Chunks with PartialsPassed

Partials in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.

Names for partials start with the underscore (_) character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the .scss file extension. To bring the code in the partial into another Sass file, use the @import directive.

For example, if all your mixins are saved in a partial named "_mixins.scss", and they are needed in the "main.scss" file, this is how to use them in the main file:

```html
@import 'mixins'
```

Note that the underscore and file extension are not needed in the import statement - Sass understands it is a partial. Once a partial is imported into a file, all variables, mixins, and other code are available to use.

Write an @import statement to import a partial named _variables.scss into the main.scss file.


# 中文版本FCC
Sass：用 Partials 将你的样式分成小块

Sass 中的Partials是包含 CSS 代码段的单独文件。这些是在其他 Sass 文件中导入和使用的。我们可以把类似代码放到模块中，以保持代码结构规整且易于管理。

partials的名称以下划线（_）字符开头，告诉 Sass 它是 CSS 的一小部分，而不是将其转换为 CSS 文件。此外，Sass 文件以.scss文件扩展名结尾。要将partial中的代码放入另一个 Sass 文件中，请使用@import指令。

例如，如果所有mixins都保存在名为 "_mixins.scss " 的partial中，并且在"main.scss "文件中需要它们，这是如何在主文件中使用它们：

```html
    // In the main.scss file

    @import 'mixins'
```

请注意，import语句中不需要下划线——Sass 知道它是partial。将partial导入文件后，可以使用所有变量mixins和其他代码。

编写@import语句，将名为_variables.scss的partial导入 main.scss 文件。


# Question
```html
<!-- The main.scss file -->
```


# Answer
```html
<!-- The main.scss file -->

@import 'variables'
```
