# Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


# Answer

```JavaScript
function truncateString(str, num) {
  let result = str.slice(0,num);
  if (str.length > num) {
    return result + '...';
  }
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```