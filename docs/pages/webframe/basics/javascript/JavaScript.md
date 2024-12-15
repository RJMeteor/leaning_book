---
title: JavaScript
author: RJMeteor
createTime: 2024/12/02 04:41:42
permalink: /webframe/javascript/
---

## 1. 加密

### 1.1 base64加解密

- `window.btoa(str)`：加密

- `window.atob(str)`：解密

  ~~~javascript
  var str = "äöüÄÖÜçéèñ";
  var b64 = window.btoa(unescape(encodeURIComponent(str)))
  console.log(b64);
   
  var str2 = decodeURIComponent(escape(window.atob(b64)));
  console.log(str2);
  ~~~


### 1.2 AES/DES 加解密方式

对称加密：加密密钥和解密密钥相同。
验证如下：

~~~javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
<script type="text/javascript">
	var aseKey = "12345678"     //秘钥必须为：8/16/32位
	var message = "13785624612";
	
	//加密
	var encrypt = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(aseKey), {
	  mode: CryptoJS.mode.ECB,
	  padding: CryptoJS.pad.Pkcs7
	}).toString();
	console.log(encrypt); 

	//解密
	var decrypt = CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(aseKey), {
	  mode: CryptoJS.mode.ECB,
	  padding: CryptoJS.pad.Pkcs7
	}).toString(CryptoJS.enc.Utf8);
	console.log(decrypt);    //13785624612
</script>
~~~

注：加密的时候必须转成字符串 使用toString。 解密的时候 必须使用utf8的格式

### 1.3 RSA

非对称加密：加密密钥和解密密钥不相同。

~~~javascript
/* 产引入jsencrypt实现数据RSA加密 */
import JSEncrypt from 'jsencrypt' // 处理长文本数据时报错 jsencrypt.js Message too long for RSA
/* 产引入encryptlong实现数据RSA加密 */
import Encrypt from 'encryptlong' // encryptlong是基于jsencrypt扩展的长文本分段加解密功能。
~~~

## 2. 现代模式

这个指令看上去像一个字符串 `"use strict"` 或者 `'use strict'`。当它处于脚本文件的顶部时，则整个脚本文件都将以“现代”模式进行工作。

- 请确保 `"use strict"` 出现在脚本的最顶部，否则严格模式可能无法启用。
- 现代 JavaScript 支持 “class” 和 “module” —— 高级语言结构（本教程后续章节会讲到），它们会自动启用 `use strict`。因此，如果我们使用它们，则无需添加 `"use strict"` 指令。

## 3. 交互：alert、prompt 和 confirm

- `alert`：弹出的这个带有信息的小窗口被称为 **模态窗**。“modal” 意味着用户不能与页面的其他部分（例如点击其他按钮等）进行交互，直到他们处理完窗口。在上面示例这种情况下 —— 直到用户点击“确定”按钮。

  ~~~js
  alert("Hello");
  ~~~

- `prompt` 函数接收两个参数：

  - `title`：显示给用户的文本

  - `[default]`：可选的第二个参数，指定 input 框的初始值。

  ~~~js
  result = prompt(title, [default]);
  ~~~

  

- `confirm` 函数显示一个带有 `question` 以及确定和取消两个按钮的模态窗口。点击确定返回 `true`，点击取消返回 `false`。

  ~~~js
  result = confirm(question);
  ~~~

## 4. 空值合并运算符 '??'

~~~javascript
let height = 0;
alert(height ?? 100); // 0
~~~

- `??` 序列从一系列的值中选择出第一个非 `null/undefined` 的值

- `??` 返回第一个 **已定义的** 值。

## 5. 可选链 "?."

~~~javascript
let user = {}; // user 没有 address 属性
alert( user?.address?.street ); // undefined（不报错）
~~~

- 如果可选链 `?.` 前面的值为 `undefined` 或者 `null`，它会停止运算并返回 `undefined`。

- `?.` 语法使其前面的值成为可选值，但不会对其后面的起作用。

- `?.` 前的变量必须已声明

  如果未声明变量 `user`，那么 `user?.anything` 会触发一个错误：

  ```javascript
  // ReferenceError: user is not defined
  user?.address;
  ```

  `?.` 前的变量必须已声明（例如 `let/const/var user` 或作为一个函数参数）。可选链仅适用于已声明的变量。

- 如果 `?.` 左边部分不存在，就会立即停止运算（“短路效应”）。因此，如果在 `?.` 的右侧有任何进一步的函数调用或操作，它们均不会执行。

## 6. 函数

- 函数声明：在主代码流中声明为单独的语句的函数。

  **在函数声明被定义之前，它就可以被调用。**

  ~~~javascript
  function sayHi() {
    alert( "Hello" );
  }
  ~~~

- 函数表达式：在一个表达式中或另一个语法结构中创建的函数。

  **函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。**

  ~~~javascript
  let sayHi = function() {
    alert( "Hello" );
  };
  ~~~

- 函数是个值。无论函数是如何创建的，函数都是一个值。无论函数是如何创建的，函数都是一个值。

## 7. 箭头函数

::: warning 深入理解箭头函数

- **箭头函数没有“this"**，箭头函数没有 `this`。如果访问 `this`，则会从外部获取。
- **不能对箭头函数进行** `new` **操作**
- **箭头函数没有**`arguments`

:::

箭头函数可以像函数表达式一样使用。

~~~javascript
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => alert('Hello'!) :
  () => alert("Greetings!");
welcome();
~~~

箭头函数对于简单的操作很方便，特别是对于单行的函数。它具体有两种形式：

- 不带花括号：`(...args) => expression` — 右侧是一个表达式：函数计算表达式并返回其结果。如果只有一个参数，则可以省略括号，例如 `n => n*2`。

- 带花括号：`(...args) => { body }` — 花括号允许我们在函数中编写多个语句，但是我们需要显式地 `return` 来返回一些内容。

## 8. 对象引用和复制

与原始类型相比，对象的根本区别之一是对象是“通过引用”被存储和复制的，与原始类型值相反：字符串，数字，布尔值等 —— 始终是以“整体值”的形式被复制的。

**赋值了对象的变量存储的不是对象本身，而是该对象“在内存中的地址” —— 换句话说就是对该对象的“引用”。**

克隆与合并：

~~~javascript
Object.assign(dest, [src1, src2, src3...])
~~~

- 第一个参数 `dest` 是指目标对象。
- 更后面的参数 `src1, ..., srcN`（可按需传递多个参数）是源对象。
- 该方法将所有源对象的属性拷贝到目标对象 `dest` 中。换句话说，从第二个开始的所有参数的属性都被拷贝到第一个参数的对象中。
- 调用结果返回 `dest`。

~~~javascript
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true，同一个对象

// user 和 clone 分享同一个 sizes
user.sizes.width++;       // 通过其中一个改变属性值
alert(clone.sizes.width); // 51，能从另外一个看到变更的结果
~~~

现在这样拷贝`clone.sizes = user.sizes` 已经不足够了，因为 `user.sizes` 是个对象，它会以引用形式被拷贝。因此 `clone` 和 `user` 会共用一个 sizes。

## 9. Symbol 类型

- `Symbol值`表示唯一的标识符。

- 我们可以给 Symbol 一个描述（也称为 Symbol 名），这在代码调试时非常有用：

  ~~~javascript
  // id 是 symbol 的一个实例化对象
  // id 是描述为 "id" 的 Symbol
  let id = Symbol("id");
  ~~~

  Symbol 保证是唯一的。即使我们创建了许多具有相同描述的 Symbol，它们的值也是不同。描述只是一个标签，不影响任何东西。

- **Symbol 不会被自动转换为字符串**

  如果我们真的想显示一个 Symbol，我们需要在它上面调用 `.toString()`，如下所示：

  ~~~javascript
  let id = Symbol("id");
  alert(id.toString()); // Symbol(id)，现在它有效了
  ~~~

  或者获取 `symbol.description` 属性，只显示描述（description）：

  ~~~javascript
  let id = Symbol("id");
  alert(id.description); // id
  ~~~

- **“隐藏”属性**

  Symbol 允许我们创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。

  使用 `Symbol("id")` 作为键，比起用字符串 `"id"` 来有什么好处呢？

  因为 `user` 对象属于其他的代码，那些代码也会使用这个对象，所以我们不应该在它上面直接添加任何字段，这样很不安全。但是你添加的 Symbol 属性不会被意外访问到，第三方代码根本不会看到它，所以使用 Symbol 基本上不会有问题。

  另外，假设另一个脚本希望在 `user` 中有自己的标识符，以实现自己的目的。这可能是另一个 JavaScript 库，因此脚本之间完全不了解彼此。

- **对象字面量中的 Symbol**

  ~~~javascript
  let id = Symbol("id");
  
  let user = {
    name: "John",
    [id]: 123 // 而不是 "id"：123
  };
  ~~~

  这是因为我们需要变量 `id` 的值作为键，而不是字符串 “id”。

- **Symbol 在 for…in 中会被跳过**

  `Object.keys(user) `也会忽略它们。这是一般“隐藏符号属性”原则的一部分。如果另一个脚本或库遍历我们的对象，它不会意外地访问到符号属性。

  相反，`Object.assign()`会同时复制字符串和 symbol 属性：

- **全局 symbol**

  正如我们所看到的，通常所有的 Symbol 都是不同的，即使它们有相同的名字。但有时我们想要名字相同的 Symbol 具有相同的实体。例如，应用程序的不同部分想要访问的 Symbol `"id"` 指的是完全相同的属性。

  为了实现这一点，这里有一个 **全局 Symbol 注册表**。我们可以在其中创建 Symbol 并在稍后访问它们，它可以确保每次访问相同名字的 Symbol 时，返回的都是相同的 Symbol。

  要从注册表中读取（不存在则创建）Symbol，请使用 `Symbol.for(key)`。

  对于全局 Symbol，不仅有 `Symbol.for(key)` 按名字返回一个 Symbol，还有一个反向调用：`Symbol.keyFor(sym)`，它的作用完全反过来：通过全局 Symbol 返回一个名字。

  例如：

  ~~~
  // 通过 name 获取 Symbol
  let sym = Symbol.for("name");
  let sym2 = Symbol.for("id");
  
  // 通过 Symbol 获取 name
  alert( Symbol.keyFor(sym) ); // name
  alert( Symbol.keyFor(sym2) ); // id
  ~~~
  
