# JavaScript Algorithms and Data Structures Projects: Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


# 中文版本FCC
```
项目实战：凯撒密码

世界上最简单、最著名的加密方法是凯撒密码，也叫移位密码。在移位密码中，明文中的字母通过按照一个固定数目进行偏移后被替换成新的字母。

ROT13 是一个被广泛使用的编码技术，明文中的所有字母都被移动 13 位。因此，'A' ↔ 'N', 'B' ↔ 'O' 等等。

请编写一个函数，用于解码一个被 ROT13 编码的字符串，然后返回解码后的结果。

所有解码后的字母都必须为字母大写。请不要解码非字母的字符（例如，空格、标点符号），但你需要在结果中保留它们。
```


# Question
```js
function rot13(str) {

  return str;
}

rot13("SERR PBQR PNZC");
```


# Answer
```js
function rot13(str) {
  let letter = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
  }
  let temp = str.toUpperCase().split('');
  let result;

  for(let s in temp) {
    if (letter[temp[s]]) {
      temp[s] = letter[temp[s]];
    }
  }
  
  result = temp.join('');
  return result;
}

rot13("SERR PBQR PNZC");
```


# Second Answer

来源:[这里，作者MrEscape54](https://forum.freecodecamp.org/t/javascript-algorithms-and-data-structures-projects-caesars-cipher-help/216490/8)

```js
function rot13(str) { // LBH QVQ VG!
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const cipher = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
  let newStr = ''

  for (const letter of str) {
    alphabet.charAt(cipher.indexOf(letter)) != '' ? 
    newStr += alphabet.charAt(cipher.indexOf(letter)) : newStr += letter
  }
  return newStr
}
```

```
the for...of is used to iterate through the argument str
the charAt() function returns an empty string if the character is not found, so I used a ternary conditional. If the character is found, the chiper string is used to concatenate newStr. Otherwise, it just concatenates the original character.
```