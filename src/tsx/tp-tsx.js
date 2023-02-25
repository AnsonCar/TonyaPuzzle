// TemplateSyntax 模板語法
function data(elementName, dataSet) {
    // 1. 取得標簽
    let elementText = document.querySelector(elementName).innerHTML; 
    
    // 2. 取得模板變量及名稱
    // 2.1 文字模板 正規表達式: {{}}內容為 英文或數字
    let textTemplate = checkTemplate(/{{[\u4E00-\u9FA5A-Za-z0-9_]*}}/g);
    let textTemplateName = getTemplateName(textTemplate);

    // 返回元素
    changeText();
    
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