- **系统 Symbol**

  JavaScript 内部有很多“系统” Symbol，我们可以使用它们来微调对象的各个方面。

  它们都被列在了 [众所周知的 Symbol](https://tc39.github.io/ecma262/#sec-well-known-symbols) 表的规范中：

  - `Symbol.hasInstance`
  - `Symbol.isConcatSpreadable`
  - `Symbol.iterator`
  - `Symbol.toPrimitive`
  - ……等等。

  例如，`Symbol.toPrimitive` 允许我们将对象描述为原始值转换。我们很快就会看到它的使用。

## 10. 数学类型

**toString(base)**: `num.toString(base)` 返回在给定 `base` 进制数字系统中 `num` 的字符串表示形式。

**toFixed(n)**：将数字舍入到小数点后 `n` 位，并以字符串形式返回结果。

**isFinite(value)**：将其参数转换为数字，如果是常规数字，则返回 `true`，而不是 `NaN/Infinity/-Infinity`：

**isNaN(value)**：将其参数转换为数字，然后测试它是否为 `NaN`

**parseInt(str, radix)**：

`parseInt()` 函数具有可选的第二个参数。它指定了数字系统的基数，因此 `parseInt` 还可以解析十六进制数字、二进制数字等的字符串：

`parseInt` 和 `parseFloat` 的作用。

它们可以从字符串中“读取”数字，直到无法读取为止。如果发生 error，则返回收集到的数字。函数 `parseInt` 返回一个整数，而 `parseFloat` 返回一个浮点数：

```javascript
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
```

## 11. 数组方法

::: tip **添加/移除数组元素**

- `arr.push(...items)` —— 从尾端添加元素，
- `arr.pop()` —— 从尾端提取元素，
- `arr.shift()` —— 从首端提取元素，
- `arr.unshift(...items)` —— 从首端添加元素。
**splice**：可以做所有事情：添加，删除和插入元素。

:::

### 11.1 splice

~~~javascript
arr.splice(start[, deleteCount[, elem1, ..., elemN]])
~~~
它从索引 `start` 开始修改 `arr`：删除 `deleteCount` 个元素并在当前位置插入 `elem1, ..., elemN`。最后返回已被删除元素的数组。

### 11.2 **slice**：

~~~javascript
arr.slice([start], [end])
~~~
它会返回一个新数组，将所有从索引 `start` 到 `end-1`的数组项复制到一个新的数组。`start` 和 `end` 都可以是负数，在这种情况下，从末尾计算索引。

### **11.3 concat**：

~~~javascript
arr.concat(arg1, arg2...)
~~~
创建一个新数组，其中包含来自于其他数组和其他项的值。

它接受任意数量的参数 —— 数组或值都可以。

结果是一个包含来自于 `arr`，然后是 `arg1`，`arg2` 的元素的新数组。

如果参数 `argN` 是一个数组，那么其中的所有元素都会被复制。否则，将复制参数本身。

### 11.4 **forEach**：

允许为数组的每个元素都运行一个函数。

~~~javascript
arr.forEach(function(item, index, array) {
  // ... do something with item
});
~~~

### 11.5 **indexOf/lastIndexOf 和 includes**：

与字符串操作具有相同的语法，并且作用基本上也与字符串的方法相同，只不过这里是对数组元素而不是字符进行操作：

- `arr.indexOf(item, from)` 从索引 `from` 开始搜索 `item`，如果找到则返回索引，否则返回 `-1`。
- `arr.lastIndexOf(item, from)` —— 和上面相同，只是从右向左搜索。
- `arr.includes(item, from)` —— 从索引 `from` 开始搜索 `item`，如果找到则返回 `true`（译注：如果没找到，则返回 `false`）。

### 11.6 **find 和 findIndex**

~~~javascript
let result = arr.find(function(item, index, array) {
  // 如果返回 true，则返回 item 并停止迭代
  // 对于假值（falsy）的情况，则返回 undefined
});
~~~

依次对数组中的每个元素调用该函数：

- `item` 是元素。
- `index` 是它的索引。
- `array` 是数组本身。

如果它返回 `true`，则搜索停止，并返回 `item`。如果没有搜索到，则返回 `undefined`。

`arr.findIndex`方法（与 `arr.find` 方法）基本上是一样的，但它返回找到元素的索引，而不是元素本身。并且在未找到任何内容时返回 `-1`。

### 11.7 **filter**：

`find` 方法搜索的是使函数返回 `true` 的第一个（单个）元素。

如果需要匹配的有很多，我们可以使用` arr.filter(fn)`。

语法与 `find` 大致相同，但是 `filter` 返回的是所有匹配元素组成的数组：

~~~javascript
let results = arr.filter(function(item, index, array) {
  // 如果 true item 被 push 到 results，迭代继续
  // 如果什么都没找到，则返回空数组
});
~~~

### 11.8 **map**：

它对数组的每个元素都调用函数，并返回结果数组。

~~~javascript
let result = arr.map(function(item, index, array) {
  // 返回新值而不是当前元素
})
~~~

### 11.9 **split 和 join**：

`str.split(delim)` 方法可以做到。它通过给定的分隔符 `delim` 将字符串分割成一个数组。

`arr.join(glue)` 与 `split` 相反。它会在它们之间创建一串由 `glue` 粘合的 `arr` 项。

11.10 **reduce**：

用于根据数组计算单个值

~~~javascript
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
~~~

该函数一个接一个地应用于所有数组元素，并将其结果“搬运（carry on）”到下一个调用。

参数：

- `accumulator` —— 是上一个函数调用的结果，第一次等于 `initial`（如果提供了 `initial` 的话）。本质上是累加器
- `item` —— 当前的数组元素。
- `index` —— 当前索引。
- `arr` —— 数组本身。

> 如果 `fn` 返回一个真值，`arr.some(fn)` 立即返回 `true` 并停止迭代其余数组项；如果 `fn` 返回一个假值，`arr.every(fn)` 立即返回 `false` 并停止对其余数组项的迭代。



## 12. Iterable object（可迭代对象）

### 12.1 **Symbol.iterator**：有该属性的对象是可迭代的对象（可遍历）

可以应用 `for..of` 的对象被称为 **可迭代的**。

为了让 `range` 对象可迭代（也就让 `for..of` 可以运行）我们需要为对象添加一个名为 `Symbol.iterator` 的方法（一个专门用于使对象可迭代的内建 symbol）。

1. 当 `for..of` 循环启动时，它会调用这个方法（如果没找到，就会报错）。这个方法必须返回一个 **迭代器（iterator）** —— 一个有 `next` 方法的对象。

2. 从此开始，`for..of` **仅适用于这个被返回的对象**。

3. 当 `for..of` 循环希望取得下一个数值，它就调用这个对象的 `next()` 方法。

4. `next()` 方法返回的结果的格式必须是 `{done: Boolean, value: any}`，当 `done=true` 时，表示循环结束，否则 `value` 是下一个值。

   ~~~javascript
   let range = {
     from: 1,
     to: 5
   };
   
   // 1. for..of 调用首先会调用这个：
   range[Symbol.iterator] = function() {
   
     // ……它返回迭代器对象（iterator object）：
     // 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
     return {
       current: this.from,
       last: this.to,
   
       // 3. next() 在 for..of 的每一轮循环迭代中被调用
       next() {
         // 4. 它将会返回 {done:.., value :...} 格式的对象
         if (this.current <= this.last) {
           return { done: false, value: this.current++ };
         } else {
           return { done: true };
         }
       }
     };
   };
   
   // 现在它可以运行了！
   for (let num of range) {
     alert(num); // 1, 然后是 2, 3, 4, 5
   }
   ~~~

### 12.2 **Array.from**

有一个全局方法` Array.from`可以接受一个可迭代或类数组的值，并从中获取一个“真正的”数组。然后我们就可以对其调用数组方法了。

~~~javascript
Array.from(obj[, mapFn, thisArg])
~~~

可选的第二个参数 `mapFn` 可以是一个函数，该函数会在对象中的元素被添加到数组前，被应用于每个元素，此外 `thisArg` 允许我们为该函数设置 `this`。



## 13. Map and Set（映射和集合）

::: tip

- `Object.keys(obj)`—— 返回一个包含该对象所有的键的数组。
- `Object.values(obj)`—— 返回一个包含该对象所有的值的数组。
- `Object.entries(obj)` —— 返回一个包含该对象所有 [key, value] 键值对的数组。

:::

### 13.1 **Map**

`Map` 是一个带键的数据项的集合，就像一个 `Object` 一样。 但是它们最大的差别是 `Map` 允许任何类型的键（key）。

它的方法和属性如下：

- `new Map()` —— 创建 map。
- `map.set(key, value)` —— 根据键存储值。
- `map.get(key)` —— 根据键来返回值，如果 `map` 中不存在对应的 `key`，则返回 `undefined`。
- `map.has(key)` —— 如果 `key` 存在则返回 `true`，否则返回 `false`。
- `map.delete(key)` —— 删除指定键的值。
- `map.clear()` —— 清空 map。
- `map.size` —— 返回当前元素个数。

#### 13.1.1 **Map 还可以使用对象作为键。**

**链式调用**：每一次 `map.set` 调用都会返回 map 本身，所以我们可以进行“链式”调用

~~~javascript
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
~~~

#### 13.1.2 **Map 迭代：**

如果要在 `map` 里使用循环，可以使用以下三个方法：

- `map.keys()` —— 遍历并返回所有的键（returns an iterable for keys），

- `map.values()` —— 遍历并返回所有的值（returns an iterable for values），

- `map.entries()` —— 遍历并返回所有的实体（returns an iterable for entries）`[key, value]`，`for..of` 在默认情况下使用的就是这个。

- `Object.entries`：从对象创建 Map

  如果我们想从一个已有的普通对象（plain object）来创建一个 `Map`

  ~~~javascript
  let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  
  alert( map.get('name') ); // John
  ~~~

- `Object.fromEntries`：从 Map 创建对象

  `Object.fromEntries` :给定一个具有 `[key, value]` 键值对的数组，它会根据给定数组创建一个对象：

  ~~~javascript
  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  // 现在 prices = { banana: 1, orange: 2, meat: 4 }
  
  alert(prices.orange); // 2
  ~~~

### 13.2 **Set**

`Set` 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。

它的主要方法如下：

- `new Set(iterable)` —— 创建一个 `set`，如果提供了一个 `iterable` 对象（通常是数组），将会从数组里面复制值到 `set` 中。
- `set.add(value)` —— 添加一个值，返回 set 本身
- `set.delete(value)` —— 删除值，如果 `value` 在这个方法调用的时候存在则返回 `true` ，否则返回 `false`。
- `set.has(value)` —— 如果 `value` 在 set 中，返回 `true`，否则返回 `false`。
- `set.clear()` —— 清空 set。
- `set.size` —— 返回元素个数。

#### 13.2.1 **Set 迭代（iteration）**:

我们可以使用 `for..of` 或 `forEach` 来遍历 Set：

```javascript
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// 与 forEach 相同：
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

- `set.keys()` —— 遍历并返回所有的值（returns an iterable object for values），
- `set.values()` —— 与 `set.keys()` 作用相同，这是为了兼容 `Map`，
- `set.entries()` —— 遍历并返回所有的实体（returns an iterable object for entries）`[value, value]`，它的存在也是为了兼容 `Map`。



## 14. 解构赋值

**解构赋值** 是一种特殊的语法，它使我们可以将数组或对象“拆包”至一系列变量中

### 14.1 **数组解构**

~~~javascript
// 我们有一个存放了名字和姓氏的数组
let arr = ["John", "Smith"]

// 解构赋值
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith
~~~

- **等号右侧可以是任何可迭代对象**

  …实际上，我们可以将其与任何可迭代对象一起使用，而不仅限于数组：

  ```javascript
  let [a, b, c] = "abc"; // ["a", "b", "c"]
  let [one, two, three] = new Set([1, 2, 3]);
  ```

  这行得通，因为在内部，解构赋值是通过迭代右侧的值来完成工作的。这是一种用于对在 `=` 右侧的值上调用 `for..of` 并进行赋值的操作的语法糖。

- **赋值给等号左侧的任何内容**

  我们可以在等号左侧使用任何“可以被赋值的”东西。

  例如，一个对象的属性：

  ```javascript
  let user = {};
  [user.name, user.surname] = "John Smith".split(' ');
  
  alert(user.name); // John
  alert(user.surname); // Smith
  ```

- **其余的 ‘…’**

  如果我们还想收集其余的数组项 —— 我们可以使用三个点 `"..."` 来再加一个参数以获取“其余”数组项：

  ```javascript
  let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
  
  // rest 是包含从第三项开始的其余数组项的数组
  alert(rest[0]); // Consul
  alert(rest[1]); // of the Roman Republic
  alert(rest.length); // 2
  ```

- **默认值**

  如果我们想要一个“默认”值给未赋值的变量，我们可以使用 `=` 来提供：

  ```javascript
  // 默认值
  let [name = "Guest", surname = "Anonymous"] = ["Julius"];
  
  alert(name);    // Julius（来自数组的值）
  alert(surname); // Anonymous（默认值被使用了）
  ```

### 14.2 **对象解构**

```javascript
let {var1, var2} = {var1:…, var2:…}
```

变量的顺序并不重要，下面这个代码也奏效：

```javascript
// 改变 let {...} 中元素的顺序
let {height, width, title} = { title: "Menu", height: 200, width: 100 }
```

如果我们想把一个属性赋值给另一个名字的变量，比如把 `options.width` 属性赋值给名为 `w` 的变量，那么我们可以使用冒号来设置变量名称：

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```

冒号表示“什么值：赋值给谁”。上面的例子中，属性 `width` 被赋值给了 `w`，属性 `height` 被赋值给了 `h`，属性 `title` 被赋值给了同名变量。

对于可能缺失的属性，我们可以使用 `"="` 设置默认值，如下所示：

```javascript
let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

就像数组或函数参数一样，默认值可以是任意表达式甚至可以是函数调用。它们只会在未提供对应的值时才会被计算/调用。

### 14.3 **剩余模式（pattern）"…"**

如果对象拥有的属性数量比我们提供的变量数量还多，该怎么办？我们可以只取其中的某一些属性，然后把“剩余的”赋值到其他地方吗？

我们可以使用剩余模式（pattern），就像我们对数组那样。一些较旧的浏览器不支持此功能（例如 IE，可以使用 Babel 对其进行 polyfill），但可以在现代浏览器中使用。

看起来就像这样：

```javascript
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = 名为 title 的属性
// rest = 存有剩余属性的对象
let {title, ...rest} = options;

// 现在 title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100
```



## 15. JSON 方法

JavaScript 提供了如下方法：

- `JSON.stringify` 将对象转换为 JSON。

  ~~~javascript
  let json = JSON.stringify(value[, replacer, space])
  ~~~

  `value`：要编码的值。

  `replacer`：要编码的属性数组或映射函数 `function(key, value)`。

  `space`：用于格式化的空格数量

  ~~~javascript
  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup 引用了 room
  };
  
  room.occupiedBy = meetup; // room 引用了 meetup
  
  alert( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}
  ~~~

- `JSON.parse` 将 JSON 转换回对象。

  ~~~javascript
  let value = JSON.parse(str, [reviver]);
  ~~~

  `str`：要解析的 JSON 字符串。

  `reviver`：可选的函数 function(key,value)，该函数将为每个 `(key, value)` 对调用，并可以对值进行转换。



## 16. Rest 参数与 Spread 语法

### 16.1 **Rest 参数 `...`**

在 JavaScript 中，无论函数是如何定义的，你都可以使用任意数量的参数调用函数。

```javascript
function sumAll(...args) { // 数组名为 args
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```

### 16.2 **Spread 语法**

Spread 语法只适用于可迭代对象。

**Spread 语法** 来帮助你了！它看起来和 rest 参数很像，也使用 `...`，但是二者的用途完全相反。

当在函数调用中使用 `...arr` 时，它会把可迭代对象 `arr` “展开”到参数列表中。

以 `Math.max` 为例：

```javascript
let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5（spread 语法把数组转换为参数列表）

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // 将对象 spread 到参数列表中
                          // 然后将结果返回到一个新对象
```

当我们在代码中看到 `"..."` 时，它要么是 rest 参数，要么就是 spread 语法。

有一个简单的方法可以区分它们：

- 若 `...` 出现在函数参数列表的最后，那么它就是 rest 参数，它会把参数列表中剩余的参数收集到一个数组中。
- 若 `...` 出现在函数调用或类似的表达式中，那它就是 spread 语法，它会把一个数组展开为列表。

使用场景：

- Rest 参数用于创建可接受任意数量参数的函数。
- Spread 语法用于将数组传递给通常需要含有许多参数的列表的函数。

它们俩的出现帮助我们轻松地在列表和参数数组之间来回转换。

“旧式”的 `arguments`（类数组且可迭代的对象）也依然能够帮助我们获取函数调用中的所有参数。



## 17. 函数对象

### 17.1 **属性 “name”**

函数对象包含一些便于使用的属性。

比如，一个函数的名字可以通过属性 “name” 来访问：

```javascript
function sayHi() {
  alert("Hi");
}

alert(sayHi.name); // sayHi
```

### 17.2 **属性 “length”**

还有另一个内建属性 “length”，它返回函数入参的个数，比如：

```javascript
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
```

可以看到，rest 参数不参与计数。

### 17.3 **自定义属性**

我们也可以添加我们自己的属性。

这里我们添加了 `counter` 属性，用来跟踪总的调用次数：

```javascript
function sayHi() {
  alert("Hi");

  // 计算调用次数
  sayHi.counter++;
}
sayHi.counter = 0; // 初始值

sayHi(); // Hi
sayHi(); // Hi

alert( `Called ${sayHi.counter} times` ); // Called 2 times
```



## 18. 装饰器模式和转发

### 18.1 **使用 “call” 设定上下文**

不适用于对象方法。

~~~javascript
func.call(context, arg1, arg2, ...)
~~~

它运行 `func`，提供的第一个参数作为 `this`，后面的作为参数（arguments）

~~~javascript
function sayHi() {
  alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// 使用 call 将不同的对象传递为 "this"
sayHi.call( user ); // John
sayHi.call( admin ); // Admin
~~~

### 18.2 **apply**

我们可以使用 `func.apply(this, arguments)` 代替 `func.call(this, ...arguments)`。

~~~javascript
func.apply(context, args)
~~~

它运行 `func` 设置 `this=context`，并使用类数组对象 `args` 作为参数列表（arguments）。

- `call` 和 `apply` 之间唯一的语法区别是，`call` 期望一个参数列表，而 `apply` 期望一个包含这些参数的类数组对象。

- `apply` 只接受 **类数组**。

### 18.3 函数绑定

函数提供了一个内建方法 `bind`，它可以绑定 `this`。

基本的语法是：

```javascript
// 稍后将会有更复杂的语法
let boundFunc = func.bind(context);
```

`func.bind(context)` 的结果是一个特殊的类似于函数的“外来对象（exotic object）”，它可以像函数一样被调用，并且透明地（transparently）将调用传递给 `func` 并设定 `this=context`。

我们不仅可以绑定 `this`，还可以绑定参数（arguments）。虽然很少这么做，但有时它可以派上用场。

`bind` 的完整语法如下：

```javascript
let bound = func.bind(context, [arg1], [arg2], ...);
```

```javascript
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10
```

对 `mul.bind(null, 2)` 的调用创建了一个新函数 `double`，它将调用传递到 `mul`，将 `null` 绑定为上下文，并将 `2` 绑定为第一个参数。并且，参数（arguments）均被“原样”传递。



## 19. 属性标志和属性描述符

### 19.1 **属性标志**：

对象属性（properties），除 **`value`** 外，还有三个特殊的特性（attributes），也就是所谓的“标志”：

- **`writable`** — 如果为 `true`，则值可以被修改，否则它是只可读的。
- **`enumerable`** — 如果为 `true`，则会被在循环中列出，否则不会被列出。
- **`configurable`** — 如果为 `true`，则此属性可以被删除，这些特性也可以被修改，否则不可以。

当我们用“常用的方式”创建一个属性时，它们都为 `true`。但我们也可以随时更改它们。

首先，让我们来看看如何获得这些标志。

### 19.2 getOwnPropertyDescriptor

方法允许查询有关属性的 **完整** 信息。

语法是：

```javascript
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```

- `obj`

  需要从中获取信息的对象。

- `propertyName`

  属性的名称。

返回值是一个所谓的“属性描述符”对象：它包含值和所有的标志。

例如：

```javascript
let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
```

### 19.3 defineProperty

修改标志

语法是：

```javascript
Object.defineProperty(obj, propertyName, descriptor)
```

- `obj`，`propertyName`

  要应用描述符的对象及其属性。

- `descriptor`

  要应用的属性描述符对象。

如果该属性存在，`defineProperty` 会更新其标志。否则，它会使用给定的值和标志创建属性；在这种情况下，如果没有提供标志，则会假定它是 `false`。

例如，这里创建了一个属性 `name`，该属性的所有标志都为 `false`：

```javascript
let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
```

### 19.4 **设定一个全局的密封对象**：

属性描述符在单个属性的级别上工作。

还有一些限制访问 **整个** 对象的方法：

- [Object.preventExtensions(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)

  禁止向对象添加新属性。

- [Object.seal(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

  禁止添加/删除属性。为所有现有的属性设置 `configurable: false`。

- [Object.freeze(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

  禁止添加/删除/更改属性。为所有现有的属性设置 `configurable: false, writable: false`。

- [Object.isExtensible(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)

  如果添加属性被禁止，则返回 `false`，否则返回 `true`。

- [Object.isSealed(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)

  如果添加/删除属性被禁止，并且所有现有的属性都具有 `configurable: false`则返回 `true`。

- [Object.isFrozen(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)

  如果添加/删除/更改属性被禁止，并且所有当前属性都是 `configurable: false, writable: false`，则返回 `true`。

### 19.5 属性的 getter 和 setter

**getter 和 setter**：

访问器属性由 “getter” 和 “setter” 方法表示。在对象字面量中，它们用 `get` 和 `set` 表示：

```javascript
let obj = {
  get propName() {
    // 当读取 obj.propName 时，getter 起作用
  },

  set propName(value) {
    // 当执行 obj.propName = value 操作时，setter 起作用
  }
};
```

当读取 `obj.propName` 时，getter 起作用，当 `obj.propName` 被赋值时，setter 起作用。

### 19.6 **访问器描述符**

访问器属性的描述符与数据属性的不同。

对于访问器属性，没有 `value` 和 `writable`，但是有 `get` 和 `set` 函数。

所以访问器描述符可能有：

- **`get`** —— 一个没有参数的函数，在读取属性时工作，
- **`set`** —— 带有一个参数的函数，当属性被设置时调用，
- **`enumerable`** —— 与数据属性的相同，
- **`configurable`** —— 与数据属性的相同。

例如，要使用 `defineProperty` 创建一个 `fullName` 访问器，我们可以使用 `get` 和 `set` 来传递描述符：

```javascript
let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname
```

请注意，一个属性要么是访问器（具有 `get/set` 方法），要么是数据属性（具有 `value`），但不能两者都是。

如果我们试图在同一个描述符中同时提供 `get` 和 `value`，则会出现错误：

```javascript
// Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
  get() {
    return 1
  },

  value: 2
});
```

## 20. 原型链

### 20.1 原型继承

例如，我们有一个 `user` 对象及其属性和方法，并希望将 `admin` 和 `guest` 作为基于 `user` 稍加修改的变体。我们想重用 `user` 中的内容，而不是复制/重新实现它的方法，而只是在其之上构建一个新的对象。

**原型继承（Prototypal inheritance）** 这个语言特性能够帮助我们实现这一需求。

在 JavaScript 中，对象有一个特殊的隐藏属性 `[[Prototype]]`（如规范中所命名的），它要么为 `null`，要么就是对另一个对象的引用。该对象被称为“原型”

属性 `[[Prototype]]` 是内部的而且是隐藏的，但是这儿有很多设置它的方式。

其中之一就是使用特殊的名字 `__proto__`，就像这样：

```javascript
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // 设置 rabbit.[[Prototype]] = animal
```

因此，如果 `animal` 有许多有用的属性和方法，那么它们将自动地变为在 `rabbit` 中可用。这种属性被称为“继承”。

如果我们在 `animal` 中有一个方法，它可以在 `rabbit` 中被调用：

```javascript
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk 方法是从原型中获得的
rabbit.walk(); // Animal walk
```

这里只有两个限制：

1. 引用不能形成闭环。如果我们试图在一个闭环中分配 `__proto__`，JavaScript 会抛出错误。
2. `__proto__` 的值可以是对象，也可以是 `null`。而其他的类型都会被忽略。

当然，这可能很显而易见，但是仍然要强调：只能有一个 `[[Prototype]]`。一个对象不能从其他两个对象获得继承。

**`__proto__` 是 `[[Prototype]]` 的因历史原因而留下来的 getter/setter**

初学者常犯一个普遍的错误，就是不知道 `__proto__` 和 `[[Prototype]]` 的区别。

请注意，`__proto__` 与内部的 `[[Prototype]]` **不一样**。`__proto__` 是 `[[Prototype]]` 的 getter/setter。`__proto__` 属性有点过时了。它的存在是出于历史的原因，现代编程语言建议我们应该使用函数`Object.getPrototypeOf/Object.setPrototypeOf` 来取代 `__proto__` 去 get/set 原型。稍后我们将介绍这些函数。

根据规范，`__proto__` 必须仅受浏览器环境的支持。但实际上，包括服务端在内的所有环境都支持它，因此我们使用它是非常安全的。

- 原型仅用于读取属性。

- 对于写入/删除操作可以直接在对象上进行。

访问器（accessor）属性是一个例外，因为分配（assignment）操作是由 setter 函数处理的。因此，写入此类属性实际上与调用函数相同。

**“this” 的值**：

在上面的例子中可能会出现一个有趣的问题：在 `set fullName(value)` 中 `this` 的值是什么？属性 `this.name` 和 `this.surname` 被写在哪里：在 `user` 还是 `admin`？

答案很简单：`this` 根本不受原型的影响。

**无论在哪里找到方法：在一个对象还是在原型中。在一个方法调用中，`this` 始终是点符号 `.` 前面的对象。**

因此，setter 调用 `admin.fullName=` 使用 `admin` 作为 `this`，而不是 `user`。

这是一件非常重要的事儿，因为我们可能有一个带有很多方法的大对象，并且还有从其继承的对象。当继承的对象运行继承的方法时，它们将仅修改自己的状态，而不会修改大对象的状态。

例如，这里的 `animal` 代表“方法存储”，`rabbit` 在使用其中的方法。

调用 `rabbit.sleep()` 会在 `rabbit` 对象上设置 `this.isSleeping`：

```javascript
// animal 有一些方法
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// 修改 rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined（原型中没有此属性）
```

`for..in` 循环也会迭代继承的属性。

例如：

```javascript
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys 只返回自己的 key
alert(Object.keys(rabbit)); // jumps

