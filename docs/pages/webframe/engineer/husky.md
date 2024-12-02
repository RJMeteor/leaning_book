---
title: husky Git钩子
author: RJMeteor
createTime: 2024/12/02 04:41:42
permalink: /webframe/husky/
---
## 安装

::: important 说明

`lint-staged`：检查暂存区

`@commitlint/config-conventional`：规定提交代码消息书写规范

` @commitlint/cli`：@commitlint/cli 是一个命令行工具，用于校验 Git 提交信息是否符合规范。它通常与 Husky 和 lint-staged 配合使用，以在提交代码前对提交信息进行校验，从而确保提交信息的格式和内容符合项目规范和约定。@commitlint/cli 遵循 Conventional Commits 规范，可以自定义配置校验规则。它支持多种校验规则，例如校验提交信息的类型、描述和主体等，并可以在不同的提交阶段执行不同的校验规则。例如，在提交代码前只检查代码格式和 lint 检查，而在合并代码时进行更全面的提交信息校验。

:::

```bash
npm install husky lint-staged @commitlint/cli @commitlint/config-conventional -D
```
## 文档
- [https://typicode.github.io/husky/zh/](https://typicode.github.io/husky/zh/)
- [https://www.npmjs.com/package/lint-staged](https://www.npmjs.com/package/lint-staged)
- [https://www.npmjs.com/package/@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
## package.json配置
```json
{
  "script": {
    "prepare": "husky",
    "lint-staged": "lint-staged",
  },
  "lint-staged": {
    "*.{js,vue}": ["eslint --fix", "prettier --write"]
  }
}
```

## husky初始化

会在项目根目录下生成husky相关文件夹

```bash
npx husky init
```

- `pre-commit`: 在执行 git commit 命令时，在提交被创建之前触发。它允许你在执行提交之前自定义一些操作，例如代码风格检查、代码静态分析、单元测试等。

- `prepare-commit-msg`：在提交消息编辑器打开之前触发，如果使用-m传递提交信息，则不会触发该钩子

- `commit-msg`: 它在执行 git commit 命令时，编辑提交信息之后、提交之前触发。具体来说，commit-msg 钩子会在提交信息（commit message）被写入提交文件（如 .git/COMMIT_EDITMSG）后被触发。

- `post-commit`: 在执行 git commit 命令时，在提交被创建之后触发。

- `pre-push`：在执行 git push 命令之前触发

- `post-update`：在执行 git push 命令后，远程仓库中的更新已成功推送到目标仓库后触发。

- `pre-receive`：运行在服务端，在远程仓库接收推送操作时，在所有分支引用更新之前触发

- `update`：运行在服务端，在执行 git push 命令后，远程仓库中的更新被成功推送到目标仓库，在每个分支引用被更新之前触发，pre-receive 先于 update。

- `pre-applypatch`：在应用 patch 到工作目录之前触发。

- `applypatch-msg`: 在 git 应用 patch 时被触发。具体来说，applypatch-msg 钩子会在 git 应用补丁到工作目录之前，对补丁的提交信息（commit message）进行处理。

- `pre-rebase`：在执行 git rebase 命令之前触发

- `pre-merge-commit`：在执行合并操作之前触发。具体来说，当你执行 git merge 命令时，git 将会在执行合并操作之前触发 pre-merge-commit 钩子。

- `push-to-checkout`：运行在服务端，在客户端强制推送到当前检出分支时触发。

- `fsmonitor-watchman`: fsmonitor-watchman 是一个可选的特性，git 可以通过 Watchman 服务来实现高效的文件系统监视功能。执行 git 的一些操作，比如 git status、git diff、git commit、git pull 等，需要检查文件系统的状态，在较大的代码库中，每次使用这些操作都会将整个项目文件夹检查一遍，频繁使用这些操作会导致较长时间的耗时，git 可以利用 WatchMan 提供的高效文件系统监视功能，从而减少状态检查操作的耗时。要使用 WatchMan，首先确保系统上已经安装了 Watchman ，并且 git 版本支持该特性。然后，通过配置 git，启用 core.fsmonitor 选项，并将其设置为 Watchman 来启用该特性。watchman 通过减少不必要的操作来提高文件系统的检测性能，在检测时只关注文件变化的部分，而不是每次检测都将所有的项目文件都遍历一遍。fsmonitor-watchman 会在你执行任何与文件系统变更相关的 git 操作和文件系统变化时触发。

- `sendemail-validate`：是 git 的一个配置选项，要想将其开启 sendemail-validate，可以通过 git config --global sendemail.validate true 设置，该选项的默认值取决于 git 版本。sendemail-validate 钩子在邮箱被发送之前调用。

## commitlint配置

~~~js
// .commitlintrc.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
~~~

::: tip 案例

~~~js
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				// 编译相关的修改，例如发布版本，对项目构建或者依赖的改动
				'build',
				// 新功能(feature)
				'feat',
				// 修复bug
				'fix',
				// 更新某功能
				'update',
				// 重构
				'refactor',
				// 文档
				'docs',
				// 构建过程或者辅助工具的变动,如增加依赖库等
				'chore',
				// 不影响代码运行的变动
				'style',
				// 撤销commit,回滚到上一个版本
				'revert',
				// 性能优化
				'perf',
				// 测试(单元,集成测试)
				'test',
			],
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 74],
	},
};


~~~

:::

## 脚本文件
```bash
# .husky/commit-msg 执行效验提交消息命令
npx --no -- commitlint --edit ${1}
```
```bash
# .husky/pre-commit 执行package.json 中 lint-staged命令
npx lint-staged
```