(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{372:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"chrome"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chrome"}},[t._v("#")]),t._v(" chrome")]),t._v(" "),e("ol",[e("li",[t._v("在Elements面板选择元素，在控制台用**$0**就可以获取到")]),t._v(" "),e("li",[t._v("重新请求接口，右键 Replay XHR， 或按一下R键")]),t._v(" "),e("li",[t._v("截长图 ctrl + shift+p  "),e("strong",[t._v("Capture full size screenshot")]),t._v("   full")]),t._v(" "),e("li",[t._v("截图选中元素 ctrl+shift+p "),e("strong",[t._v("Capture node screenshot")]),t._v("  node")]),t._v(" "),e("li",[t._v("引用上一次的执行结果  $_")]),t._v(" "),e("li",[t._v("用$ 和 $$ 代替 document.querySelector和 querySelectorAll")]),t._v(" "),e("li",[t._v("控制台安装npm包，先安装console Importer  chrome插件,设置插件，允许访问文件网址   安装包 $i('jquery')")]),t._v(" "),e("li",[t._v("chrome样式的吸色器，可以吸到浏览器外的颜色")]),t._v(" "),e("li",[t._v("css/js覆盖率  ctrl+shift+p  coverage")])]),t._v(" "),e("h2",{attrs:{id:"chrome插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chrome插件"}},[t._v("#")]),t._v(" chrome插件")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("ndm插件(Neat Download Manager)+网盘助手插件+百度网盘网页版 下载")])]),t._v(" "),e("li",[e("p",[t._v("vimium插件  浏览器快捷键")]),t._v(" "),e("p",[t._v("map w scrollUp\nmap s scrollDown\nmap a scrollLeft\nmap d scrollRight\nmap h previousTab\nmap j nextTab\nmap S scrollPageDown\nmap W scrollPageUp")])]),t._v(" "),e("li",[e("p",[t._v("ghelper插件 可翻墙")])]),t._v(" "),e("li",[e("p",[t._v("Tampermonkey")])]),t._v(" "),e("li",[e("p",[t._v("店查查")])])]),t._v(" "),e("h2",{attrs:{id:"调试技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试技巧"}},[t._v("#")]),t._v(" 调试技巧")]),t._v(" "),e("h3",{attrs:{id:"断点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#断点"}},[t._v("#")]),t._v(" 断点")]),t._v(" "),e("p",[t._v("有多个断点时，f8是跳断点")]),t._v(" "),e("p",[t._v("f10是跳函数，一行一行执行")]),t._v(" "),e("p",[t._v("f11是查看函数详情")]),t._v(" "),e("p",[t._v("f9是逐行执行，执行到函数会跳进去")]),t._v(" "),e("p",[t._v("ctrl+f8是暂停所有断点，方便刷新")]),t._v(" "),e("p",[t._v("pause on execptions  抛异常时断点")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/javascript/reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS调试参考"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"快捷键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("location "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  {'href':'xxx'}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复制变量值")]),t._v("\nctrl"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 切换面板\nctrl"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("shift"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("p 打开面板等功能\nctrp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("p 打开文件\n控制台可直接用 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" \n\n")])])]),e("h3",{attrs:{id:"elements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elements"}},[t._v("#")]),t._v(" Elements")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ctrl+c 可任意复制 Elements中的元素\nalt+ 点击： 全展开代码\n$0 复制当前选择的元素\n$_ 最近的值\n$('img') === document.querySelector('img')\n$$('img') === document.querySelectorAll('img')\nsources  ctrl+p 可打开任意源文件\n按住h可以隐藏元素，再按h就显示，截图隐藏敏感信息用。\n元素可拖拽,按 ctrl+ 上下箭头可移动元素。。。 ctrl+c ctrl+v ctrl+z 撤销\n样式中有个阴影编辑器，手机端rem不合适，还有各种编辑器，颜色，动画等\n可快速插入颜色，背景色，阴影，字体阴影等\nctrl+shift+p 可打开 quick source 看源码\n")])])]),e("h3",{attrs:{id:"console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#console"}},[t._v("#")]),t._v(" console")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("看源码时，可通过添加条件断点来console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 随时可以删除掉。线上代码也可以，前提是没压缩\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" href "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("href"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {href:'xxx'}  快捷键打起来不方便")]),t._v("\n      console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <li class="item">展开更多代码</li>')]),t._v("\n\t  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%c 123'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color:#f00'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n眼睛是实时 javascript表达式，有啥用？\n任意面板打开console  按 esc 显示 再按隐藏\nctrl"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("L")]),t._v(" 清屏\nfilter"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("system 隐藏system相关输出\n")])])]),e("h3",{attrs:{id:"network"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[t._v("#")]),t._v(" network")]),t._v(" "),e("p",[t._v("过滤器 larger-than:100k  mini  app.js")]),t._v(" "),e("p",[t._v("按 ctrl 可同时选择js /css 等")]),t._v(" "),e("p",[t._v("waterfall 展示请求的先后顺序，在http1.1上，Chrome每个主机最多允许六个同时TCP连接。")]),t._v(" "),e("p",[t._v("绿色表示从服务器接收第一个字节的时间。如果时间长，则使用CDN或优化数据库等")]),t._v(" "),e("p",[t._v("蓝色表示请求需要很长时间才能下载，如果时间长，用CDN或少请求")]),t._v(" "),e("h3",{attrs:{id:"代码段-sources-snippets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码段-sources-snippets"}},[t._v("#")]),t._v(" 代码段 sources->Snippets")]),t._v(" "),e("p",[t._v("ctrl+shift+p   snip 快速打开代码段")]),t._v(" "),e("p",[t._v("ctrl+p  ! 快速执行代码段")]),t._v(" "),e("h3",{attrs:{id:"other"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" other")]),t._v(" "),e("p",[t._v("自定义转换器  https://juejin.im/book/6844733783166418958/section/6844733783212589063")]),t._v(" "),e("p",[t._v("sensors 传感器 模拟经纬度 ctrl+shift+p 打开")]),t._v(" "),e("p",[t._v("Network conditions 模拟断网，还可以选择User agent")]),t._v(" "),e("p",[t._v("Coverage 可查看线上代码的使用率，不太实用。")]),t._v(" "),e("p",[t._v("workspace 把代码拉到chrome去编辑调试，可实时更新代码")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/book/6844733783166418958/section/6844733783187390477",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金小册"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome devTools"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),e("p",[t._v("ctrl+shift+p  Animations 检查动画  不会。。  "),e("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/inspect-styles/animations",target:"_blank",rel:"noopener noreferrer"}},[t._v("教程"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/dom#breakpoints",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM断点"),e("OutboundLink")],1),t._v(" 不会  "),e("a",{attrs:{href:"https://juejin.im/book/6844733783166418958/section/6844733783216766989",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM断点监听"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);