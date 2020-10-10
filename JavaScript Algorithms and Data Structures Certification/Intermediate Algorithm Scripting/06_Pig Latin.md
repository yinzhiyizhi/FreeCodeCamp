# Intermediate Algorithm Scripting: Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


# 中文版本FCC
```
算法中级：儿童黑话

在这道题目中，我们需要写一个函数，把传入的字符串翻译成“儿童黑话”。

儿童黑话的基本转换规则很简单，只需要把一个英文单词的第一个辅音字母或第一组辅音从移到单词的结尾，并在后面加上ay即可。在英语中，字母 a、e、i、o、u 为元音，其余的字母均为辅音。辅音从的意思是连续的多个辅音字母。

额外地，如果单词本身是以元音开头的，那只需要在结尾加上way。

在本题中，传入的单词一定会是英文单词，且所有字母均为小写。
```


# Question
```js
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
```


# Answer
```js
function translatePigLatin(str) {
  let regex = /[aeiou]+/g

  //首字符是元音
  if (str[0].match(regex)) {
    return str + "way";
  }
  //有元音字符但不在首字符
  else if (str.match(regex)) {
    return str.replace(/([^aeiou]+)(\w*)/g, "$2$1" + "ay");
  }
  //没有元音字符
  else {
    return str + "ay";
  }
}

translatePigLatin("consonant");
```