// for..in 会遍历自己以及继承的键
for(let prop in rabbit) alert(prop); // jumps，然后是 eats
```

如果这不是我们想要的，并且我们想排除继承的属性，那么这儿有一个内建方法`obj.hasOwnProperty(key)`：如果 `obj` 具有自己的（非继承的）名为 `key` 的属性，则返回 `true`。

### 20.2 F.prototype

我们还记得，可以使用诸如 `new F()` 这样的构造函数来创建一个新对象。

如果 `F.prototype` 是一个对象，那么 `new` 操作符会使用它为新对象设置 `[[Prototype]]`。

下面是一个例子：

```javascript
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
```

设置 `Rabbit.prototype = animal` 的字面意思是：“当创建了一个 `new Rabbit` 时，把它的 `[[Prototype]]` 赋值为 `animal`”。

**`F.prototype` 仅用在 `new F` 时**

`F.prototype` 属性仅在 `new F` 被调用时使用，它为新对象的 `[[Prototype]]` 赋值。

如果在创建之后，`F.prototype` 属性有了变化（`F.prototype = <another object>`），那么通过 `new F` 创建的新对象也将随之拥有新的对象作为 `[[Prototype]]`，但已经存在的对象将保持旧有的值。

**默认的 F.prototype，构造器属性**

每个函数都有 `"prototype"` 属性，即使我们没有提供它。

默认的 `"prototype"` 是一个只有属性 `constructor` 的对象，属性 `constructor` 指向函数自身。

**……JavaScript 自身并不能确保正确的 `"constructor"` 函数值。**

是的，它存在于函数的默认 `"prototype"` 中，但仅此而已。之后会发生什么 —— 完全取决于我们。

特别是，如果我们将整个默认 prototype 替换掉，那么其中就不会有 `"constructor"` 了。

例如：

```javascript
function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false
```

因此，为了确保正确的 `"constructor"`，我们可以选择添加/删除属性到默认 `"prototype"`，而不是将其整个覆盖：

```javascript
function Rabbit() {}

// 不要将 Rabbit.prototype 整个覆盖
// 可以向其中添加内容
Rabbit.prototype.jumps = true
// 默认的 Rabbit.prototype.constructor 被保留了下来
```

或者，也可以手动重新创建 `constructor` 属性：

```javascript
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};

// 这样的 constructor 也是正确的，因为我们手动添加了它
```

### 12.3 原型方法，没有 __proto__ 的对象

`__proto__` 被认为是过时且不推荐使用的（deprecated），这里的不推荐使用是指 JavaScript 规范中规定，**proto** 必须仅在浏览器环境下才能得到支持。

现代的方法有：

- [Object.create(proto, descriptors\])](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/create) —— 利用给定的 `proto` 作为 `[[Prototype]]` 和可选的属性描述来创建一个空对象。
- [Object.getPrototypeOf(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) —— 返回对象 `obj` 的 `[[Prototype]]`。
- [Object.setPrototypeOf(obj, proto)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) —— 将对象 `obj` 的 `[[Prototype]]` 设置为 `proto`。

应该使用这些方法来代替 `__proto__`。

其他方法：

- [Object.keys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) / [Object.values(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/values) / [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) —— 返回一个可枚举的由自身的字符串属性名/值/键值对组成的数组。
- [Object.getOwnPropertySymbols(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) —— 返回一个由自身所有的 symbol 类型的键组成的数组。
- [Object.getOwnPropertyNames(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) —— 返回一个由自身所有的字符串键组成的数组。
- [Reflect.ownKeys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) —— 返回一个由自身所有键组成的数组。
- [obj.hasOwnProperty(key)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)：如果 `obj` 拥有名为 `key` 的自身的属性（非继承而来的），则返回 `true`。

### 20.4 **总结**

在本章中，我们简要介绍了为通过构造函数创建的对象设置 `[[Prototype]]` 的方法。稍后我们将看到更多依赖于此的高级编程模式。

一切都很简单，只需要记住几条重点就可以清晰地掌握了：

- `F.prototype` 属性（不要把它与 `[[Prototype]]` 弄混了）在 `new F` 被调用时为新对象的 `[[Prototype]]` 赋值。
- `F.prototype` 的值要么是一个对象，要么就是 `null`：其他值都不起作用。
- `"prototype"` 属性仅在设置了一个构造函数（constructor function），并通过 `new` 调用时，才具有这种特殊的影响。

## 21. Promise

### 21.1 Promise

[Promise - chen·yan - 博客园 (cnblogs.com)](https://www.cnblogs.com/constantince/p/15423644.html)

Promise 对象的构造器（constructor）语法如下：

```javascript
let promise = new Promise(function(resolve, reject) {
  // executor（生产者代码，“歌手”）
});
```

传递给 `new Promise` 的函数被称为 **executor**。当 `new Promise` 被创建，executor 会自动运行。它包含最终应产出结果的生产者代码。按照上面的类比：executor 就是“歌手”。

它的参数 `resolve` 和 `reject` 是由 JavaScript 自身提供的回调。我们的代码仅在 executor 的内部。

当 executor 获得了结果，无论是早还是晚都没关系，它应该调用以下回调之一：

- `resolve(value)` —— 如果任务成功完成并带有结果 `value`。
- `reject(error)` —— 如果出现了 error，`error` 即为 error 对象。

所以总结一下就是：executor 会自动运行并尝试执行一项工作。尝试结束后，如果成功则调用 `resolve`，如果出现 error 则调用 `reject`。

由 `new Promise` 构造器返回的 `promise` 对象具有以下内部属性：

- `state` —— 最初是 `"pending"`，然后在 `resolve` 被调用时变为 `"fulfilled"`，或者在 `reject` 被调用时变为 `"rejected"`。
- `result` —— 最初是 `undefined`，然后在 `resolve(value)` 被调用时变为 `value`，或者在 `reject(error)` 被调用时变为 `error`。

**`state` 和 `result` 都是内部的**

Promise 对象的 `state` 和 `result` 属性都是内部的。我们无法直接访问它们。但我们可以对它们使用 `.then`/`.catch`/`.finally` 方法。我们在下面对这些方法进行了描述。

### 21.2 then，catch，finally

如果 `.then`（或 `catch/finally` 都可以）处理程序（handler）返回一个 promise，那么链的其余部分将会等待，直到它状态变为 settled。当它被 settled 后，其 result（或 error）将被进一步传递下去。

Promise 的处理程序（handlers）`.then`、`.catch` 和 `.finally` 都是异步的。

#### 21.2.1 **then**

最重要最基础的一个就是 `.then`。

语法如下：

```javascript
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
```

`.then` 的第一个参数是一个函数，该函数将在 promise resolved 后运行并接收结果。

`.then` 的第二个参数也是一个函数，该函数将在 promise rejected 后运行并接收 error。

#### 21.2.2 **catch**

如果我们只对 error 感兴趣，那么我们可以使用 `null` 作为第一个参数：`.then(null, errorHandlingFunction)`。或者我们也可以使用 `.catch(errorHandlingFunction)`，其实是一样的：

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) 与 promise.then(null, f) 一样
promise.catch(alert); // 1 秒后显示 "Error: Whoops!"
```

