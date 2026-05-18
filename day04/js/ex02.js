

let input1 = document.querySelector(".input-test1")
let input2 = document.querySelector(".input-test2")
let form = document.querySelector("form")

// 해당 요소가 포커스되면 이벤트 발생
input1.addEventListener("focus", () => {
    input1.style.backgroundColor = "blue";
})


// 포커스를 잃으면 발생
input1.addEventListener("blur", () => {
    input1.style.backgroundColor = "lightgray";
})

// keydown : 키보드를 누르는 동안 계속 발생(키가 눌리면 입력과 상관없이 발생 컨트롤)
// input2.addEventListener("keydown", () => {
//     console.log("down");
// });

// keypress : 키보드를 누르는 순간 발생(키보드로 무언가 입력되어야 발생)

// input2.addEventListener("keypress", () => {
//     console.log("press");
    
// })

// keyup : 키보드를 때는 순간 발생
// input2.addEventListener("keyup", () => {
//    console.log("keyup");
    
// });

// change : 요소의 상태가 변경되면 이벤트 발생
input2.addEventListener("change", () => {
    input2.style.backgroundColor = "lightgray";
});

// submit : form태그에 걸어준다
form.addEventListener("submit", ()=>{
    // submit 버튼은 페이지가 이동되므로
    // 콘솔창 확인이 어려움
    // console.log("submit");

    alert("submit~!!!")

})