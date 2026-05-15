

let testButton = document.querySelectorAll(".img-box > button");
let bigImgWrap = document.querySelector(".big-img-wrap");

console.log(testButton);
console.log(bigImgWrap);

for(let i = 0; i < testButton.length; i++){
    //모든 버튼에 이벤트 설정
    testButton[i].addEventListener("click", function(){
        //data-src 속성 활용
        // 개발자가 필요한 데이터를 저장하는 속성
        let src = this.getAttribute("data-src");
        console.log(src);
        
        let bigImg = document.querySelector(".big-img");
        bigImg.setAttribute("src", src);

        bigImgWrap.style.display = 'flex';
    })

}

bigImgWrap.addEventListener("click", function(){
    this.style.display = "none";
})