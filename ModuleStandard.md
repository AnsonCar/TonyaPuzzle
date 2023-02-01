# 組件規範 (Puzzle/Module) Standard
# Puzzle
- Frame
- topNav
- siderBAr
- main

# Size
## topNav
width: 100% 
height: 56px

### topNav_Logo
width: 224px
height: 100%

### topNavElement
width: auto 
height: 100%

# SideBar
width:
height:

# main_TimeTable

# font  字體
- 菜單標題
菜單標題字體大小:最小取 16px，最大取 20px。

- 正文標題
正文標題字體大小:最小取 24px，最大取 32px。

- 正文的字體
一般情況下，正文字體大小以 14px 為準，特殊情況下可以加粗或取 16px 大小的字體。
所有字體樣式顏色組合需要盡量通過 3:1 的 WCAG AA 標準。

# Button


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