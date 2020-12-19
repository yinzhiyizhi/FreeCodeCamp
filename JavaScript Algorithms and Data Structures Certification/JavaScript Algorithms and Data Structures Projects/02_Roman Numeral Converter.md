# JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.


# 中文版本FCC
```
项目实战：罗马数字转换器

把传入的数字转变为罗马数字。

转换后的罗马数字字母必须都是大写。
```


# Question
```js
function convertToRoman(num) {
 return num;
}

convertToRoman(36);
```


# Answer
```js
function convertToRoman(num) {
  let roman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  function roManify(num, i) {
    let roNum;
    if (num == 0) {
      roNum = '';
    }
    else if (num > 0 && num < 4) {
      roNum = roman[i].repeat(num);
    }
    else if (num == 4) {
      roNum = roman[num * i];
    }
    else if (num >= 5 && num < 9) {
      roNum = roman[i * 5] + roman[i].repeat(num - 5);
    }
    else if (num == 9) {
      roNum = roman[num * i];
    }
    return roNum;
  }

  let temp = String(num).split('');
  let len = temp.length;
  let result;

  if (len == 4) {
    result = roManify(temp[0], 1000) + roManify(temp[1], 100) + roManify(temp[2], 10) + roManify(temp[3], 1);
  }
  else if (len == 3) {
    result = roManify(temp[0], 100) + roManify(temp[1], 10) + roManify(temp[2], 1);
  } 
  else if (len == 2) {
    result = roManify(temp[0], 10) + roManify(temp[1], 1);
  }
  else if (len == 1) {
    result = roManify(temp[0], 1);
  }

  return result;
 }

convertToRoman(36);
```