`.catch(f)` 调用是 `.then(null, f)` 的完全的模拟，它只是一个简写形式。

#### 21.2.3 **finally**

就像常规 `try {...} catch {...}` 中的 `finally` 子句一样，promise 中也有 `finally`。

`.finally(f)` 调用与 `.then(f, f)` 类似，在某种意义上，`f` 总是在 promise 被 settled 时运行：即 promise 被 resolve 或 reject。

`finally` 是执行清理（cleanup）的很好的处理程序（handler），例如无论结果如何，都停止使用不再需要的加载指示符（indicator）。

像这样：

```javascript
new Promise((resolve, reject) => {
  /* 做一些需要时间的事儿，然后调用 resolve/reject */
})
  // 在 promise 为 settled 时运行，无论成功与否
  .finally(() => stop loading indicator)
  // 所以，加载指示器（loading indicator）始终会在我们处理结果/错误之前停止
  .then(result => show result, err => show error)
```

也就是说，`finally(f)` 其实并不是 `then(f,f)` 的别名。它们之间有一些细微的区别：

1. `finally` 处理程序（handler）没有参数。在 `finally` 中，我们不知道 promise 是否成功。没关系，因为我们的任务通常是执行“常规”的定稿程序（finalizing procedures）。
2. `finally` 处理程序将结果和 error 传递给下一个处理程序。

### 21.3 Promise API

####  21.3.1 **Promise.all**

假设我们希望并行执行多个 promise，并等待所有 promise 都准备就绪。

例如，并行下载几个 URL，并等到所有内容都下载完毕后再对它们进行处理。

这就是 `Promise.all` 的用途。

语法：

```javascript
let promise = Promise.all(iterable);
```

`Promise.all` 接受一个可迭代对象（通常是一个数组项为 promise 的数组），并返回一个新的 promise。

当所有给定的 promise 都 resolve 时，新的 promise 才会 resolve，并且其结果数组将成为新 promise 的结果。

如果promise 的数组其中一个 promise 被 reject，`Promise.all` 就会立即被 reject，完全忽略列表中其他的 promise。它们的结果也被忽略。

#### 21.3.2 **Promise.allSettled**

`Promise.allSettled` 等待所有的 promise 都被 settle，无论结果如何。结果数组具有：

- `{status:"fulfilled", value:result}` 对于成功的响应，
- `{status:"rejected", reason:error}` 对于 error。

#### 21.3.3 **Promise.race**

与 `Promise.all` 类似，但只等待第一个 settled 的 promise 并获取其结果（或 error）。

例如，这里的结果将是 `1`：

```javascript
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
```

这里第一个 promise 最快，所以它变成了结果。第一个 settled 的 promise “赢得了比赛”之后，所有进一步的 result/error 都会被忽略。

#### 21.3.4 **Promise.any**

与 `Promise.race` 类似，区别在于 `Promise.any` 只等待第一个 fulfilled 的 promise，并将这个 fulfilled 的 promise 返回。如果给出的 promise 都 rejected，那么则返回 rejected 的 promise 和 [`AggregateError`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) 错误类型的 error 实例。



#### 21.3.5 **总结**：

`Promise` 类有 6 种静态方法：

1. `Promise.all(promises)` —— 等待所有 promise 都 resolve 时，返回存放它们结果的数组。如果给定的任意一个 promise 为 reject，那么它就会变成 `Promise.all` 的 error，所有其他 promise 的结果都会被忽略。
2. `Promise.allSettled(promises)`（ES2020 新增方法）—— 等待所有 promise 都 settle 时，并以包含以下内容的对象数组的形式返回它们的结果：
   - `status`: `"fulfilled"` 或 `"rejected"`
   - `value`（如果 fulfilled）或 `reason`（如果 rejected）。
3. `Promise.race(promises)` —— 等待第一个 settle 的 promise，并将其 result/error 作为结果返回。
4. `Promise.any(promises)`（ES2021 新增方法）—— 等待第一个 fulfilled 的 promise，并将其结果作为结果返回。如果所有 promise 都 rejected，`Promise.any` 则会抛出 [`AggregateError`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) 错误类型的 error 实例。
5. `Promise.resolve(value)` —— 使用给定 value 创建一个 resolved 的 promise。
6. `Promise.reject(error)` —— 使用给定 error 创建一个 rejected 的 promise。

以上所有方法，`Promise.all` 可能是在实战中使用最多的。

### 21.4 Async/await

Async/await 是以更舒适的方式使用 promise 的一种特殊语法，同时它也非常易于理解和使用。

#### 21.4.1 **Async function**:

让我们以 `async` 这个关键字开始。它可以被放置在一个函数前面，如下所示：

```javascript
async function f() {
  return 1;
}
```

在函数前面的 “async” 这个单词表达了一个简单的事情：即这个函数总是返回一个 promise。其他值将自动被包装在一个 resolved 的 promise 中。

#### 21.4.2 **Await**：

语法如下：

```javascript
// 只在 async 函数内工作
let value = await promise;
```

关键字 `await` 让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果。

`await` 实际上会暂停函数的执行，直到 promise 状态变为 settled，然后以 promise 的结果继续执行。这个行为不会耗费任何 CPU 资源，因为 JavaScript 引擎可以同时处理其他任务：执行其他脚本，处理事件等。

**不能在普通函数中使用** `await`

**在现代浏览器中，当我们处于一个 module 中时，那么在顶层使用 `await` 也是被允许的。**

## 22. Generator，高级 iteration

**Generator 函数**：

