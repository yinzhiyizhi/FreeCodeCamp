# JavaScript Algorithms and Data Structures Projects: Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".


# 中文版本FCC
```
项目实战：回文检查器

如果给定的一个字符串是回文，那么返回true，否则返回false。

palindrome（回文），指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。

注意：
检查回文时，你需要先除去所有非字母数字的字符（标点、空格和符号）并且将所有字符转换成字母大写或字母小写。

我们将会传入不同格式的字符串，例如："racecar"、"RaceCar"、"race CAR"等等。

我们也会传入一些包含特殊符号的字符串，例如"2A3*3a2"，"2A3 3a2"和"2_A3*3#A2"。
```


# Question
```js
function palindrome(str) {
  return true;
}



palindrome("eye");
```


# Answer
```js
function palindrome(str) {
  let char = /[\W_]/g;
  let temp = str.toLowerCase().replace(char, '');
  let rev = temp.split('').reverse().join('');
  return temp === rev;
}



palindrome("eye");
```
