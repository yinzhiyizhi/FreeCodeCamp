# Functional Programming: Understand the Hazards of Using Imperative Code

Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.

Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is part of the Window object that stores the name of the open pages.

Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

Change Window.prototype.tabClose so that it removes the correct tab.


# 中文版本FCC
```
函数式编程：了解使用命令式编程的危害

函数式编程是一种好习惯，它能让代码管理更简单，不受隐藏 bug 影响。在我们开始函数式编程之前，为了更好的突显可能遇到的问题，我们先看看命令式编程。

类似在英语（和许多其他语言）中，命令式时态用于给出命令，编程中的命令式是给计算机一组语句来执行任务。

这些语句通常会改变程序的状态，例如更新全局变量，典型的例子就是写一个for循环，它给出了迭代数组索引的精确方向。

相反，函数式编程是声明式编程的一种形式，通过调用方法或函数来告诉计算机要做什么。

JavaScript 提供了许多处理常见任务的方法，所以你无需写出计算机应如何执行它们。例如，你可以用map函数替代上面提到的for循环来处理数组迭代。这有助于避免语义错误，如调试章节介绍的"Off By One Errors"。

考虑这样的场景：你正在浏览器中浏览网页，并想操作你打开的标签。下面我们来试试用面向对象的思路来描述这种情景。

窗口对象由选项卡组成，通常会打开多个窗口。窗口对象中每个打开网站的标题都保存在一个数组中。在对浏览器进行了如打开新标签、合并窗口、关闭标签之类的操作后，你需要输出所有打开的标签。关掉的标签将从数组中删除，新打开的标签（为简单起见）则添加到数组的末尾。

代码编辑器中显示了此功能的实现，其中包含tabOpen()，tabClose()，和join()函数。tabs数组是窗口对象的一部分用于储存打开页面的名称。
说明

在编辑器中运行代码。它使用了有副作用的方法，导致输出错误。打开标签的最终列表应该是['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']但输出会略有不同。

仔细阅读代码，看看你是否能找出问题所在，然后进入下一个挑战，了解更多信息。
```


# Answer

```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```