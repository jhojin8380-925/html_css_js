
let boxClick = document.querySelector('#click')
let boxOver = document.querySelector('#over')
let boxOut = document.querySelector('#out')
let boxOverOut = document.querySelector('#over-out')

//배경색을 초록색으로 변경하는 함수 정의
function changeBgGreen() {
    // boxClick.setAttribute('style', 'background-color : green;')
    this.setAttribute('style', 'background-color : green;')
    // this => 객체 자기 자신
    console.log(this);
}

function changeBgblue() {
    // 현재 이벤트가 걸린 요소의 스타일을 바꾸고 싶다면
    // 이벤트가 걸린 자기 자신을 의미하는 this를 사용!
    this.setAttribute('style', 'background-color : blue');
}

boxClick.addEventListener('click', changeBgGreen);
// boxOver.addEventListener('click', changeBgGreen);

// 일회성으로 사용할 이벤트
boxOver.addEventListener('mouseover', function(){
    this.setAttribute('style', 'background-color : red');
})

boxOut.addEventListener('mouseout', changeBgblue)

// addEventListener를 사용하면 하나의 요소에 여러 이벤트 사용

boxOverOut.addEventListener("mouseover", changeBgGreen)
boxOverOut.addEventListener("mouseout", changeBgblue)