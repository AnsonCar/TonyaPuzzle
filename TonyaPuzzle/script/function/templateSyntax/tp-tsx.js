// TemplateSyntax 模板語法

function data(elementName, dataSet) {
    // 1. 取得標簽
    let elementText = document.querySelector(elementName).innerHTML; 

    // 2. 取得模板變量
    // 2.1 文字模板
    let textTemplate = checkTemplate(/{{[\u4E00-\u9FA5A-Za-z0-9_]*}}/g);
    let textTemplateName = getTemplateName(textTemplate);
    // 2.2 數字模板
    let numTemplate =  checkTemplate();
    let numTemplateName = getTemplateName(numTemplate);

    // 返回元素
    changeText();

    // 檢查 模板
    function checkTemplate(template) {
        return elementText.match(template);
    }
    // 取得 模板變量
    function getTemplateName(template) {
        let templateNameArray = [];
        for (t of textTemplate){
            templateNameArray.push(t.substring(2, t.length-2));
        }
        return templateNameArray;
    }

    // 檢查 for loop 指令
    function checkLoop() {
        return elementText.match(/<[^/](\S*?)[^>]*(tp-for\s?=\s?"\s?[A-Za-z]+\sin\s[A-Za-z]\s?")(\S*?)[^>]*>/g);
    }

    // let textTemplate = checkTextTemplate();
    // let textTemplateName = getTextTemplateName();
    // 檢查 Text模板
    // function checkTextTemplate() {
    //     return elementText.match(/{{[\u4E00-\u9FA5A-Za-z0-9_]*}}/g);
    // }
    // 檢查 Text變量
    // function getTextTemplateName() {
    //     let templateNameArray = [];
    //     for (t of textTemplate){
    //         templateNameArray.push(t.substring(2, t.length-2));
    //     }
    //     return templateNameArray;
    // }

    // 文字插值 Text Interpolations
    function changeText() {
        let num = 0;
        textTemplate.forEach(t => {
            document.querySelector(elementName).innerHTML = document.querySelector(elementName).innerHTML.replace(t, dataSet[textTemplateName[num++]]);
        });
    }
}

// Arithmetic operators Interpolations(算術運算插值)
// +, -, * ,/, **, %, ++, --, ()
    // {{(\s*)[0-9]*(\s*)(\+|\-|\*\%)(\s*)[0-9]*(\s*)}}
    // {{(\s*)[(-?\d+)(\.\d+)]*(\s*)(\+|\-|\*\%)(\s*)[(-?\d+)(\.\d+)]*(\s*)}}
    // {{(\s*)(\-|\+)?\d+(\.\d+)?(\s*)[\+|\-|\*||/|%]*(\s*)(\-|\+)?\d+(\.\d+)?(\s*)}}

// 2 查看特殊指令
// 3 分析 變量內容 及 數量
// 4 返回更新
// 5 查看變量類型
// 6 替代內容
// 7 返回元素

// 原始HTML (Raw HTML)
// <p><b>Text</b></p>

// 數字/三元
// {{ 1 + 1 }}
// {{0 > 1 ? "Yes" : "No"}}