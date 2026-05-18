let colors = document.querySelectorAll(".color-input")
let texts = document.querySelectorAll("span")

// console.log(colors);
// console.log(texts);

// 2) 체크 박스 이벤트

for(let i = 0; i < colors.length; i++) {
    color[i].addEventListener("change", ()=>{
        // console.log(colors[i]);
        texts[i].style.color = colors[i].value;
    })
}