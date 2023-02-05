// TemplateSyntax 模板語法
function data(elementName, dataSet) {
    // 1. 取得標簽
    let elementText = document.querySelector(elementName).innerHTML; 
    let elementLoop = checkLoop();
    console.log(elementLoop);

    // 2. 取得模板變量及名稱
    // 2.1 文字模板 正規表達式: {{}}內容為 英文或數字
    let textTemplate = checkTemplate(/{{[\u4E00-\u9FA5A-Za-z0-9_]*}}/g);
    let textTemplateName = getTemplateName(textTemplate);

    // 返回元素
    changeText();


    // 1.1 檢查 for loop 指令
    function checkLoop() {
        return elementText.match(/<[^/](\S*?)[^>]*(tp-for\s?=\s?"\s?[A-Za-z]+\sin\s[A-Za-z]\s?")(\S*?)[^>]*>/g);
    }
    function loopHTML() {
        
    }
    // 2. 取得 模板變量
    function checkTemplate(template) {
        return elementText.match(template);
    }
    // 2. 取得 模板變量名稱
    function getTemplateName(template) {
        let templateNameArray = [];
        for (t of template){
            templateNameArray.push(t.substring(2, t.length-2));
        }
        return templateNameArray;
    }

    // 文字插值 Text Interpolations
    function changeText() {
        let num = 0;
        textTemplate.forEach(t => {
            document.querySelector(elementName).innerHTML = document.querySelector(elementName).innerHTML.replace(t, dataSet[textTemplateName[num++]]);
        });
    }
}



// 原始HTML (Raw HTML)
// <p><b>Text</b></p>



// 數字/三元
// {{ 1 + 1 }}
// {{0 > 1 ? "Yes" : "No"}}
// +, -, * ,/, **, %, ++, --, ()
// // 2.2 數字模板 正規表達式: {{}}內容為 數字及運算符 
// let numTemplate =  checkTemplate(/{{(\s*)((\-|\+)?\d+(\.\d+)?)+(\s*)([\+?|\-?|\*{0,2}|\/?|\%?]+(\s*)((\-|\+)?\d+(\.\d+)?)+(\s*)((\s*)[\+?|\-?|\*{0,2}|\/?|\%?]+(\s*)((\-|\+)?\d+(\.\d+)?)+(\s*))*)*}}/g);
// let numTemplateName = getTemplateName(numTemplate);
//
// // Arithmetic operators Interpolations(算術運算插值)
// function countNumber(){
//     let numArray = [];
//     let radicand = /(\s*)[(\-|\+)?\d+(\.\d+)?]\*\*[(\-|\+)?\d+(\.\d+)?](\s*)/g;

//     for(n in numTemplateName){
//         console.log(numTemplateName[n].indexof(radicand));
//     };
// };