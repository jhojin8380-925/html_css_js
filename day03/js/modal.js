
let navLogin = document.querySelector(".nav-login");

let modalBox = document.querySelector(".modal-box")

let xBox = document.querySelector(".x-box")

// 네비게이터의 로그인 버튼 클릭 이벤트
// => 모달창이 활성

navLogin.addEventListener('click', function(){
    modalBox.style.display = 'flex';
})

xBox.addEventListener('click', function(){
    modalBox.style.display = 'none';
})


// 자식 노드
xBox.addEventListener("mouseover", function(){
    // console.log(this.childNodes);
    // console.log(this.childNodes[1]);
    this.childNodes[1].style.color = 'tomato';
    
})

xBox.addEventListener("mouseout", function(){
    this.childNodes[1].style.color = 'black';
})