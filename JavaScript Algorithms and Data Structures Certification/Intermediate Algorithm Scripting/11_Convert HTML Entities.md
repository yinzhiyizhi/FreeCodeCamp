# Intermediate Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


# 中文版本FCC
```
算法中级：转换HTML实体

在这道题目中，我们需要写一个转换 HTML entity 的函数。需要转换的 HTML entity 有&、<、>、"（双引号）和'（单引号）。转换的规则你可以在 W3C 官网找到。
```
```
&   &amp;
<   &lt;
>   &gt;
"   &quot;
'   &apos;
```


# Question
```js
function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");
```


# Answer
```js
function convertHTML(str) {
  let char = {
    '&': '&amp;',
    '<': '&lt;',
    '>': "&gt;",
    '\"': '&quot;',
    '\'': '&apos;'
  }
  return str.split('').map(function(temp) {
    return char[temp] || temp;
  }).join('');
}

convertHTML("Dolce & Gabbana");
```
