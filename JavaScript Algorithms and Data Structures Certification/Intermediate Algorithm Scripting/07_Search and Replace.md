# Intermediate Algorithm Scripting: Search and Replace

PPerform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


# 中文版本FCC
```
算法中级：搜索和替换

在这道题目中，我们需要写一个字符串的搜索与替换函数，它的返回值为完成替换后的新字符串。

这个函数接收的第一个参数为待替换的句子。

第二个参数为句中需要被替换的单词。

第三个参数为替换后的单词。

注意：
你需要保留被替换单词首字母的大小写格式。即如果传入的第二个参数为 "Book"，第三个参数为 "dog"，那么替换后的结果应为 "Dog"
```


# Question
```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```


# Answer
```js
function myReplace(str, before, after) {
  let result = "";
  after = after.toLowerCase();

  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1)
  }

  result = str.replace(before, after);

  return result;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
