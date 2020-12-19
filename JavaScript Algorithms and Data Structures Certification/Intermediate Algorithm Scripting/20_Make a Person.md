# Intermediate Algorithm Scripting: Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.


# 中文版本FCC
```
算法中级：构造一个 Person 类

在这道题目中，我们需要写一个构造器（constructor）函数。它只接收一个字符串参数firstAndLast，这个参数代表一个英文名的全名（姓和名）。这个构造函数创建出的实例需要具有以下方法：

getFirstName() 
getLastName() 
getFullName() 
setFirstName(first) 
setLastName(last) 
setFullName(firstAndLast)

这些方法应当可以通过构造函数创建出的实例调用。

你可以点击 “运行测试”，然后就可以在底下的控制台中看到每个测试用例执行的情况。
```


# Question
```js
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
```


# Answer
```js
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullname = firstAndLast;

  this.getFirstName = function() {
    return fullname.split(' ')[0];
  };

  this.getLastName = function() {
    return fullname.split(' ')[1];
  };

  this.getFullName = function() {
    return fullname;
  };

  this.setFirstName = function(name) {
    return fullname = name + ' ' + fullname.split(' ')[1];
  };

  this.setLastName = function(name) {
    return fullname = fullname.split(' ')[0] + ' ' + name;
  };

  this.setFullName = function(name) {
    return fullname = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
```
