# mathjax-module-async

#### 介绍

把 mathjax 转化成模块形式异步加载导出,并且不会污染全局变量

支持输入:asciimath,latex,mathml

支持输出:chtml

导出三个方法,把输入的数学公式,渲染成元素,添加到容器中,

不会在加载时自动渲染文档中所有公式

# 在线演示

https://masx200.github.io/mathjax-module-async/test/

#### 安装教程

```powershell

yarn add "@masx200/mathjax-module-async"
```

#### 使用说明

```js
import "@masx200/mathjax-module-async/lib/index.css";
import {
  rendermathml,
  renderasciimath,
  renderlatex,
} from "@masx200/mathjax-module-async";
```

# API

## rendermathml

```ts
function rendermathml(input: string, container: HTMLElement): void;
```

把输入的 mathml 格式的文字渲染到元素，并添加到容器中

## renderasciimath

```ts
function renderasciimath(input: string, container: HTMLElement): void;
```

把输入的 asciimath 格式的文字渲染到元素，并添加到容器中

## renderlatex

```ts
function renderlatex(input: string, container: HTMLElement): void;
```

把输入的 latex 格式的文字渲染到元素，并添加到容器中
