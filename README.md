# TonyaPuzzle
UI組件庫
- TonyaPuzzle
- TonyaPuzzle Plus
- TonyaPuzzle icon
- TonyaPuzzle Charts

- 䌓簡英 轉換表

## 風格
- 擬物風
- Material Design / 扁平化

## 規範
> 提升統一性，降低開發難度，方便更新迭代

Theme 主題 
- 主色

color 顏色 (整体色彩不宜超过 3 种)(顏色代碼)
e.g. 定義 警句 的 功能色 (橙色 淡橙色) / 定義 錯誤 的 功能色 (橙色 淡橙色)

line-height 間距
Round 圓角 / border-radius 邊界半徑

框架設計
主流分辨率:
16:9 ：1920×1080、1600×900 、1366×768
16:10：1920×1200、1680×1050、1440×900

icon-size
20, 24, 40, 44

柵欄
布局
```
一个完整的web页面必须由以下三部分构成:
header 頭部
main 主體

统一屏幕尺寸的间距和跨平台的设计模式，给用户带来更好的体验感。

设计思考，有如下几点：

1.保证画布尺寸的一致性原则。

2.统一的网格单位。

3.统一的栅格系统。

4.视觉元素的统一和对齐等。

```

## 技術支援/名詞介詞
### Web Components
由三项主要技术组成:
1. Custom elements(自定義元素):  
一組 JavaScript API，允許您定義 custom elements 及其行為，然後可以在您的用戶界面中按照需要使用它們。

2. Shadow DOM(影子 DOM):  
一組 JavaScript API，用於將封裝的“影子”DOM 樹附加到元素（與主文檔 DOM 分開呈現）並控制其關聯的功能。通過這種方式，您可以保持元素的功能私有，這樣它們就可以被腳本化和样式化，而不用擔心與文檔的其他部分發生衝突。

3. HTML templates(HTML 模板):  
`<template>` 和 `<slot>` 元素使您可以編寫不在呈現頁面中顯示的標記模板。
然後它們可以作為自定義元素結構的基礎被多次重用。

### 常見的B端產品
- SAAS(Software as a Service)通常指第三方给企业的线上软件服务。
- CRM(Customer Relationship Management)企业管理客户的工具。
- OA(Office Automation)办公流程自动化工具。
- ERP(Enterprise Resource Planning)企业资源统一管理平台。
- CMS(Content Manage System)产品后台。

### 標準命名
頭:header
內容:content
尾:footer
導航:nav
側邊欄:sidebar
欄目:column
登錄條:loginbar
標誌:logo
廣告:banner
頁面主體:main 

熱點:hot
新聞:news
下載:download
子導航:subnav
菜單:menu
子菜單:submenu 

搜索:search
頁腳:footer
內容:content
註冊:regsiter 

功能命名：

標誌:logo
廣告:banner
登陸:login   
登錄條:loginbar  
註冊:regsiter   
搜索:search  
功能區:shop   
標題:title        
加入:joinus  
狀態:status   
按鈕:btn   
滾動:scroll   
標籤頁:tab   
文章列表:list   
提示信息:msg

一律用小寫(盡量用英文)


## 參考資料
Web Components 介紹
- [Web Components 維基百科](https://zh.wikipedia.org/zh-tw/Web%E7%BB%84%E4%BB%B6)
- [Mmdn Web docs Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

學習資料
- [Web Components 入门实例教程](https://www.ruanyifeng.com/blog/2019/08/web_components.html)
- [有没有用 Web Component 开发的前端框架？](https://www.zhihu.com/question/449639542)
- [编程三昧_Web Component](https://cloud.tencent.com/developer/user/8730813)
- [Web Component Sample code](https://stackblitz.com/edit/lit-element-todoapp?file=index.html,todo-input.ts,todo-items.ts)
---
Polymer組件庫
- [Google Polymer library(基於Web組件的程式庫)](https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview)
- [Polymer 簡介](https://ithelp.ithome.com.tw/articles/10156148)
---
Google Lit
- [Lit官網](https://lit.dev/)
- [LitElement - 如何使用 Web Component 技術來製作元件](https://blog.errorbaker.tw/posts/xiang/build-webcomponent-element/)
---
Ant Desgin
- [Ant Design 官網](https://ant.design/index-cn)
- [Ant Design Pro 官網](https://pro.ant.design/zh-CN)
- [Ant Design Pro 預覧](https://preview.pro.ant.design/dashboard/analysis)
---
  LayUI
- [layui 官網](https://layui.itze.cn/index.html)
OMI ADMIN
- [OMI ADMIN](https://omi.cdn-go.cn/admin/latest/index.html#/dashboard)
---
Pear Admin
- [Pear Admin Github](https://github.com/pearadmin)
- [Pear Admin Layui 預覧](http://layui.pearadmin.com/#)
---
HTML
- [input](https://www.w3schools.com/tags/tag_input.asp)
---
CSS
- [多方法解决设置width:100%再设置margin或padding溢出的问题](https://blog.csdn.net/weixin_34281537/article/details/91898089)
- [grid-area 属性](https://www.w3school.com.cn/tiy/t.asp?f=cssref_grid-area_named_4)
---
設計
- https://codepen.io/azouaoui-med/pen/wpBadb
- [B端产品从0到1设计规范](https://www.woshipm.com/pd/4647838.html)
- [Tab设计总结](https://www.xueui.cn/experience/app-experience/summary-of-tab-design.html)
- [B端产品设计规范](https://cloud.tencent.com/developer/article/1807553)
- [ICON设计规范之图标尺寸](https://www.woshipm.com/pd/4482973.html)