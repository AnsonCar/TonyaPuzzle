// TemplateSyntax
function data(name, inData) {
    // 1. 
    let element = getName(name);
    let elemantText = element.innerHTML;

    // 2.
    let cNum = findNum(elemantText);

    // 3. 
    changeText(inData);
    
    // 4. 取代內容
    element.innerHTML = elemantText;

    // 1. 引入 目標 大範圍
    function getName(name) {
        // 分辨 name 是否為 Id
        function isId(name) {
            return name.indexOf("#") !== -1 ? true : false;
        }
        // 分辨 name 是否為 Class
        function isClass(name) {
            return name.indexOf(".") !== -1 ? true : false;
        }
        // 取得HTML代碼
        if (isId(name)) {
            return document.getElementById(name.substring(1, name.length));
        } else if (isClass(name)) {
            return document.getElementsByClassName(name);
        } else {
            return document.querySelector(name);
        }
    }

    // 2. 查找 {{}} 出現次數
    function findNum( elemantText) {
        let num = 0;
        
        // 拿取 {{}} 位置   
        for (i in elemantText){
            if(elemantText[i] === "{" && elemantText[parseInt(i)+1] === "{"){
                num++
            }
            if(elemantText[i] === "}" && elemantText[parseInt(i)+1] === "}"){
                num++
            }
        }
        return parseInt(num/2);
    }

    // 3.  插值 Interpolations
    // 3.1 文字 Text {{title}}
    function changeText(inData) {
        for (let i = 0; i < cNum;i++){
            for(d in inData){
                elemantText = elemantText.replace("{{"+d+"}}",inData[d]);
            }
        };
    }
}