# mathjax-module-async

#### 介绍

浏览器中使用的,

把 mathjax 转化成模块形式异步加载导出,并且不会污染全局变量

支持输入: asciimath,latex,mathml

支持输出: chtml

导出几个方法,把输入的数学公式,渲染成元素,添加到容器中,

不会在加载时自动渲染文档中所有公式

基于 MathJax 版本 3.2.0

加载了以下模块:

```json
[
    "startup",
    "core",
    "input/asciimath",
    "output/chtml",
    "input/tex-full",
    "input/mml",
    "output/chtml/fonts/tex"
]
```

由于使用了`Proxy`,所以支持的浏览器必须支持 ES2015

# 在线演示

https://mathjax-module-async.vercel.app/

#### 安装教程

```powershell

yarn add "@masx200/mathjax-module-async"
```

#### 使用说明

```js
import { rendermath, initmathjax } from "@masx200/mathjax-module-async";
```

# API

类型声明文件

https://github.com/masx200/mathjax-module-async/blob/master/lib/index.ts

## rendermath

异步方法,把输入的 数学 格式的文字渲染,并返回 html 字符串。

参数：`input`:数学公式的文本内容

参数：`type`：数学公式使用的语言是` "latex" | "mathml" | "asciimath"`之一

参数：`opts`:可选参数，传递给渲染函数`mathml2chtmlPromise,asciimath2chtmlPromise,tex2chtmlPromise`之一的参数，可以通过`MathJax.getMetricsFor`获取

返回值为`Promise<string>`,渲染后的数学公式的`html`文本。

## initmathjax

异步加载 MathJax 并返回 MathJax
