let foods = document.querySelectorAll(".food");
let result = document.querySelector(".result");


//  버튼의 이벤트 핸들러 정의
function radioEvent(element){
    element.addEventListener("change", ()=>{
        result.innerHTML = element.value;
        console.log(element.value)
    })
}

// 3) foods 요소에 함수 적용
for(let i = 0; i < foods.length; i++){
    radioEvent(foods[i]);
}