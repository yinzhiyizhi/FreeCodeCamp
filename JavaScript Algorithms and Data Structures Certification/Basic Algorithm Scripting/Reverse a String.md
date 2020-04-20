# Basic Algorithm Scripting: Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.


# Answer

```JavaScript
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
```