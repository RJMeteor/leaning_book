---
title: prettier代码美化
author: RJMeteor
createTime: 2024/12/02 04:41:42
permalink: /webframe/prettier/
---
## 安装依赖

```bash
npm install prettier -D
```
## 官方文档
[https://prettier.io/](https://prettier.io/)

## 配置文件
```js
// .prettierrc
{
	// 每行代码数量
  "printWidth": 120,
  // 缩进的空格个数
  "tabWidth": 2,
  // 制表符使用空格
  "useTabs": false,
  // 末尾分号
  "semi": false,
  // 换行符
  "endOfLine": "auto",
  // 单引号
  "singleQuote": true,
  // 对象末尾始终携带逗号
  "trailingComma": "all",
  // 对象大括号带空格
  "bracketSpacing": true,
  // 箭头符号参数始终带括号
  "arrowParens": "always",
}
```

~~~
// .prettierignore
dist
node_modules
.eslintignore
.prettierignore
~~~

## 格式化命令

如果你想格式化特定文件或目录，可以指定相应的文件路径。例如，格式化 `src` 目录下的所有文件：

```bash
prettier --write 'src/**/*'
```