// input 이벤트

// 1) form 요소 가져오기

let form = document.querySelector("#form1");

// console.log(form);


function changeBg1(){
    document.querySelector("#name").style.backgroundColor = "yellow";
}

function clearBg2(){
    document.querySelector("#name").style.backgroundColor = "white";
}

function changeBg3(){
    document.querySelector("#age").style.backgroundColor = "blue";
}
// 3) 요소와 이벤트 핸들러 연결

form.addEventListener("focus", changeBg1, true);

form.addEventListener("blur", clearBg2, true);

form.addEventListener("focus", changeBg3, true);