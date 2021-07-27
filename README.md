# mathjax-module-async

#### 介绍
把mathjax转化成模块形式异步加载导出,并且不会污染全局变量

支持输入:asciimath,latex,mathml

支持输出:chtml

导出三个方法,把输入的数学公式,渲染成元素,添加到容器中

#### 安装教程

```powershell

yarn add @masx200/mathjax-module-async
```

#### 使用说明


```js
import "@masx200/mathjax-module-async/lib/index.css"
import { rendermathml, renderasciimath, renderlatex } from "@masx200/mathjax-module-async";
```