---
title: eslint代码检查
author: RJMeteor
createTime: 2024/12/02 04:41:42
permalink: /webframe/eslint/
---

## 安装依赖 

> 这里使用eslint和prettier集成搭配使用

```bash
# eslint
npm install eslint@8.22.0 -D
# 格式代码
npm install prettier@2.6.2 -D
# eslint 检查vue文件代码
npm install eslint-plugin-vue@8.6.0 -D
# 这是一个 ESLint 配置规则的包，它将禁用与 Prettier 冲突的 ESLint 规则。
# 使用 `eslint-config-prettier` 可以确保 ESLint 规则与 Prettier 的代码格式化规则保持一致，避免二者之间的冲突。
npm install eslint-config-prettier@8.5.0 -D
# 这是一个 ESLint 插件，它将 Prettier 应用到 ESLint 中。
# 它会使用 Prettier 来格式化代码，并将格式化结果作为 ESLint 的一项规则来检查代码。
# 使用 `eslint-plugin-prettier` 可以在代码检查的同时，自动格式化代码，使其符合 Prettier 的规则。
npm install eslint-plugin-prettier@4.0.0 -D
```

## 官方文档
[https://zh-hans.eslint.org/](https://zh-hans.eslint.org/) <br/>
[https://eslint.org/](https://eslint.org/)

## 配置文件
```js
// .eslintrc.js
module.exports = {
  // 指定环境
  env: {
    // 可以使用浏览器的全局变量
    browser: true,
    // 添加所有 ECMAScript 2021 的全局变量，并自动将解析器选项 ecmaVersion 设置为 12
    es2021: true,
    // 添加node全局变量
    node: true
  },
  // 自定义全局变量
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    $confirm: 'readonly',
    $message: 'readonly',
    $notify: 'readonly',
    $alert: 'readonly',
    $storage: 'readonly',
    $loading: 'readonly',
    localStorage: 'off',
    sessionStorage: 'off'
  },
  // vue文件解析器
  parser: 'vue-eslint-parser',
  parserOptions: {
    // es 语法的版本
    ecmaVersion: 'latest',
    // 代码类型
    sourceType: 'module'
  },
  extends: [ 
    './.eslintrc-auto-import.json',
    // https://zh-hans.eslint.org/docs/latest/rules/ 推荐配置
    'eslint:recommended',
    // https://eslint.vuejs.org/
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    // https://github.com/prettier/eslint-plugin-prettier
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    // 校验prettier规则
    'prettier/prettier': 'warn',
    // 箭头函数规范
    'arrow-body-style': 'off',
    // 使用箭头函数作为参数传递
    'prefer-arrow-callback': 'off',
    // debugger
    'no-debugger': 'off',
    // 为空的代码块
    'no-empty': 'off',
    // 未使用的变量
    'no-unused-vars': 'off',
    // 强制使用===
    eqeqeq: ['error', 'always'],
    // 组件命名格式
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    // 组件参数格式
    'vue/max-attributes-per-line': 'off',
    // 单个标签内容格式
    'vue/singleline-html-element-content-newline': 'off'
  }
}
```
```bash
# .eslintignore [可选]  要忽略检查的文件
dist
node_modules
package.json
```
~~~bash
# .prettierignore [可选]  要忽略格式化的文件
dist
node_modules
package.json
~~~

```js
// vite.config.js
export default defineConfig(({ mode, command }: ConfigEnv) => {
  return {
    plugins: [
      AutoImport({
        // 自动导入配置开启eslintrc，避免变量未定义报错
        eslintrc: {
          enabled: true,
        },
        imports: ['vue', 'vue-router', 'pinia'],
        dts: true,
      }),
    ],
  }
})
```

## 忽略规则
```js
alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert('foo');

alert('foo'); /* eslint-disable-line no-alert */

/* eslint-disable-next-line no-alert */
alert('foo');
```

## 命令

```json
"script": {
  "lint": "eslint . --ext --fix .vue,.js"
}
```

## 命名概要

常使用`--fix`、`--ext`

::: tip 示例

多次指定同一选项，每次接收一个不同的参数。

将参数列表用逗号分隔，一次传给选项。

~~~bash
eslint --ext .jsx --ext .js lib/

eslint --ext .jsx,.js lib/
~~~

:::

### 基本配置

- `--no-eslintrc`：禁用 `.eslintrc.*` 和 `package.json` 文件中的配置。
- `-c`, `--config`：该选项允许你为 ESLint指定一个额外的配置文件。
- `--env`：用于指定环境。该选项只能启用环境，不能禁用在其它配置文件中设置的环境。要指定多个环境的话，使用逗号分隔它们，或多次使用这个选项。
- `--ext`：可以指定在指定目录中搜索JavaScript文件时，ESLint将使用哪些文件扩展名。默认扩展名为`.js`。
- `--global`：用于定义全局变量。任何指定的全局变量默认是只读的，在变量名字后加上 `:true` 后会使它变为可写。要指定多个变量，使用逗号分隔它们，或多次使用这个选项。

### 指定规则和插件

- `--rulesdir`：该选项允许指定另一个加载规则文件的目录。
- `--plugin`：用于指定一个要加载的插件。可以省略插件名的前缀 `eslint-plugin-`。
- `--rule`：该选项指定要使用的规则。这些规则将会与配制文件中指定的规则合并。定义多个规则时使用逗号分隔它们，或多次使用这个选项。

### 解决问题选项

- `--fix`：该选项指示 ESLint 试图修复尽可能多的问题。修复只针对实际文件本身，而且剩下的未修复的问题才会输出。
- `--fix-dry-run`：该选项与 `--fix` 有相同的效果，唯一一点不同是，修复不会保存到文件系统中。
- `--fix-type`：该选项允许你在使用 `--fix` 或 `--fix-dry-run` 时指定要应用的修复的类型。修复的三种类型是`problem`、`suggestion`、`layout`。

### 忽略文件选项

- `--ignore-path`：该选项允许你指定一个文件作为 `.eslintignore`。默认情况下，ESLint 在当前工作目录下查找 `.eslintignore`。
- `--no-ignore`：该选项禁止排除 `.eslintignore`、`--ignore-path` 和 `--ignore-pattern` 文件中指定的文件。
- `--ignore-pattern`：该选项允许你指定要忽略的文件模式，除了 `.eslintignore` 中的模式之外。可以重复该选项以提供多个模式。

### 使用标准输入选项

- `--stdin`：该选项告诉 ESLint 从 STDIN 而不是从文件中读取和检测源码。
- `--stdin-filename`：该选项允许你指定一个文件名去处理 STDIN。当你处理从 STDIN 来的文件和有规则依赖于这个文件名时，这会很有用。

### 处理警告选项

- `--quiet`：该选项允许你禁止报告警告。如果开启这个选项，ESLint 只会报告错误。
- `--max-warnings`：该选项允许你指定一个警告的阈值，当你的项目中有太多违反规则的警告时，这个阈值被用来强制 ESLint 以错误状态退出。

### 其他

- `--init`：该选项将会配置初始化向导。它被用来帮助新用户快速地创建 `.eslintrc` 文件，用户通过回答一些问题，选择一个流行的风格指南，或检查你的源文件，自动生成一个合适的配置。
- `--debug`：该选项将调试信息输出到控制台。
- `-h`, `--help`：该选项会输出帮助菜单，显示所有可用的选项。当有这个选项时，忽略其他所有选项。
- `-v`, `--version`：该选项在控制台输出当前 ESlint 的版本。当有这个标记时，忽略其他所有标记。
- `--print-config`：该选项输出传递的文件使用的配置。当有这个标记时，不进行检测，只有配置相关的选项才是有效的。
