# JavaScript Algorithms and Data Structures Projects: Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

```
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


# 中文版本FCC
```
项目实战：电话号码验证器

如果传入的字符串是一个有效的美国电话号码格式，则返回true。

只要是有效的美国电话号码的格式，用户可以按照他们的方式填写表单中的电话号码。以下是一些正确的例子（其他格式变形请参考以下例子）：

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

在这个挑战中，你将会看到例如800-692-7753或者8oo-six427676;laskdjf的号码。你的任务是根据上面不同的格式组合，判断它是否美国号码。区号是必须的。如果提供国家代码，则必须确认国家代码为1。如果这是有效的美国电话就返回true，否则返回false。
```


# Question
```js
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");
```


# Answer
```js
function telephoneCheck(str) {
  let temp = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/;
  return temp.test(str);
}

telephoneCheck("555-555-5555");
```
