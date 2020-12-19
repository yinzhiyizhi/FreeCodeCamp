# JavaScript Algorithms and Data Structures Projects: Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

| Currency | Unit	Amount |
| --- | --- |
| Penny	| $0.01 (PENNY) |
| Nickel |	$0.05 (NICKEL) |
| Dime |	$0.1 (DIME) |
| Quarter |	$0.25 (QUARTER) |
| Dollar |	$1 (ONE) |
| Five Dollars |	$5 (FIVE) |
| Ten Dollars |	$10 (TEN) |
| Twenty Dollars |	$20 (TWENTY) |
| One-hundred Dollars |	$100 (ONE HUNDRED) |

See below for an example of a cash-in-drawer array:

```
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```


# 中文版本FCC
```
项目实战：收银机

编写一个用于收银机的函数checkCashRegister()，传入售价为第一个参数（price）、支付金额为第二个参数（cash）、收银机內的金额为第三个参数（cid）。

cid是包含货币面值的二维数组。

函数checkCashRegister()必须返回含有status键值和change键值的对象。

如果收银机內的金额少于应找回的零钱数，或者你无法返回确切的数目时，返回{status: "INSUFFICIENT_FUNDS", change: []}。

如果收银机內的金额等于应找回的零钱数，返回{status: "CLOSED", change: [...]}，其中change键值是收银机內的金额。

否则，返回{status: "OPEN", change: [...]}，其中change键值是应找回的零钱数，并且它的面值由高到低排序。
```

| 货币单位 | 面值 |
| --- | --- |
| Penny	| $0.01 (PENNY) |
| Nickel |	$0.05 (NICKEL) |
| Dime |	$0.1 (DIME) |
| Quarter |	$0.25 (QUARTER) |
| Dollar |	$1 (ONE) |
| Five Dollars |	$5 (FIVE) |
| Ten Dollars |	$10 (TEN) |
| Twenty Dollars |	$20 (TWENTY) |
| One-hundred Dollars |	$100 (ONE HUNDRED) |


# Question
```js
function checkCashRegister(price, cash, cid) {
  var change;
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
```


# Answer
```js
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let result = {status: '', change: []};
  let totalCid = 0;

  let cidObj = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }

  totalCid = Math.round(totalCid * 100) / 100;

  if (totalCid < change) {
    result.status = 'INSUFFICIENT_FUNDS';
    result.change = [];
  }
  else if (totalCid === change) {
    result.status = 'CLOSED';
    result.change = cid;
    return result;
  }
  else {
    for (let i = cid.length - 1; i >= 0; i--) {
      if (change >= cidObj[cid[i][0]] && change >= cid[i][1]) {
        result.change.push(cid[i]);
        change -= cid[i][1];
      change = Math.round(change * 100) / 100;
      }
      else if (change >= cidObj[cid[i][0]] && change < cid[i][1]) {
        let temp = Math.floor(change / cidObj[cid[i][0]]) * cidObj[cid[i][0]];
        result.change.push([cid[i][0], temp]);
        change -= temp;
        change = Math.round(change * 100) / 100;
      }
    }
  }

  if (change >= 0.01) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }
  else {
    result.status = "OPEN";
  }

  return result;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]
```
