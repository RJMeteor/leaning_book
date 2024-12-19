---
title: Promise
author: RJMeteor
createTime: 2024/12/02 04:41:42
permalink: /webframe/promise/
---

## 1. Promise

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

> 一旦state的值不再是`pending`了，再调用resolve(value)或reject(error)就不能再改变`state`和`result`

## 2. then，catch，finally

如果 `.then`（或 `catch/finally` 都可以）处理程序（handler）返回一个 promise，那么链的其余部分将会等待，直到它状态变为 settled。当它被 settled 后，其 result（或 error）将被进一步传递下去。

Promise 的处理程序（handlers）`.then`、`.catch` 和 `.finally` 都是异步的。

### 2.1 then

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

### 2.2 catch

如果我们只对 error 感兴趣，那么我们可以使用 `null` 作为第一个参数：`.then(null, errorHandlingFunction)`。或者我们也可以使用 `.catch(errorHandlingFunction)`，其实是一样的：

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) 与 promise.then(null, f) 一样
promise.catch(alert); // 1 秒后显示 "Error: Whoops!"
```

`.catch(f)` 调用是 `.then(null, f)` 的完全的模拟，它只是一个简写形式。

#### 2.3 finally

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

## 3 Promise API

###  3.1 Promise.all

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

### 3.2 Promise.allSettled

`Promise.allSettled` 等待所有的 promise 都被 settle，无论结果如何。结果数组具有：

- `{status:"fulfilled", value:result}` 对于成功的响应，
- `{status:"rejected", reason:error}` 对于 error。

### 3.3 Promise.race

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

### 3.4 Promise.any

与 `Promise.race` 类似，区别在于 `Promise.any` 只等待第一个 fulfilled 的 promise，并将这个 fulfilled 的 promise 返回。如果给出的 promise 都 rejected，那么则返回 rejected 的 promise 和 [`AggregateError`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) 错误类型的 error 实例。



### 3.5 总结

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

## 4 Async/await

Async/await 是以更舒适的方式使用 promise 的一种特殊语法，同时它也非常易于理解和使用。

### 4.1 Async function:

让我们以 `async` 这个关键字开始。它可以被放置在一个函数前面，如下所示：

```javascript
async function f() {
  return 1;
}
```

在函数前面的 “async” 这个单词表达了一个简单的事情：即这个函数总是返回一个 promise。其他值将自动被包装在一个 resolved 的 promise 中。

### 4.2 Await：

语法如下：

```javascript
// 只在 async 函数内工作
let value = await promise;
```

关键字 `await` 让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果。

`await` 实际上会暂停函数的执行，直到 promise 状态变为 settled，然后以 promise 的结果继续执行。这个行为不会耗费任何 CPU 资源，因为 JavaScript 引擎可以同时处理其他任务：执行其他脚本，处理事件等。

**不能在普通函数中使用** `await`

**在现代浏览器中，当我们处于一个 module 中时，那么在顶层使用 `await` 也是被允许的。**

