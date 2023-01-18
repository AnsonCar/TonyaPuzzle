// 輸出時間
function Time() {
    let d = new Date();
    let t = d.toLocaleTimeString();
    document.getElementById("Time").innerHTML = t;
}
let myVar = setInterval(function () { Time() }, 1000);

// 今日日期
function NowDate() {
    let date = new Date();
    let Year = date.getFullYear();
    let Month = date.getMonth();
    let Day = date.getDate();
    document.getElementById("Date").innerHTML = Year + "年" + (Month+1) + "月" + Day + "日";
}
NowDate();
// 今日日期2
document.getElementById("Date2").innerHTML = new Date().toLocaleDateString().split('/').join('-'); 

// 小Function, For我寫方便啲
// 一个函数如果没有使用 return 语句指定返回值，就会返回一个 undefined 值。
function print(data) {
    return document.write(data);
}
function println(data) {
    return document.write(data + "<br>");
}

// forLoop
println("ForLoop");
for (let i = 0; i < 10; i++) {
    println(i);
}
println("")
println("ifelse");
for (let i = 0 ; i < 10; i++) {
    if (i % 2 ==  0) {
        println(i);
    }else if ( i == 3) {
        println("I am 3")
    } else {
        println("sorry我係單數")
    }
}

println("");
println("三元運算");
for (let i = 0 ; i < 10; i++) {
    println(i % 2 == 0 ? i : "sorry我係單數");
}