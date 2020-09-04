# Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs

The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that map and filter are special cases of reduce.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce"). You may have already noticed this on the freeCodeCamp site.

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces


# 中文版本FCC
```
函数式编程：应用函数式编程将字符串转换为URL片段

最后几个挑战中涵盖了许多符合函数式编程原则并在处理数组和字符串中非常有用的方法。我们还学习了强大的、可以将问题简化为更简单形式的reduce方法，从计算平均值到排序，任何数组操作都可以用它来实现。回想一下，map和filter方法都是reduce的特殊实现。

让我们把学到的知识结合起来解决一个实际问题。

许多内容管理站点（CMS）为了让添加书签更简单，会将帖子的标题添加到 URL 上。举个例子，如果你写了一篇标题为 "Stop Using Reduce" 的帖子，URL很可能会包含标题字符串的某种形式 (如：".../stop-using-reduce")，你可能已经在 freeCodeCamp 网站上注意到了这一点。


填写urlSlug函数，使其转换字符串title带有连字符号的 URL 版本。您可以使用本节中介绍的任何方法，但不要用replace方法。以下是本次挑战的要求：

输入包含空格和标题大小写单词的字符串

输出字符串，单词之间的空格用连字符(-)替换

输出应该是小写字母

输出不应有任何空格
```


# Question
```js
// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
```


# Answer
```js
// Only change code below this line
function urlSlug(title) {
  let arrs = title.toLowerCase().split(" ").filter(arr => arr.length > 0);
  let result = arrs.join("-");
  return result;
}
// Only change code above this line
```