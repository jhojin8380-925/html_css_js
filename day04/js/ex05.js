// window

// 1) load 이벤트
// : 페이지 정보를 모두 읽어왔을 때 발생
// window.onload = () => {
//     alert("로드 이벤트 발생");
// }

// window.addEventListener("load", ()=>{
//     alert("로드 이벤트 발생");
// })

// 2) scroll 이벤트
// : 스크롤 위치가 바뀜녀 발생
// (1) 필요한 요소 가져오기
let main = document.querySelector("main")

// main의 배경색
// let color = main.getAttribute('style.background-color')
let color = main.style.backgroundColor;
// console.log(color);

// (2) 스크롤 이벤트
window.addEventListener("scroll", ()=>{

    //scrollY 프로퍼티는 현재 스크롤의 Y축 위치를 가져옴
    let scrollY = window.scrollY;
    console.log(scrollY);
    
    if(scrollY > 400){
        main.style.backgroundColor = "gold";
    } else if(scrollY > 200){
        main.style.backgroundColor = "blue";
    } else if(scrollY > 100){
        main.style.backgroundColor = "green";
    } else {
        main.style.backgroundColor = color;
    }
})