而 Generator 可以按需一个接一个地返回（“yield”）多个值。它们可与 [iterable](https://zh.javascript.info/iterable) 完美配合使用，从而可以轻松地创建数据流。

要创建一个 generator，我们需要一个特殊的语法结构：`function*`，即所谓的 “generator function”。

它看起来像这样：

```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
```

Generator 函数与常规函数的行为不同。在此类函数被调用时，它不会运行其代码。而是返回一个被称为 “generator object” 的特殊对象，来管理执行流程。

一个 generator 的主要方法就是 `next()`

`next()` 的结果始终是一个具有两个属性的对象：

- `value`: 产出的（yielded）的值。
- `done`: 如果 generator 函数已执行完成则为 `true`，否则为 `false`。

generator 是 `可迭代`的

我们可以使用 `for..of` 循环遍历它所有的值：

```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for(let value of generator) {
  alert(value); // 1，然后是 2
}
```

---



## 23. 模块

模块可以相互加载，并可以使用特殊的指令 `export` 和 `import` 来交换功能，从另一个模块调用一个模块的函数：

- `export` 关键字标记了可以从当前模块外部访问的变量和函数。
- `import` 关键字允许从其他模块导入功能。

由于模块支持特殊的关键字和功能，因此我们必须通过使用 `<script type="module">` 特性（attribute）来告诉浏览器，此脚本应该被当作模块（module）来对待。

**模块只通过 HTTP(s) 工作，而非本地**

如果你尝试通过 `file://` 协议在本地打开一个网页，你会发现 `import/export` 指令不起作用。你可以使用本地 Web 服务器，例如 [static-server](https://www.npmjs.com/package/static-server#getting-started)，或者使用编辑器的“实时服务器”功能，例如 VS Code 的 [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 来测试模块。

如果同一个模块被导入到多个其他位置，那么它的代码只会执行一次，即在第一次被导入时。然后将其导出（export）的内容提供给进一步的导入（importer）。

如果这个模块被导入到多个文件中，模块仅在第一次被导入时被解析，并创建 `admin` 对象，然后将其传入到所有的导入。

所有的导入都只获得了一个唯一的 `admin` 对象：

```javascript
// 📁 1.js
import { admin } from './admin.js';
admin.name = "Pete";

// 📁 2.js
import { admin } from './admin.js';
alert(admin.name); // Pete

// 1.js 和 2.js 引用的是同一个 admin 对象
// 在 1.js 中对对象做的更改，在 2.js 中也是可见的
```

正如你所看到的，当在 `1.js` 中修改了导入的 `admin` 中的 `name` 属性时，我们在 `2.js` 中可以看到新的 `admin.name`。

这正是因为该模块只执行了一次。生成导出，然后这些导出在导入之间共享，因此如果更改了 `admin` 对象，在其他导入中也会看到。

`import.meta` 对象包含关于当前模块的信息。

它的内容取决于其所在的环境。在浏览器环境中，它包含当前脚本的 URL，或者如果它是在 HTML 中的话，则包含当前页面的 URL。

```markup
<script type="module">
  alert(import.meta.url); // 脚本的 URL（对于内联脚本来说，则是当前 HTML 页面的 URL）
</script>
```

在一个模块中，顶级 `this` 是 undefined。

将其与非模块脚本进行比较会发现，非模块脚本的顶级 `this` 是全局对象：

```markup
<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>
```

 `async`对于模块脚本，它也适用于内联脚本。

例如，下面的内联脚本具有 `async` 特性，因此它不会等待任何东西。

```javascript
<!-- 所有依赖都获取完成（analytics.js）然后脚本开始运行 -->
<!-- 不会等待 HTML 文档或者其他 <script> 标签 -->
<script async type="module">
  import {counter} from './analytics.js';

  counter.count();
</script>
```



### 23.1 导出和导入

导出（export）和导入（import）指令有几种语法变体。

请记住，`import` 命名的导出时需要花括号，而 `import` 默认的导出时不需要花括号。

你可以阅读并回忆它们的含义来进行自查：

- 在声明一个 class/function/… 之前：
  - `export [default] class/function/variable ...`
- 独立的导出：
  - `export {x [as y], ...}`.
- 重新导出：
  - `export {x [as y], ...} from "module"`
  - `export * from "module"`（不会重新导出默认的导出）。
  - `export {default [as y]} from "module"`（重新导出默认的导出）。

导入：

- 导入命名的导出：
  - `import {x [as y], ...} from "module"`
- 导入默认的导出：
  - `import x from "module"`
  - `import {default as x} from "module"`
- 导入所有：
  - `import * as obj from "module"`
- 导入模块（其代码，并运行），但不要将其任何导出赋值给变量：
  - `import "module"`

### 23.2 动态导入

**import() 表达式**：

`import(module)` 表达式加载模块并返回一个 promise，该 promise resolve 为一个包含其所有导出的模块对象。我们可以在代码中的任意位置调用这个表达式。

我们可以在代码中的任意位置动态地使用它。例如：

```javascript
let modulePath = prompt("Which module to load?");

import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error, e.g. if no such module>)
```

或者，如果在异步函数中，我们可以使用 `let module = await import(modulePath)`。

## 24. 杂项

### 24.1 **Proxy**

代理提供了一种独特的方法，可以在最底层更改或调整现有对象的行为。但是，它并不完美。有局限性。

代理和原始对象是不同的对象。

语法：

```javascript
let proxy = new Proxy(target, handler)
```

- `target` —— 是要包装的对象，可以是任何东西，包括函数。

- `handler` —— 代理配置：带有“捕捉器”（“traps”，即拦截操作的方法）的对象。比如 `get` 捕捉器用于读取 `target` 的属性，`set` 捕捉器用于写入 `target` 的属性，等等。

  | 内部方法                | Handler 方法               | 何时触发                                                     |
  | :---------------------- | :------------------------- | :----------------------------------------------------------- |
  | `[[Get]]`               | `get`                      | 读取属性                                                     |
  | `[[Set]]`               | `set`                      | 写入属性                                                     |
  | `[[HasProperty]]`       | `has`                      | `in` 操作符                                                  |
  | `[[Delete]]`            | `deleteProperty`           | `delete` 操作符                                              |
  | `[[Call]]`              | `apply`                    | 函数调用                                                     |
  | `[[Construct]]`         | `construct`                | `new` 操作符                                                 |
  | `[[GetPrototypeOf]]`    | `getPrototypeOf`           | [Object.getPrototypeOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) |
  | `[[SetPrototypeOf]]`    | `setPrototypeOf`           | [Object.setPrototypeOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) |
  | `[[IsExtensible]]`      | `isExtensible`             | [Object.isExtensible](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) |
  | `[[PreventExtensions]]` | `preventExtensions`        | [Object.preventExtensions](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) |
  | `[[DefineOwnProperty]]` | `defineProperty`           | [Object.defineProperty](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), [Object.defineProperties](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) |
  | `[[GetOwnProperty]]`    | `getOwnPropertyDescriptor` | [Object.getOwnPropertyDescriptor](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), `for..in`, `Object.keys/values/entries` |
  | `[[OwnPropertyKeys]]`   | `ownKeys`                  | [Object.getOwnPropertyNames](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames), [Object.getOwnPropertySymbols](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols), `for..in`, `Object.keys/values/entries` |

  `get(target, property, receiver)` 方法。

  读取属性时触发该方法，参数如下：

  - `target` —— 是目标对象，该对象被作为第一个参数传递给 `new Proxy`，

  - `property` —— 目标属性名，

  - `receiver` —— 如果目标属性是一个 getter 访问器属性，则 `receiver` 就是本次读取属性所在的 `this` 对象。通常，这就是 `proxy` 对象本身（或者，如果我们从 proxy 继承，则是从该 proxy 继承的对象）。现在我们不需要此参数，因此稍后我们将对其进行详细介绍。

    

  `set(target, property, value, receiver)`：

  - `target` —— 是目标对象，该对象被作为第一个参数传递给 `new Proxy`，

  - `property` —— 目标属性名称，

  - `value` —— 目标属性的值，

  - `receiver` —— 与 `get` 捕捉器类似，仅与 setter 访问器属性相关。

    

  `has(target, property)`

  - `target` —— 是目标对象，被作为第一个参数传递给 `new Proxy`，

  - `property` —— 属性名称。

    

  `apply(target, thisArg, args)` 捕捉器能使代理以函数的方式被调用：

  - `target` 是目标对象（在 JavaScript 中，函数就是一个对象），
  - `thisArg` 是 `this` 的值。
  - `args` 是参数列表。

  ### 24.2 **Reflect**

  `Reflect` 是一个内建对象，可简化 `Proxy` 的创建。

  前面所讲过的内部方法，例如 `[[Get]]` 和 `[[Set]]` 等，都只是规范性的，不能直接调用。

  `Reflect` 对象使调用这些内部方法成为了可能。它的方法是内部方法的最小包装。

  以下是执行相同操作和 `Reflect` 调用的示例：

  | 操作                | `Reflect` 调用                      | 内部方法        |
  | :------------------ | :---------------------------------- | :-------------- |
  | `obj[prop]`         | `Reflect.get(obj, prop)`            | `[[Get]]`       |
  | `obj[prop] = value` | `Reflect.set(obj, prop, value)`     | `[[Set]]`       |
  | `delete obj[prop]`  | `Reflect.deleteProperty(obj, prop)` | `[[Delete]]`    |
  | `new F(value)`      | `Reflect.construct(F, value)`       | `[[Construct]]` |
  | …                   | …                                   | …               |
  
  例如：
  
  ```javascript
  let user = {};
  
  Reflect.set(user, 'name', 'John');
  
  alert(user.name); // John
  ```
  
  尤其是，`Reflect` 允许我们将操作符（`new`，`delete`，……）作为函数（`Reflect.construct`，`Reflect.deleteProperty`，……）执行调用。这是一个有趣的功能，但是这里还有一点很重要。
  
  **对于每个可被 `Proxy` 捕获的内部方法，在 `Reflect` 中都有一个对应的方法，其名称和参数与 `Proxy` 捕捉器相同。**

  所以，我们可以使用 `Reflect` 来将操作转发给原始对象。

  在下面这个示例中，捕捉器 `get` 和 `set` 均透明地（好像它们都不存在一样）将读取/写入操作转发到对象，并显示一条消息：

  

  一个 **可撤销** 的代理是可以被禁用的代理。

  假设我们有一个资源，并且想随时关闭对该资源的访问。

  我们可以做的是将它包装成可一个撤销的代理，没有任何捕捉器。这样的代理会将操作转发给对象，并且我们可以随时将其禁用。

  语法为：

  ```javascript
  let {proxy, revoke} = Proxy.revocable(target, handler)
  ```

  对 `revoke()` 的调用会从代理中删除对目标对象的所有内部引用，因此它们之间再无连接。

### 24.3 Eval：执行代码字符串

语法如下：

```javascript
let result = eval(code);
```

调用 `eval(code)` 会运行代码字符串，并返回最后一条语句的结果。

- 在现代 JavaScript 编程中，很少使用它，通常也不需要使用它。
- 可以访问外部局部变量。这被认为是一个不好的编程习惯。
- 要在全局作用域中 `eval` 代码，可以使用 `window.eval(code)` 进行替代。
- 此外，如果你的代码需要从外部作用域获取数据，请使用 `new Function`，并将数据作为参数传递给函数。

### 24.4 Reference type 解读

仔细看的话，我们可能注意到 `obj.method()` 语句中的两个操作：

1. 首先，点 `'.'` 取了属性 `obj.method` 的值。
2. 接着 `()` 执行了它。

那么，`this` 的信息是怎么从第一部分传递到第二部分的呢？

如果我们将这些操作放在不同的行，`this` 必定是会丢失的：

Reference Type 是 ECMA 中的一个“规范类型”。我们不能直接使用它，但它被用在 JavaScript 语言内部。

Reference Type 的值是一个三个值的组合 `(base, name, strict)`，其中：

- `base` 是对象。
- `name` 是属性名。
- `strict` 在 `use strict` 模式下为 true。

---



## 25. 浏览器：文档，事件，接口

### 25.1 Document

#### 25.1.1 DOM 树

HTML/XML 文档在浏览器内均被表示为 DOM 树。

- 标签（tag）成为元素节点，并形成文档结构。
- 文本（text）成为文本节点。
- ……等，HTML 中的所有东西在 DOM 中都有它的位置，甚至对注释也是如此。

我们可以使用开发者工具来检查（inspect）DOM 并手动修改它。

#### 25.1.2 遍历 DOM

```
<html>` = `document.documentElement
```

最顶层的 document 节点是 `document.documentElement`。这是对应 `<html>` 标签的 DOM 节点。

```
<body>` = `document.body
```

另一个被广泛使用的 DOM 节点是 `<body>` 元素 — `document.body`。

```
<head>` = `document.head
```

`<head>` 标签可以通过 `document.head` 访问。

DOM集合：`childNodes` 看起来就像一个数组。但实际上它并不是一个数组，而是一个 **集合** — 一个类数组的可迭代对象。

给定一个 DOM 节点，我们可以使用导航（navigation）属性访问其直接的邻居。

这些属性主要分为两组：

- 对于所有节点：`parentNode`，`childNodes`，`firstChild`，`lastChild`，`previousSibling`，`nextSibling`。
- 仅对于元素节点：`parentElement`，`children`，`firstElementChild`，`lastElementChild`，`previousElementSibling`，`nextElementSibling`。

#### 25.1.3 搜索：getElement*，querySelector*

有 6 种主要的方法，可以在 DOM 中搜索元素节点：

| 方法名                   | 搜索方式     | 可以在元素上调用？ | 实时的？ |
| ------------------------ | ------------ | ------------------ | -------- |
| `querySelector`          | CSS-selector | ✔                  | -        |
| `querySelectorAll`       | CSS-selector | ✔                  | -        |
| `getElementById`         | `id`         | -                  | -        |
| `getElementsByName`      | `name`       | -                  | ✔        |
| `getElementsByTagName`   | tag or `'*'` | ✔                  | ✔        |
| `getElementsByClassName` | class        | ✔                  | ✔        |

目前为止，最常用的是 `querySelector` 和 `querySelectorAll`，但是 `getElement(s)By*` 可能会偶尔有用，或者可以在旧脚本中找到。

此外：

- `elem.matches(css)` 用于检查 `elem` 与给定的 CSS 选择器是否匹配。
- `elem.closest(css)` 用于查找与给定 CSS 选择器相匹配的最近的祖先。`elem` 本身也会被检查。

让我们在这里提一下另一种用来检查子级与父级之间关系的方法，因为它有时很有用：

- 如果 `elemB` 在 `elemA` 内（`elemA` 的后代）或者 `elemA==elemB`，`elemA.contains(elemB)` 将返回 true。

#### 25.1.4 节点属性：type，tag 和 content

- `nodeType`

  我们可以使用它来查看节点是文本节点还是元素节点。它具有一个数值型值（numeric value）：`1` 表示元素，`3` 表示文本节点，其他一些则代表其他节点类型。只读。

- `nodeName/tagName`

  用于元素名，标签名（除了 XML 模式，都要大写）。对于非元素节点，`nodeName` 描述了它是什么。只读。

  - `tagName` 属性仅适用于 `Element` 节点。
  - nodeName是为任意Node定义的：
    - 对于元素，它的意义与 `tagName` 相同。
    - 对于其他节点类型（text，comment 等），它拥有一个对应节点类型的字符串。

- `innerHTML`

  元素的 HTML 内容。可以被修改。仅对元素节点有效。

- `outerHTML`

  元素的完整 HTML。对 `elem.outerHTML` 的写入操作不会触及 `elem` 本身。而是在外部上下文中将其替换为新的 HTML。

  在 `div.outerHTML=...` 中发生的事情是：

  - `div` 被从文档（document）中移除。
  - 另一个 HTML 片段 `<p>A new element</p>` 被插入到其位置上。
  - `div` 仍拥有其旧的值。新的 HTML 没有被赋值给任何变量。

- `nodeValue/data`

  非元素节点（文本、注释）的内容。两者几乎一样，我们通常使用 `data`。可以被修改。

- `textContent`

  元素内的文本：HTML 减去所有 `<tags>`。写入文本会将文本放入元素内，所有特殊字符和标签均被视为文本。可以安全地插入用户生成的文本，并防止不必要的 HTML 插入。

- `hidden`

  当被设置为 `true` 时，执行与 CSS `display:none` 相同的事。

DOM 节点还具有其他属性，具体有哪些属性则取决于它们的类。例如，`<input>` 元素（`HTMLInputElement`）支持 `value`，`type`，而 `<a>` 元素（`HTMLAnchorElement`）则支持 `href` 等。大多数标准 HTML 特性（attribute）都具有相应的 DOM 属性。

#### 25.1.5 特性和属性（Attributes and properties）

- 特性（attribute）— 写在 HTML 中的内容。

  HTML 特性有以下几个特征：

  - 它们的名字是大小写不敏感的（`id` 与 `ID` 相同）。
  - 它们的值总是字符串类型的。

- 属性（property）— DOM 对象中的内容。

  DOM 属性和方法的行为就像常规的 Javascript 对象一样：

  - 它们可以有很多值。

  - 它们是大小写敏感的（要写成 `elem.nodeType`，而不是 `elem.NoDeTyPe`）。

- 改变特性值会更新属性。

- 但是属性的更改不会影响特性。

  例如：

  ~~~javascript
  <input>
  
  <script>
    let input = document.querySelector('input');
  
    // 特性 => 属性
    input.setAttribute('value', 'text');
    alert(input.value); // text
  
    // 这个操作无效，属性 => 特性
    input.value = 'newValue';
    alert(input.getAttribute('value')); // text（没有被更新！）
  </script>
  ~~~


简略的对比：

|      | 属性                                   | 特性                         |
| :--- | :------------------------------------- | :--------------------------- |
| 类型 | 任何值，标准的属性具有规范中描述的类型 | 字符串                       |
| 名字 | 名字（name）是大小写敏感的             | 名字（name）是大小写不敏感的 |

操作特性的方法：

- `elem.hasAttribute(name)` — 检查是否存在这个特性。
- `elem.getAttribute(name)` — 获取这个特性值。
- `elem.setAttribute(name, value)` — 设置这个特性值。
- `elem.removeAttribute(name)` — 移除这个特性。
- `elem.attributes` — 所有特性的集合。

在大多数情况下，最好使用 DOM 属性。仅当 DOM 属性无法满足开发需求，并且我们真的需要特性时，才使用特性，例如：

- 我们需要一个非标准的特性。但是如果它以 `data-` 开头，那么我们应该使用 `dataset`。

  **所有以 “data-” 开头的特性均被保留供程序员使用。它们可在 `dataset` 属性中使用。**

  例如，如果一个 `elem` 有一个名为 `"data-about"` 的特性，那么可以通过 `elem.dataset.about` 取到它。

  像 `data-order-state` 这样的多词特性可以以驼峰式进行调用：`dataset.orderState`。

- 对应的 DOM 属性可能不同，例如 `href` 属性一直是一个 **完整的** URL

  如果我们需要 `href` 特性的值，或者其他与 HTML 中所写的完全相同的特性，则可以使用 `getAttribute`。

#### 25.1.6 修改文档（document）

- 创建新节点的方法：

  - `document.createElement(tag)` — 用给定的标签创建一个元素节点，
  - `document.createTextNode(value)` — 创建一个文本节点（很少使用），
  - `elem.cloneNode(deep)` — 克隆元素，如果 `deep==true` 则与其后代一起克隆。

- 插入和移除节点的方法：

  - `node.append(...nodes or strings)` — 在 `node` 末尾插入，
  - `node.prepend(...nodes or strings)` — 在 `node` 开头插入，
  - `node.before(...nodes or strings)` — 在 `node` 之前插入，
  - `node.after(...nodes or strings)` — 在 `node` 之后插入，
  - `node.replaceWith(...nodes or strings)` — 替换 `node`。
  - `node.remove()` — 移除 `node`。

  文本字符串被“作为文本”插入。

- 这里还有“旧式”的方法：

  - `parent.appendChild(node)`
  - `parent.insertBefore(node, nextSibling)`
  - `parent.removeChild(node)`
  - `parent.replaceChild(newElem, node)`

  这些方法都返回 `node`。

- 在 `html` 中给定一些 HTML，`elem.insertAdjacentHTML(where, html)` 会根据 `where` 的值来插入它：

  - `"beforebegin"` — 将 `html` 插入到 `elem` 前面，
  - `"afterbegin"` — 将 `html` 插入到 `elem` 的开头，
  - `"beforeend"` — 将 `html` 插入到 `elem` 的末尾，
  - `"afterend"` — 将 `html` 插入到 `elem` 后面。

另外，还有类似的方法，`elem.insertAdjacentText` 和 `elem.insertAdjacentElement`，它们会插入文本字符串和元素，但很少使用。

- 要在页面加载完成之前将 HTML 附加到页面：

  - `document.write(html)`

  页面加载完成后，这样的调用将会擦除文档。多见于旧脚本。

#### 25.1.7 样式和类

要管理 class，有两个 DOM 属性：

- `className` — 字符串值，可以很好地管理整个类的集合。
- `classList` — 具有 `add/remove/toggle/contains` 方法的对象，可以很好地支持单个类。
  - `elem.classList.add/remove(class)` — 添加/移除类。
  - `elem.classList.toggle(class)` — 如果类不存在就添加类，存在就移除它。
  - `elem.classList.contains(class)` — 检查给定类，返回 `true/false`。

要改变样式：

- `style` 属性是具有驼峰（camelCased）样式的对象。对其进行读取和修改与修改 `"style"` 特性（attribute）中的各个属性具有相同的效果。要了解如何应用 `important` 和其他特殊内容 — 在 [MDN](https://developer.mozilla.org/zh/docs/Web/API/CSSStyleDeclaration) 中有一个方法列表。
- `style.cssText` 属性对应于整个 `"style"` 特性（attribute），即完整的样式字符串。

要读取已解析的（resolved）样式（对于所有类，在应用所有 CSS 并计算最终值之后）：

- `getComputedStyle(elem, [pseudo])` 返回与 `style` 对象类似的，且包含了所有类的对象。只读。

  **`getComputedStyle` 需要完整的属性名**

  我们应该总是使用我们想要的确切的属性，例如 `paddingLeft`、`marginTop` 或 `borderTopWidth`。否则，就不能保证正确的结果。

  语法如下：

  ```javascript
  getComputedStyle(element, [pseudo])
  ```

  - element

    需要被读取样式值的元素。

  - pseudo

    伪元素（如果需要），例如 `::before`。空字符串或无参数则意味着元素本身。

#### 25.1.8 元素大小和滚动

元素具有以下几何属性：

- `offsetParent` — 是最接近的 CSS 定位的祖先，或者是 `td`，`th`，`table`，`body`。
- `offsetLeft/offsetTop` — 是相对于 `offsetParent` 的左上角边缘的坐标。
- `offsetWidth/offsetHeight` —自身完整大小，边框（border）尺寸计算在内。
- `clientLeft/clientTop` — 边框的宽度， `clientLeft` 也包括滚动条的宽度。
- `clientWidth/clientHeight` — 内容的 width/height，包括 padding，但不包括滚动条（scrollbar）。
- `scrollWidth/scrollHeight` — 内容的 width/height，就像 `clientWidth/clientHeight` 一样，但还包括元素的滚动出的不可见的部分。
- `scrollLeft/scrollTop` — 从元素的左上角开始，滚动出元素的上半部分的 width/height。

除了 `scrollLeft/scrollTop` 外，所有属性都是只读的。如果我们修改 `scrollLeft/scrollTop`，浏览器会滚动对应的元素。

#### 25.1.9 **Window** 大小和滚动

- 文档可见部分的 width/height（内容区域的 width/height）：`document.documentElement.clientWidth/clientHeight`

  如果这里存在一个滚动条，那么 `clientWidth/clientHeight` 会提供没有滚动条（减去它）的 width/height。换句话说，它们返回的是可用于内容的文档的可见部分的 width/height。

  `window.innerWidth/innerHeight` 包括了滚动条。

- 整个文档的 width/height，其中包括滚动出去的部分：

  ```javascript
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  ```

滚动：

- 读取当前的滚动：`window.pageYOffset/pageXOffset`。
- 更改当前的滚动：
  - `window.scrollTo(pageX,pageY)` — 绝对坐标，
  - `window.scrollBy(x,y)` — 相对当前位置进行滚动，
  - `elem.scrollIntoView(top)` — 滚动以使 `elem` 可见（`elem` 与窗口的顶部/底部对齐）。

#### 25.1.10 坐标

1. 相对于窗口— 类似于`position:fixed``，从窗口的顶部/左侧边缘计算得出。

   - 我们将这些坐标表示为 `clientX/clientY`，当我们研究事件属性时，就会明白为什么使用这种名称来表示坐标。

2. 相对于文档— 与文档根（document root）中的`position:absolute`类似，从文档的顶部/左侧边缘计算得出。

   - 我们将它们表示为 `pageX/pageY`。

     

页面上的任何点都有坐标：

1. 相对于窗口的坐标 — `elem.getBoundingClientRect()`。
2. 相对于文档的坐标 — `elem.getBoundingClientRect()` 加上当前页面滚动。

方法 `elem.getBoundingClientRect()` 返回最小矩形的窗口坐标，该矩形将 `elem` 作为内建 [DOMRect](https://www.w3.org/TR/geometry-1/#domrect) 类的对象。

主要的 `DOMRect` 属性：

- `x/y` — 矩形原点相对于窗口的 X/Y 坐标，
- `width/height` — 矩形的 width/height（可以为负）。

此外，还有派生（derived）属性：

- `top/bottom` — 顶部/底部矩形边缘的 Y 坐标，
- `left/right` — 左/右矩形边缘的 X 坐标。

---

### 25.2 事件简介

#### 25.2.1 浏览器事件简介

**事件** 是某事发生的信号。所有的 DOM 节点都生成这样的信号（但事件不仅限于 DOM）。

**陌生的事件类型:**

`touchstart`事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。 

`touchmove`事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。 

`touchend`事件：当手指从屏幕上离开的时候触发。

#### 25.2.2 **访问元素：this**

处理程序中的 `this` 的值是对应的元素。就是处理程序所在的那个元素。

下面这行代码中的 `button` 使用 `this.innerHTML` 来显示它的内容：

```markup
<button onclick="alert(this.innerHTML)">Click me</button>
```

**因为这里只有一个 `onclick` 属性，所以我们无法分配更多事件处理程序。**

在下面这个示例中，我们使用 JavaScript 添加了一个处理程序，覆盖了现有的处理程序：

```markup
<input type="button" id="elem" onclick="alert('Before')" value="Click me">
<script>
  elem.onclick = function() { // 覆盖了现有的处理程序
    alert('After'); // 只会显示此内容
  };
</script>
```

#### 25.2.3 **addEventListener：**

上述分配处理程序的方式的根本问题是 —— 我们不能为一个事件分配多个处理程序。

假设，在我们点击了一个按钮时，我们代码中的一部分想要高亮显示这个按钮，另一部分则想要显示一条消息。

我们想为此事件分配两个处理程序。但是，新的 DOM 属性将覆盖现有的 DOM 属性：

```javascript
input.onclick = function() { alert(1); }
// ...
input.onclick = function() { alert(2); } // 替换了前一个处理程序
```

Web 标准的开发者很早就了解到了这一点，并提出了一种使用特殊方法 `addEventListener` 和 `removeEventListener` 来管理处理程序的替代方法。它们没有这样的问题。

添加处理程序的语法：

```javascript
element.addEventListener(event, handler[, options]);
```

- `event`

  事件名，例如：`"click"`。

- `handler`

  处理程序。

- `options`

  具有以下属性的附加可选对象：`once`：如果为 `true`，那么会在被触发后自动删除监听器。`capture`：事件处理的阶段，我们稍后将在 [冒泡和捕获](https://zh.javascript.info/bubbling-and-capturing) 一章中介绍。由于历史原因，`options` 也可以是 `false/true`，它与 `{capture: false/true}` 相同。`passive`：如果为 `true`，那么处理程序将不会调用 `preventDefault()`，我们稍后将在 [浏览器默认行为](https://zh.javascript.info/default-browser-action) 一章中介绍。

要移除处理程序，可以使用 `removeEventListener`：

```javascript
element.removeEventListener(event, handler[, options]);
```

#### 25.2.4 **事件对象：**

当事件发生时，浏览器会创建一个 **`event` 对象**，将详细信息放入其中，并将其作为参数传递给处理程序。

下面是一个从 `event` 对象获取鼠标指针的坐标的示例：

```markup
<input type="button" value="Click me" id="elem">

<script>
  elem.onclick = function(event) {
    // 显示事件类型、元素和点击的坐标
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates: " + event.clientX + ":" + event.clientY);
  };
</script>
```

`event` 对象的一些属性：

- `event.type`

  事件类型，这里是 `"click"`。

- `event.currentTarget`

  处理事件的元素。这与 `this` 相同，除非处理程序是一个箭头函数，或者它的 `this` 被绑定到了其他东西上，之后我们就可以从 `event.currentTarget` 获取元素了。

- `event.clientX / event.clientY`

  指针事件（pointer event）的指针的窗口相对坐标。

还有很多属性。其中很多都取决于事件类型：键盘事件具有一组属性，指针事件具有另一组属性，稍后我们将详细讨论不同事件，那时我们再对其进行详细研究。

#### 25.2.5 对象处理程序：handleEvent

我们不仅可以分配函数，还可以使用 `addEventListener` 将一个对象分配为事件处理程序。当事件发生时，就会调用该对象的 `handleEvent` 方法。

例如：

```markup
<button id="elem">Click me</button>

<script>
  let obj = {
    handleEvent(event) {
      alert(event.type + " at " + event.currentTarget);
    }
  };

  elem.addEventListener('click', obj);
</script>
```

正如我们所看到的，当 `addEventListener` 接收一个对象作为处理程序时，在事件发生时，它就会调用 `obj.handleEvent(event)` 来处理事件。

#### 25.2.6 冒泡和捕获

##### 25.2.6.1 冒泡

冒泡（bubbling）原理很简单。

**当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。**

##### 25.2.6.2 event.target

父元素上的处理程序始终可以获取事件实际发生位置的详细信息。

**引发事件的那个嵌套层级最深的元素被称为目标元素,可以通过 `event.target` 访问。**

注意与 `this`（=`event.currentTarget`）之间的区别：

- `event.target` —— 是引发事件的“目标”元素，它在冒泡过程中不会发生变化。
- `this` —— 是“当前”元素，其中有一个当前正在运行的处理程序。

例如，如果我们有一个处理程序 `form.onclick`，那么它可以“捕获”表单内的所有点击。无论点击发生在哪里，它都会冒泡到 `<form>` 并运行处理程序。

在 `form.onclick` 处理程序中：

- `this`（=`event.currentTarget`）是 `<form>` 元素，因为处理程序在它上面运行。
- `event.target` 是表单中实际被点击的元素。

##### 25.2.6.3 停止冒泡

冒泡事件从目标元素开始向上冒泡。通常，它会一直上升到 `<html>`，然后再到 `document` 对象，有些事件甚至会到达 `window`，它们会调用路径上所有的处理程序。

但是任意处理程序都可以决定事件已经被完全处理，并停止冒泡。

用于停止冒泡的方法是 `event.stopPropagation()`。

例如，如果你点击 `<button>`，这里的 `body.onclick` 不会工作：

```javascript
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

##### 25.2.6.4 捕获

事件处理的另一个阶段被称为“捕获（capturing）”。它很少被用在实际开发中，但有时是有用的。

[DOM 事件](http://www.w3.org/TR/DOM-Level-3-Events/)标准描述了事件传播的 3 个阶段：

1. 捕获阶段（Capturing phase）—— 事件（从 Window）向下走近元素。
2. 目标阶段（Target phase）—— 事件到达目标元素。
3. 冒泡阶段（Bubbling phase）—— 事件从元素上开始冒泡。

为了在捕获阶段捕获事件，我们需要将处理程序的 `capture` 选项设置为 `true`：

```javascript
elem.addEventListener(..., {capture: true})
// 或者，用 {capture: true} 的别名 "true"
elem.addEventListener(..., true)
```

`capture` 选项有两个可能的值：

- 如果为 `false`（默认值），则在冒泡阶段设置处理程序。
- 如果为 `true`，则在捕获阶段设置处理程序。

##### 25.2.6.5 事件委托

捕获和冒泡允许我们实现最强大的事件处理模式之一，即 **事件委托** 模式。

这个想法是，如果我们有许多以类似方式处理的元素，那么就不必为每个元素分配一个处理程序 —— 而是将单个处理程序放在它们的共同祖先上。

在处理程序中，我们获取 `event.target` 以查看事件实际发生的位置并进行处理。

##### 25.2.6.6 浏览器默认行为

许多事件会自动触发浏览器执行某些行为。

例如：

- 点击一个链接 —— 触发导航（navigation）到该 URL。
- 点击表单的提交按钮 —— 触发提交到服务器的行为。
- 在文本上按下鼠标按钮并移动 —— 选中文本。

##### 25.2.6.7 阻止浏览器行为

有两种方式来告诉浏览器我们不希望它执行默认行为：

- 主流的方式是使用 `event` 对象。有一个 `event.preventDefault()` 方法。

- 如果处理程序是使用 `on<event>`（而不是 `addEventListener`）分配的，那返回 `false` 也同样有效。

::: tip

event.defaultPrevented

如果默认行为被阻止，那么 `event.defaultPrevented` 属性为 `true`，否则为 `false`。

这儿有一个有趣的用例。

你还记得我们在 [冒泡和捕获](https://zh.javascript.info/bubbling-and-capturing) 一章中讨论过的 `event.stopPropagation()`，以及为什么停止冒泡是不好的吗？

有时我们可以使用 `event.defaultPrevented` 来代替，来通知其他事件处理程序，该事件已经被处理。

:::

### 25.3 加载文档和其他资源

#### 25.3.1 页面生命周期

HTML 页面的生命周期包含三个重要事件：

- `DOMContentLoaded` —— 浏览器已完全加载 HTML，并构建了 DOM 树，但像 `<img>` 和样式表之类的外部资源可能尚未加载完成。
- `load` —— 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。
- `beforeunload/unload` —— 当用户正在离开页面时。

每个事件都是有用的：

- `DOMContentLoaded` 事件 —— DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口。
- `load` 事件 —— 外部资源已加载完成，样式已被应用，图片大小也已知了。
- `beforeunload` 事件 —— 用户正在离开：我们可以检查用户是否保存了更改，并询问他是否真的要离开。
- `unload` 事件 —— 用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据。

`DOMContentLoaded` 事件发生在 `document` 对象上。我们必须使用 `addEventListener` 来捕获它。

当整个页面，包括样式、图片和其他资源被加载完成时，会触发 `window` 对象上的 `load` 事件。可以通过 `onload` 属性获取此事件。

当访问者离开页面时，`window` 对象上的 `unload` 事件就会被触发。

如果访问者触发了离开页面的导航（navigation）或试图关闭窗口，`beforeunload` 处理程序将要求进行更多确认。

`document.readyState` 属性可以为我们提供当前加载状态的信息。

它有 3 个可能值：

- `loading` —— 文档正在被加载。
- `interactive` —— 文档被全部读取。
- `complete` —— 文档被全部读取，并且所有资源（例如图片等）都已加载完成。

`document.readyStat`e是文档的当前状态，可以在`readystatechange`事件中跟踪状态更改：

- `loading` —— 文档正在被加载。
- `interactive` —— 文档已被解析完成，与 `DOMContentLoaded` 几乎同时发生，但是在 `DOMContentLoaded` 之前发生。
- `complete` —— 文档和资源均已加载完成，与 `window.onload` 几乎同时发生，但是在 `window.onload` 之前发生。

~~~javascript
// 当前状态
console.log(document.readyState);

// 状态改变时打印它
document.addEventListener('readystatechange', () => console.log(document.readyState));
~~~

#### 25.3.1 脚本：async，defer

这会导致两个重要的问题：

1. 脚本不能访问到位于它们下面的 DOM 元素，因此，脚本无法给它们添加处理程序等。
2. 如果页面顶部有一个笨重的脚本，它会“阻塞页面”。在该脚本下载并执行结束前，用户都不能看到页面内容：

##### 25.3.1.1 `defer`

`defer` 特性告诉浏览器不要等待脚本。相反，浏览器将继续处理 HTML，构建 DOM。脚本会“在后台”下载，然后等 DOM 构建完成后，脚本才会执行。

换句话说：

- 具有 `defer` 特性的脚本不会阻塞页面。
- 具有 `defer` 特性的脚本总是要等到 DOM 解析完毕，但在 `DOMContentLoaded` 事件之前执行。

**具有 `defer` 特性的脚本保持其相对顺序，就像常规脚本一样。**

##### 25.3.1.2 `async`

`async` 特性与 `defer` 有些类似。它也能够让脚本不阻塞页面。但是，在行为上二者有着重要的区别。

`async` 特性意味着脚本是完全独立的：

- 浏览器不会因 `async` 脚本而阻塞（与 `defer` 类似）。
- 其他脚本不会等待 `async` 脚本加载完成，同样，`async` 脚本也不会等待其他脚本。
- DOMContentLoaded和异步脚本不会彼此等待：
  - `DOMContentLoaded` 可能会发生在异步脚本之前（如果异步脚本在页面完成后才加载完成）
  - `DOMContentLoaded` 也可能发生在异步脚本之后（如果异步脚本很短，或者是从 HTTP 缓存中加载的）

换句话说，`async` 脚本会在后台加载，并在加载就绪时运行。DOM 和其他脚本不会等待它们，它们也不会等待其它的东西。`async` 脚本就是一个会在加载完成时执行的完全独立的脚本。

**`async` 特性仅适用于外部脚本**

就像 `defer` 一样，如果 `<script>` 标签没有 `src` 特性（attribute），那么 `async` 特性会被忽略。

### 25.4 DOM 变动观察器

`MutationObserver` 是一个内建对象，它观察 DOM 元素，并在检测到更改时触发回调。

语法：

`MutationObserver` 使用简单。

首先，我们创建一个带有回调函数的观察器：

```javascript
let observer = new MutationObserver(callback);
```

然后将其附加到一个 DOM 节点：

```javascript
observer.observe(node, config);
```

`config` 是一个具有布尔选项的对象，该布尔选项表示“将对哪些更改做出反应”：

- `childList` —— `node` 的直接子节点的更改，
- `subtree` —— `node` 的所有后代的更改，
- `attributes` —— `node` 的特性（attribute），
- `attributeFilter` —— 特性名称数组，只观察选定的特性。
- `characterData` —— 是否观察 `node.data`（文本内容），

其他几个选项：

- `attributeOldValue` —— 如果为 `true`，则将特性的旧值和新值都传递给回调（参见下文），否则只传新值（需要 `attributes` 选项），
- `characterDataOldValue` —— 如果为 `true`，则将 `node.data` 的旧值和新值都传递给回调（参见下文），否则只传新值（需要 `characterData` 选项）。

然后，在发生任何更改后，将执行“回调”：更改被作为一个 [MutationRecord](https://dom.spec.whatwg.org/#mutationrecord) 对象列表传入第一个参数，而观察器自身作为第二个参数。

[MutationRecord](https://dom.spec.whatwg.org/#mutationrecord) 对象具有以下属性：

- type—— 变动类型，以下类型之一：
  - `"attributes"`：特性被修改了，
  - `"characterData"`：数据被修改了，用于文本节点，
  - `"childList"`：添加/删除了子元素。
- `target` —— 更改发生在何处：`"attributes"` 所在的元素，或 `"characterData"` 所在的文本节点，或 `"childList"` 变动所在的元素，
- `addedNodes/removedNodes` —— 添加/删除的节点，
- `previousSibling/nextSibling` —— 添加/删除的节点的上一个/下一个兄弟节点，
- `attributeName/attributeNamespace` —— 被更改的特性的名称/命名空间（用于 XML），
- `oldValue` —— 之前的值，仅适用于特性或文本更改，如果设置了相应选项 `attributeOldValue`/`characterDataOldValue`。

~~~javascript
<div contentEditable id="elem">Click and <b>edit</b>, please</div>

<script>
let observer = new MutationObserver(mutationRecords => {
  console.log(mutationRecords); // console.log(the changes)
});

// 观察除了特性之外的所有变动
observer.observe(elem, {
  childList: true, // 观察直接子节点
  subtree: true, // 及其更低的后代节点
  characterDataOldValue: true // 将旧的数据传递给回调
});
</script>
~~~

## 26. 其他文章

### 26.1 二进制数据，文件

#### 26.1.1 ArrayBuffer，二进制数组

在 Web 开发中，当我们处理文件时（创建，上传，下载），经常会遇到二进制数据。另一个典型的应用场景是图像处理。

不过，在 JavaScript 中有很多种二进制数据格式，会有点容易混淆。仅举几个例子：

- `ArrayBuffer`，`Uint8Array`，`DataView`，`Blob`，`File` 及其他。

**基本的二进制对象是 `ArrayBuffer` —— 对固定长度的连续内存空间的引用。**

我们这样创建它：

```javascript
let buffer = new ArrayBuffer(16); // 创建一个长度为 16 的 buffer
alert(buffer.byteLength); // 16
```

它会分配一个 16 字节的连续内存空间，并用 0 进行预填充。

**`ArrayBuffer` 不是某种东西的数组**

让我们先澄清一个可能的误区。`ArrayBuffer` 与 `Array` 没有任何共同之处：

- 它的长度是固定的，我们无法增加或减少它的长度。
- 它正好占用了内存中的那么多空间。
- 要访问单个字节，需要另一个“视图”对象，而不是 `buffer[index]`。

`ArrayBuffer` 是一个内存区域。它里面存储了什么？无从判断。只是一个原始的字节序列。

**如要操作 `ArrayBuffer`，我们需要使用“视图”对象。**

视图对象本身并不存储任何东西。它是一副“眼镜”，透过它来解释存储在 `ArrayBuffer` 中的字节。

例如：

- **`Uint8Array`** —— 将 `ArrayBuffer` 中的每个字节视为 0 到 255 之间的单个数字（每个字节是 8 位，因此只能容纳那么多）。这称为 “8 位无符号整数”。
- **`Uint16Array`** —— 将每 2 个字节视为一个 0 到 65535 之间的整数。这称为 “16 位无符号整数”。
- **`Uint32Array`** —— 将每 4 个字节视为一个 0 到 4294967295 之间的整数。这称为 “32 位无符号整数”。
- **`Float64Array`** —— 将每 8 个字节视为一个 `5.0x10-324` 到 `1.8x10308` 之间的浮点数。

~~~javascript
let buffer = new ArrayBuffer(16); // 创建一个长度为 16 的 buffer

let view = new Uint32Array(buffer); // 将 buffer 视为一个 32 位整数的序列

alert(Uint32Array.BYTES_PER_ELEMENT); // 每个整数 4 个字节

alert(view.length); // 4，它存储了 4 个整数
alert(view.byteLength); // 16，字节中的大小

// 让我们写入一个值
view[0] = 123456;

// 遍历值
for(let num of view) {
  alert(num); // 123456，然后 0，0，0（一共 4 个值）
}
~~~

#### 26.1.2 TextDecoder 和 TextEncoder

##### 26.1.2.1 TextDecoder

内建的 [TextDecoder](https://encoding.spec.whatwg.org/#interface-textdecoder) 对象在给定缓冲区（buffer）和编码格式（encoding）的情况下，允许将值读取为实际的 JavaScript 字符串。

首先我们需要创建：

```javascript
let decoder = new TextDecoder([label], [options]);
```

- **`label`** —— 编码格式，默认为 `utf-8`，但同时也支持 `big5`，`windows-1251` 等许多其他编码格式。
- `options` 可选对象：
  - **`fatal`** —— 布尔值，如果为 `true` 则为无效（不可解码）字符抛出异常，否则（默认）用字符 `\uFFFD` 替换无效字符。
  - **`ignoreBOM`** —— 布尔值，如果为 `true` 则 BOM（可选的字节顺序 Unicode 标记），很少需要使用。

……然后解码：

```javascript
let str = decoder.decode([input], [options]);
```

- **`input`** —— 要被解码的 `BufferSource`。
- `options`可选对象：
  - **`stream`** —— 对于解码流，为 true，则将传入的数据块（chunk）作为参数重复调用 `decoder`。在这种情况下，多字节的字符可能偶尔会在块与块之间被分割。这个选项告诉 `TextDecoder` 记住“未完成”的字符，并在下一个数据块来的时候进行解码。

例如：

```javascript
let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);

alert( new TextDecoder().decode(uint8Array) ); // Hello
```

##### 26.1.2.2 TextEncoder

[TextEncoder](https://encoding.spec.whatwg.org/#interface-textencoder) 做相反的事情 —— 将字符串转换为字节。

语法为：

```javascript
let encoder = new TextEncoder();
```

只支持 `utf-8` 编码。

它有两种方法：

- **`encode(str)`** —— 从字符串返回 `Uint8Array`。
- **`encodeInto(str, destination)`** —— 将 `str` 编码到 `destination` 中，该目标必须为 `Uint8Array`。

```javascript
let encoder = new TextEncoder();

let uint8Array = encoder.encode("Hello");
alert(uint8Array); // 72,101,108,108,111
```

#### 26.2 Blob

构造函数的语法为：

```javascript
new Blob(blobParts, options);
```

- **`blobParts`** 是 `Blob`/`BufferSource`/`String` 类型的值的数组。
- `options`可选对象：
  - **`type`** —— `Blob` 类型，通常是 MIME 类型，例如 `image/png`，
  - **`endings`** —— 是否转换换行符，使 `Blob` 对应于当前操作系统的换行符（`\r\n` 或 `\n`）。默认为 `"transparent"`（啥也不做），不过也可以是 `"native"`（转换）。



##### 26.2.1 Blob 用作 URL

Blob 可以很容易用作 `<a>`、`<img>` 或其他标签的 URL，来显示它们的内容。

多亏了 `type`，让我们也可以下载/上传 `Blob` 对象，而在网络请求中，`type` 自然地变成了 `Content-Type`。

让我们从一个简单的例子开始。通过点击链接，你可以下载一个具有动态生成的内容为 `hello world` 的 `Blob` 的文件：

```javascript
<!-- download 特性（attribute）强制浏览器下载而不是导航 -->
<a download="hello.txt" href='#' id="link">Download</a>

<script>
let blob = new Blob(["Hello, world!"], {type: 'text/plain'});

link.href = URL.createObjectURL(blob);
```



##### 26.2.2 Blob 转换为 base64

这种编码将二进制数据表示为一个由 0 到 64 的 ASCII 码组成的字符串，非常安全且“可读“。更重要的是 —— 我们可以在 “data-url” 中使用此编码。

[“data-url”](https://developer.mozilla.org/zh/docs/Web/http/Data_URIs) 的形式为 `data:[<mediatype>][;base64],<data>`。我们可以在任何地方使用这种 url，和使用“常规” url 一样。

下面是下载 `Blob` 的示例，这次是通过 base-64：

```javascript
let link = document.createElement('a');
link.download = 'hello.txt';

let blob = new Blob(['Hello, world!'], {type: 'text/plain'});

let reader = new FileReader();
reader.readAsDataURL(blob); // 将 Blob 转换为 base64 并调用 onload

reader.onload = function() {
  link.href = reader.result; // data url
  link.click();
};
```

这两种从 `Blob` 创建 URL 的方法都可以用。但通常 `URL.createObjectURL(blob)` 更简单快捷。

##### 26.2.3 **File** 和 FileReader

[File](https://www.w3.org/TR/FileAPI/#dfn-file) 对象继承自 `Blob`，并扩展了与文件系统相关的功能。

有两种方式可以获取它。

第一种，与 `Blob` 类似，有一个构造器：

```javascript
new File(fileParts, fileName, [options])
```

- **`fileParts`** —— Blob/BufferSource/String 类型值的数组。
- **`fileName`** —— 文件名字符串。
- `options` 可选对象：
  - **`lastModified`** —— 最后一次修改的时间戳（整数日期）。

第二种，更常见的是，我们从 `<input type="file">` 或拖放或其他浏览器接口来获取文件。在这种情况下，file 将从操作系统（OS）获得 this 信息。

由于 `File` 是继承自 `Blob` 的，所以 `File` 对象具有相同的属性，附加：

- `name` —— 文件名，
- `lastModified` —— 最后一次修改的时间戳。

这就是我们从 `<input type="file">` 中获取 `File` 对象的方式：

```markup
<input type="file" onchange="showFile(this)">

<script>
function showFile(input) {
  let file = input.files[0];

  alert(`File name: ${file.name}`); // 例如 my.png
  alert(`Last modified: ${file.lastModified}`); // 例如 1552830408824
}
</script>
```

**请注意：**

输入（input）可以选择多个文件，因此 `input.files` 是一个类数组对象。这里我们只有一个文件，所以我们只取 `input.files[0]`。

###### 

[FileReader](https://www.w3.org/TR/FileAPI/#dfn-filereader) 是一个对象，其唯一目的是从 `Blob`（因此也从 `File`）对象中读取数据。

它使用事件来传递数据，因为从磁盘读取数据可能比较费时间。

构造函数：

```javascript
let reader = new FileReader(); // 没有参数
```

主要方法:

- **`readAsArrayBuffer(blob)`** —— 将数据读取为二进制格式的 `ArrayBuffer`。
- **`readAsText(blob, [encoding])`** —— 将数据读取为给定编码（默认为 `utf-8` 编码）的文本字符串。
- **`readAsDataURL(blob)`** —— 读取二进制数据，并将其编码为 base64 的 data url。
- **`abort()`** —— 取消操作。

`read*` 方法的选择，取决于我们喜欢哪种格式，以及如何使用数据。

- `readAsArrayBuffer` —— 用于二进制文件，执行低级别的二进制操作。对于诸如切片（slicing）之类的高级别的操作，`File` 是继承自 `Blob` 的，所以我们可以直接调用它们，而无需读取。
- `readAsText` —— 用于文本文件，当我们想要获取字符串时。
- `readAsDataURL` —— 当我们想在 `src` 中使用此数据，并将其用于 `img` 或其他标签时。正如我们在 [Blob](https://zh.javascript.info/blob) 一章中所讲的，还有一种用于此的读取文件的替代方案：`URL.createObjectURL(file)`。

读取过程中，有以下事件：

- `loadstart` —— 开始加载。
- `progress` —— 在读取过程中出现。
- `load` —— 读取完成，没有 error。
- `abort` —— 调用了 `abort()`。
- `error` —— 出现 error。
- `loadend` —— 读取完成，无论成功还是失败。

读取完成后，我们可以通过以下方式访问读取结果：

- `reader.result` 是结果（如果成功）
- `reader.error` 是 error（如果失败）。

使用最广泛的事件无疑是 `load` 和 `error`。

这是一个读取文件的示例：

```javascript
<input type="file" onchange="readFile(this)">

<script>
function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log(reader.result);
  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}
</script>
```

**`FileReader` 用于 blob**

正如我们在 [Blob](https://zh.javascript.info/blob) 一章中所提到的，`FileReader` 不仅可读取文件，还可读取任何 blob。

我们可以使用它将 blob 转换为其他格式：

- `readAsArrayBuffer(blob)` —— 转换为 `ArrayBuffer`，
- `readAsText(blob, [encoding])` —— 转换为字符串（`TextDecoder` 的一个替代方案），
- `readAsDataURL(blob)` —— 转换为 base64 的 data url。

### 26.2 网络请求

#### 26.2.1 Fetch

基本语法：

```javascript
let promise = fetch(url, [options])
```

- **`url`** —— 要访问的 URL。
- **`options`** —— 可选参数：method，header 等。

典型的 fetch 请求由两个 `await` 调用组成：

```javascript
let response = await fetch(url, options); // 解析 response header
let result = await response.json(); // 将 body 读取为 json
```

或者以 promise 形式：

```javascript
fetch(url, options)
  .then(response => response.json())
  .then(result => /* process result */)
```

响应的属性：

- `response.status` —— response 的 HTTP 状态码，
- `response.ok` —— HTTP 状态码为 200-299，则为 `true`。
- `response.headers` —— 类似于 Map 的带有 HTTP header 的对象。

获取 response body 的方法：

- **`response.text()`** —— 读取 response，并以文本形式返回 response，
- **`response.json()`** —— 将 response 解析为 JSON 对象形式，
- **`response.formData()`** —— 以 `FormData` 对象（`multipart/form-data` 编码，参见下一章）的形式返回 response，
- **`response.blob()`** —— 以 [Blob](https://zh.javascript.info/blob)（具有类型的二进制数据）形式返回 response，
- **`response.arrayBuffer()`** —— 以 [ArrayBuffer](https://zh.javascript.info/arraybuffer-binary-arrays)（低级别的二进制数据）形式返回 response。

到目前为止我们了解到的 fetch 选项：

- `method` —— HTTP 方法，
- `headers` —— 具有 request header 的对象（不是所有 header 都是被允许的）
- `body` —— 要以 `string`，`FormData`，`BufferSource`，`Blob` 或 `UrlSearchParams` 对象的形式发送的数据（request body）。

作为一个读取为二进制格式的演示示例，让我们 fetch 并显示一张 [“fetch” 规范](https://fetch.spec.whatwg.org/) 中的图片（`Blob` 操作的有关内容请见 [Blob](https://zh.javascript.info/blob)）：

```javascript
let response = await fetch('/article/fetch/logo-fetch.svg');

let blob = await response.blob(); // 下载为 Blob 对象

// 为其创建一个 <img>
let img = document.createElement('img');
img.style = 'position:fixed;top:10px;left:10px;width:100px';
document.body.append(img);

// 显示它
img.src = URL.createObjectURL(blob);

setTimeout(() => { // 3 秒后将其隐藏
  img.remove();
  URL.revokeObjectURL(img.src);
}, 3000);
```

POST 请求：

要创建一个 `POST` 请求，或者其他方法的请求，我们需要使用 `fetch` 选项：

- **`method`** —— HTTP 方法，例如 `POST`，

- `body`

  —— request body，其中之一：

  - 字符串（例如 JSON 编码的），
  - `FormData` 对象，以 `multipart/form-data` 形式发送数据，
  - `Blob`/`BufferSource` 发送二进制数据，
  - [URLSearchParams](https://zh.javascript.info/url)，以 `x-www-form-urlencoded` 编码形式发送数据，很少使用。

JSON 形式是最常用的。

例如，下面这段代码以 JSON 形式发送 `user` 对象：

```javascript
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
```

#### 26.2.2 FormData

这一章是关于发送 HTML 表单的：带有或不带文件，带有其他字段等。

正如你所看到的，它几乎就是一行代码：

```javascript
<form id="formElem">
  <input type="text" name="name" value="John">
  <input type="text" name="surname" value="Smith">
  <input type="submit">
</form>

<script>
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
  };
</script>
```



**FormData 方法**:

我们可以使用以下方法修改 `FormData` 中的字段：

- `formData.append(name, value)` —— 添加具有给定 `name` 和 `value` 的表单字段，
- `formData.append(name, blob, fileName)` —— 添加一个字段，就像它是 `<input type="file">`，第三个参数 `fileName` 设置文件名（而不是表单字段名），因为它是用户文件系统中文件的名称，
- `formData.delete(name)` —— 移除带有给定 `name` 的字段，
- `formData.get(name)` —— 获取带有给定 `name` 的字段值，
- `formData.has(name)` —— 如果存在带有给定 `name` 的字段，则返回 `true`，否则返回 `false`。

从技术上来讲，一个表单可以包含多个具有相同 `name` 的字段，因此，多次调用 `append` 将会添加多个具有相同名称的字段。

还有一个 `set` 方法，语法与 `append` 相同。不同之处在于 `.set` 移除所有具有给定 `name` 的字段，然后附加一个新字段。因此，它确保了只有一个具有这种 `name` 的字段，其他的和 `append` 一样：

- `formData.set(name, value)`，
- `formData.set(name, blob, fileName)`。



#### 26.2.3 XMLHttpRequest

[HttpServletResponse ServletResponse 返回响应 设置响应头设置响应正文体 重定向 常用方法 如何重定向 响应编码 响应乱码 - 刘达人186 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xiang--liu/p/11505721.html)

[深入理解XMLHttpRequest - 掘金 (juejin.cn)](https://juejin.cn/post/6844904052875067400)

[(19条消息) http请求xml响应如何处理乱码 - CSDN](https://www.csdn.net/tags/MtTaMg0sNzcyNDA1LWJsb2cO0O0O.html)

在现代 Web 开发中，出于以下三种原因，我们还在使用 `XMLHttpRequest`：

1. 历史原因：我们需要支持现有的使用了 `XMLHttpRequest` 的脚本。
2. 我们需要兼容旧浏览器，并且不想用 polyfill（例如为了使脚本更小）。
3. 我们需要做一些 `fetch` 目前无法做到的事情，例如跟踪上传进度。

XMLHttpRequest 有两种执行模式：同步（synchronous）和异步（asynchronous）。

我们首先来看看最常用的异步模式：

要发送请求，需要 3 个步骤：

1. 创建 `XMLHttpRequest`：

   ```javascript
   let xhr = new XMLHttpRequest();
   ```

   此构造器没有参数。

2. 初始化它，通常就在 `new XMLHttpRequest` 之后：

   ```javascript
   xhr.open(method, URL, [async, user, password])
   ```

   此方法指定请求的主要参数：

   - `method` —— HTTP 方法。通常是 `"GET"` 或 `"POST"`。
   - `URL` —— 要请求的 URL，通常是一个字符串，也可以是 [URL](https://zh.javascript.info/url) 对象。
   - `async` —— 如果显式地设置为 `false`，那么请求将会以同步的方式处理，我们稍后会讲到它。
   - `user`，`password` —— HTTP 基本身份验证（如果需要的话）的登录名和密码。

   请注意，`open` 调用与其名称相反，不会建立连接。它仅配置请求，而网络活动仅以 `send` 调用开启。

3. 发送请求。

   ```javascript
   xhr.send([body])
   ```

   这个方法会建立连接，并将请求发送到服务器。可选参数 `body` 包含了 request body。

4. 监听 `xhr` 事件以获取响应。

   这三个事件是最常用的：

   - `load` —— 当请求完成（即使 HTTP 状态为 400 或 500 等），并且响应已完全下载。

   - `error` —— 当无法发出请求，例如网络中断或者无效的 URL。

   - `progress` —— 在下载响应期间定期触发，报告已经下载了多少。

     ~~~javascript
     xhr.onprogress = function(event) {
       if (event.lengthComputable) {
         alert(`Received ${event.loaded} of ${event.total} bytes`);
       } else {
         alert(`Received ${event.loaded} bytes`); // 没有 Content-Length
       }
     
     };
     ~~~

     

一旦服务器有了响应，我们可以在以下 `xhr` 属性中接收结果：

- `status`

  HTTP 状态码（一个数字）：`200`，`404`，`403` 等，如果出现非 HTTP 错误，则为 `0`。

- `statusText`

  HTTP 状态消息（一个字符串）：状态码为 `200` 对应于 `OK`，`404` 对应于 `Not Found`，`403` 对应于 `Forbidden`。

##### 26.2.3.1 **响应数据**

数据在`xhr.response`里面

##### 26.2.3.2 **响应类型：**

我们可以使用 `xhr.responseType` 属性来设置响应格式：

- `""`（默认）—— 响应格式为字符串，
- `"text"` —— 响应格式为字符串，
- `"arraybuffer"` —— 响应格式为 `ArrayBuffer`（对于二进制数据，请参见 [ArrayBuffer，二进制数组](https://zh.javascript.info/arraybuffer-binary-arrays)），
- `"blob"` —— 响应格式为 `Blob`（对于二进制数据，请参见 [Blob](https://zh.javascript.info/blob)），
- `"document"` —— 响应格式为 XML document（可以使用 XPath 和其他 XML 方法）或 HTML document（基于接收数据的 MIME 类型）
- `"json"` —— 响应格式为 JSON（自动解析）。

**HTTP-header**

HTTP-header 有三种方法：

- `setRequestHeader(name, value)`

  使用给定的 `name` 和 `value` 设置 request header。例如：

  ~~~javascript
  xhr.setRequestHeader('Content-Type', 'application/json');
  ~~~

- `getResponseHeader(name)`

  获取具有给定 `name` 的 header（`Set-Cookie` 和 `Set-Cookie2` 除外）。

- `getAllResponseHeaders()`

  返回除 `Set-Cookie` 和 `Set-Cookie2` 外的所有 response header。

  header 以单行形式返回

##### 26.2.3.3 **上传进度**

`progress` 事件仅在下载阶段触发。

也就是说：如果我们 `POST` 一些内容，`XMLHttpRequest` 首先上传我们的数据（request body），然后下载响应。

如果我们要上传的东西很大，那么我们肯定会对跟踪上传进度感兴趣。但是 `xhr.onprogress` 在这里并不起作用。

这里有另一个对象，它没有方法，它专门用于跟踪上传事件：`xhr.upload`。

它会生成事件，类似于 `xhr`，但是 `xhr.upload` 仅在上传时触发它们：

- `loadstart` —— 上传开始。

- `progress` —— 上传期间定期触发。

- `abort` —— 上传中止。

- `error` —— 非 HTTP 错误。

- `load` —— 上传成功完成。

- `timeout` —— 上传超时（如果设置了 `timeout` 属性）。

- `loadend` —— 上传完成，无论成功还是 error。

  ~~~javascript
  xhr.upload.onprogress = function(event) {
    alert(`Uploaded ${event.loaded} of ${event.total} bytes`);
  };
  
  xhr.upload.onload = function() {
    alert(`Upload finished successfully.`);
  };
  
  xhr.upload.onerror = function() {
    alert(`Error during the upload: ${xhr.status}`);
  };
  ~~~


##### 26.2.3.4 **跨域请求**

`XMLHttpRequest` 可以使用和 [fetch](https://zh.javascript.info/fetch-crossorigin) 相同的 CORS 策略进行跨源请求。

就像 `fetch` 一样，默认情况下不会将 cookie 和 HTTP 授权发送到其他域。要启用它们，可以将 `xhr.withCredentials` 设置为 `true`：

```javascript
let xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open('POST', 'http://anywhere.com/request');
...
```

26.2.4 **URL 搜索参数（URL search parameters）**

为了向 URL 添加像 `?name=value` 这样的参数，并确保正确的编码，我们可以使用 [URL](https://zh.javascript.info/url) 对象：

```javascript
let url = new URL('https://google.com/search');
url.searchParams.set('q', 'test me!');

// 参数 'q' 被编码
xhr.open('GET', url); // https://google.com/search?q=test+me%21
```



### 26.3 在浏览器中存储数据

#### 26.3.1 Cookie，document.cookie

Cookie 通常是由 Web 服务器使用响应 `Set-Cookie` HTTP-header 设置的。然后浏览器使用 `Cookie` HTTP-header 将它们自动添加到（几乎）每个对相同域的请求中。

选项被列在 `key=value` 之后，以 `;` 分隔，像这样：

```javascript
document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
```

`document.cookie` 提供了对 cookie 的访问

- 写入操作只会修改其中提到的 cookie。
- name/value 必须被编码。
- 一个 cookie 最大不能超过 4KB。每个域下最多允许有 20+ 个左右的 cookie（具体取决于浏览器）。

Cookie 选项：

- `path=/`，默认为当前路径，使 cookie 仅在该路径下可见。

  url 路径前缀必须是绝对路径。它使得该路径下的页面可以访问该 cookie。默认为当前路径。

  如果一个 cookie 带有 `path=/admin` 设置，那么该 cookie 在 `/admin` 和 `/admin/something` 下都是可见的，但是在 `/home` 或 `/adminpage` 下不可见。

  通常，我们应该将 `path` 设置为根目录：`path=/`，以使 cookie 对此网站的所有页面可见。

- `domain=site.com`，默认 cookie 仅在当前域下可见。如果显式地设置了域，可以使 cookie 在子域下也可见。

- `expires` 或 `max-age` 设定了 cookie 过期时间。如果没有设置，则当浏览器关闭时 cookie 就会失效。

  它是 `expires` 的替代选项，指明了 cookie 的过期时间距离当前时间的秒数。

  如果将其设置为 0 或负数，则 cookie 会被删除：

  ```javascript
  // cookie 会在一小时后失效
  document.cookie = "user=John; max-age=3600";
  
  // 删除 cookie（让它立即过期）
  document.cookie = "user=John; max-age=0";
  ```

- `secure` 使 cookie 仅在 HTTPS 下有效。

- `samesite`，如果请求来自外部网站，禁止浏览器发送 cookie。这有助于防止 XSRF 攻击。`samesite=strict` 的 cookie 永远不会被发送。

#### 26.3.2 LocalStorage，sessionStorage

Web 存储对象 `localStorage` 和 `sessionStorage` 允许我们在浏览器上保存键/值对。

::: tip

我们已经有了 cookie。为什么还要其他存储对象呢？

- 与 cookie 不同，Web 存储对象不会随每个请求被发送到服务器。因此，我们可以保存更多数据。大多数浏览器都允许保存至少 2MB 的数据（或更多），并且具有用于配置数据的设置。
- 还有一点和 cookie 不同，服务器无法通过 HTTP header 操纵存储对象。一切都是在 JavaScript 中完成的。
- 存储绑定到源（域/协议/端口三者）。也就是说，不同协议或子域对应不同的存储对象，它们之间无法访问彼此数据。

:::

两个存储对象都提供相同的方法和属性：

- `setItem(key, value)` —— 存储键/值对。
- `getItem(key)` —— 按照键获取值。
- `removeItem(key)` —— 删除键及其对应的值。
- `clear()` —— 删除所有数据。
- `key(index)` —— 获取该索引下的键名。
- `length` —— 存储的内容的长度。

正如你所看到的，它就像一个 `Map` 集合（`setItem/getItem/removeItem`），但也允许通过 `key(index)` 来按索引访问。

`localStorage` 最主要的特点是：

- 在同源的所有标签页和窗口之间共享数据。
- 数据不会过期。它在浏览器重启甚至系统重启后仍然存在。

我们只需要在同一个源（域/端口/协议），URL 路径可以不同。

在所有同源的窗口之间，`localStorage` 数据可以共享。因此，如果我们在一个窗口中设置了数据，则在另一个窗口中也可以看到数据变化。

`sessionStorage` 对象的使用频率比 `localStorage` 对象低得多。

属性和方法是相同的，但是它有更多的限制：

- `sessionStorage`的数据只存在于当前浏览器标签页。
  - 具有相同页面的另一个标签页中将会有不同的存储。
  - 但是，它在同一标签页下的 iframe 之间是共享的（假如它们来自相同的源）。
- 数据在页面刷新后仍然保留，但在关闭/重新打开浏览器标签页后不会被保留。

当 `localStorage` 或 `sessionStorage` 中的数据更新后，[storage](https://html.spec.whatwg.org/multipage/webstorage.html#the-storageevent-interface) 事件就会触发，它具有以下属性：

- `key` —— 发生更改的数据的 `key`（如果调用的是 `.clear()` 方法，则为 `null`）。
- `oldValue` —— 旧值（如果是新增数据，则为 `null`）。
- `newValue` —— 新值（如果是删除数据，则为 `null`）。
- `url` —— 发生数据更新的文档的 url。
- `storageArea` —— 发生数据更新的 `localStorage` 或 `sessionStorage` 对象。
