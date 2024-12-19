---
title: DOM
author: RJMeteor
createTime: 2024/12/02 04:41:42
permalink: /webframe/dom/
---

## 1. DOM树

HTML/XML 文档在浏览器内均被表示为 DOM 树。

- 标签（tag）成为元素节点，并形成文档结构。
- 文本（text）成为文本节点。
- ……等，HTML 中的所有东西在 DOM 中都有它的位置，甚至对注释也是如此。

我们可以使用开发者工具来检查（inspect）DOM 并手动修改它。

## 2. 遍历DOM

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

## 3. 搜索DOM

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

##  4. DOM节点属性

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

## 5. DOM特性和属性

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

::: tip dataset

在大多数情况下，最好使用 DOM 属性。仅当 DOM 属性无法满足开发需求，并且我们真的需要特性时，才使用特性，例如：

- 我们需要一个非标准的特性。但是如果它以 `data-` 开头，那么我们应该使用 `dataset`。

  **所有以 “data-” 开头的特性均被保留供程序员使用。它们可在 `dataset` 属性中使用。**

  例如，如果一个 `elem` 有一个名为 `"data-about"` 的特性，那么可以通过 `elem.dataset.about` 取到它。

  像 `data-order-state` 这样的多词特性可以以驼峰式进行调用：`dataset.orderState`。

- 对应的 DOM 属性可能不同，例如 `href` 属性一直是一个 **完整的** URL

  如果我们需要 `href` 特性的值，或者其他与 HTML 中所写的完全相同的特性，则可以使用 `getAttribute`。

:::

## 6. DOM变动

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

## 7. DOM样式和类

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

## 8. DOM大小和滚动

元素具有以下几何属性：

- `offsetParent` — 是最接近的 CSS 定位的祖先，或者是 `td`，`th`，`table`，`body`。
- `offsetLeft/offsetTop` — 是相对于 `offsetParent` 的左上角边缘的坐标。
- `offsetWidth/offsetHeight` —自身完整大小，边框（border）尺寸计算在内。
- `clientLeft/clientTop` — 边框的宽度， `clientLeft` 也包括滚动条的宽度。
- `clientWidth/clientHeight` — 内容的 width/height，包括 padding，但不包括滚动条（scrollbar）。
- `scrollWidth/scrollHeight` — 内容的 width/height，就像 `clientWidth/clientHeight` 一样，但还包括元素的滚动出的不可见的部分。
- `scrollLeft/scrollTop` — 从元素的左上角开始，滚动出元素的上半部分的 width/height。

除了 `scrollLeft/scrollTop` 外，所有属性都是只读的。如果我们修改 `scrollLeft/scrollTop`，浏览器会滚动对应的元素。

## 9. Window大小和滚动

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

## 10. DOM元素坐标

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

## 11. 事件简介

#### 11.1 访问元素：this

处理程序中的 `this` 的值是对应的元素。就是处理程序所在的那个元素。

下面这行代码中的 `button` 使用 `this.innerHTML` 来显示它的内容：

```js
<button onclick="alert(this.innerHTML)">Click me</button>
```

**因为这里只有一个 `onclick` 属性，所以我们无法分配更多事件处理程序。**

在下面这个示例中，我们使用 JavaScript 添加了一个处理程序，覆盖了现有的处理程序：

```js
<input type="button" id="elem" onclick="alert('Before')" value="Click me">
<script>
  elem.onclick = function() { // 覆盖了现有的处理程序
    alert('After'); // 只会显示此内容
  };
</script>
```

#### 11.2 addEventListener：

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

## 13. 事件对象

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
  
  > 还有很多属性。其中很多都取决于事件类型：键盘事件具有一组属性，指针事件具有另一组属性，稍后我们将详细讨论不同事件，那时我们再对其进行详细研究。

### 13.1 对象处理程序：handleEvent

我们不仅可以分配函数，还可以使用 `addEventListener` 将一个对象分配为事件处理程序。当事件发生时，就会调用该对象的 `handleEvent` 方法。

例如：

```js
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

### 13.2 冒泡

冒泡（bubbling）原理很简单。

**当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。**

::: tip event.target

父元素上的处理程序始终可以获取事件实际发生位置的详细信息。

**引发事件的那个嵌套层级最深的元素被称为目标元素,可以通过 `event.target` 访问。**

注意与 `this`（=`event.currentTarget`）之间的区别：

- `event.target` —— 是引发事件的“目标”元素，它在冒泡过程中不会发生变化。
- `this` —— 是“当前”元素，其中有一个当前正在运行的处理程序。

例如，如果我们有一个处理程序 `form.onclick`，那么它可以“捕获”表单内的所有点击。无论点击发生在哪里，它都会冒泡到 `<form>` 并运行处理程序。

:::

在 `form.onclick` 处理程序中：

- `this`（=`event.currentTarget`）是 `<form>` 元素，因为处理程序在它上面运行。
- `event.target` 是表单中实际被点击的元素。

::: warning 停止冒泡

冒泡事件从目标元素开始向上冒泡。通常，它会一直上升到 `<html>`，然后再到 `document` 对象，有些事件甚至会到达 `window`，它们会调用路径上所有的处理程序。

但是任意处理程序都可以决定事件已经被完全处理，并停止冒泡。

用于停止冒泡的方法是 `event.stopPropagation()`。

例如，如果你点击 `<button>`，这里的 `body.onclick` 不会工作：

~~~html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
~~~

:::

### 13.3 捕获

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

##  14. 事件委托

捕获和冒泡允许我们实现最强大的事件处理模式之一，即 **事件委托** 模式。

这个想法是，如果我们有许多以类似方式处理的元素，那么就不必为每个元素分配一个处理程序 —— 而是将单个处理程序放在它们的共同祖先上。

在处理程序中，我们获取 `event.target` 以查看事件实际发生的位置并进行处理。

## 15. 浏览器默认行为

许多事件会自动触发浏览器执行某些行为。

例如：

- 点击一个链接 —— 触发导航（navigation）到该 URL。
- 点击表单的提交按钮 —— 触发提交到服务器的行为。
- 在文本上按下鼠标按钮并移动 —— 选中文本。

::: tip 阻止浏览器行为

> 如果处理程序是使用 `on<event>`（而不是 `addEventListener`）分配的，那返回 `false` 也同样有效。

如果默认行为被阻止，那么 `event.defaultPrevented` 属性为 `true`，否则为 `false`。

这儿有一个有趣的用例。

你还记得我们在 [冒泡和捕获](https://zh.javascript.info/bubbling-and-capturing) 一章中讨论过的 `event.stopPropagation()`，以及为什么停止冒泡是不好的吗？

有时我们可以使用 `event.defaultPrevented` 来代替，来通知其他事件处理程序，该事件已经被处理。

:::

## 16. DOM变动观察器

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
