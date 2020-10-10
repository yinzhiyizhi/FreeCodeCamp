# Intermediate Algorithm Scripting: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


# 中文版本FCC
```
算法中级：DNA 配对

在这道题目中，我们需要写一个函数，为 DNA 中的碱基配对。这个函数只接收一个表示碱基的字符串为参数，最后返回完成配对的二维数组。

碱基对 由一对碱基组成。碱基有四种，分别为 A（腺嘌呤）、T（胸腺嘧啶）、G（鸟嘌呤）和 C（胞嘧啶）。配对原则是：A 与 T 配对，C 与 G 配对。我们需要根据这个原则对传入的所有碱基进行配对。

对于每个传入的碱基，我们应采用数组的形式展示配对结果。其中，传入的碱基需要作为数组的第一个元素出现。最终返回的数组中应当包含参数中每一个碱基的配对结果。

比如，传入的参数是 GCG，那么函数的返回值应为 [["G", "C"], ["C","G"],["G", "C"]]
```


# Question
```js
function pairElement(str) {
  return str;
}

pairElement("GCG");
```


# Answer
```js
function pairElement(str) {
  let pairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  };
  let newStr = str.split("");

  let result = newStr.map(x => [x, pairs[x]]);

  return result;
}

pairElement("GCG");
```
