# TonyaPuzzle
>后台管理框架設計語言 及 UI組件庫。  
>未來更新將會支持 前台框架。
 
## 特性
- 簡易上手，開箱即用
- 使用原生H5, CSS3, JS開發，通用性高
- 4的倍數，偶數思維
- 模組化

## 內容包括
- TonyaPuzzle
  - UI組件庫
- TonyaPuzzle Plus
  - 后台及前台框架
- TonyaPuzzle icon
- TonyaPuzzle Charts

> 準備 語言轉換功能 (䌓簡英)

## 規範
提升統一性，降低開發難度，方便更新迭代a

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