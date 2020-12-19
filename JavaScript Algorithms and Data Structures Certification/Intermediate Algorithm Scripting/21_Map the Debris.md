# Intermediate Algorithm Scripting: Map the Debris

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


# 中文版本FCC
```
算法中级：绘制碎片图

在这道题目中，我们需要写一个计算天体轨道周期的函数，它接收一个对象数组参数arr，对象中包含表示天体名称的name属性，及表示轨道半长轴的avgAlt属性。就像这样：{name: 'name', avgAlt: avgAlt}。

这个函数的返回值也是一个对象数组，应保留原对象中的name属性和值，然后根据avgAlt属性的值求出轨道周期（单位是秒），并赋值给orbitalPeriod属性。返回值中不应保留原数据中的avgAlt属性及其对应的值。

你可以在这条维基百科的链接中找到轨道周期的计算公式。

轨道周期的计算以地球为基准（即环绕地球的轨道周期），计算结果应取整到最接近的整数。

地球的半径是 6367.4447 千米，地球的 GM 值为 398600.4418 km3s-2。
```


# Question
```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```


# Answer
```js
function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let a = 2 * Math.PI;
  let result = [];
  let getOrbPeriod = function (obj) {
    let b = Math.pow(earthRadius + obj.avgAlt, 3);
    let c = Math.sqrt(b / GM);
    let orbPeriod = Math.round(a * c);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (let elem in arr) {
    result.push(getOrbPeriod(arr[elem]));
  }

  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```
