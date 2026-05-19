// 베너 만들기

// 1) 필요한 요소 가져오기

let $slideBox = $(".slide-box");
let $slideImgs = $(".slide-img");

// 2) 슬라이드 배너에 필요한 변수
// (1) 전체 화면 슬라이드 너비
let slideWidth = 800;
// (2) 슬라이드 이미지 인덱스 번호
let currentIdx = 0;
// (3) 총 슬라이드 이미지 수
let slideCnt = $slideImgs.length;

// console.log($slideImgs);
// console.log("slideCnt : " + slideCnt);

//  checkEnd() 함수 호출
checkEnd();

// 3) 이벤트 정의
// (1) next 버튼을 누르면 다음 이미지(화면)
$('.next').on("click", moveNext)

// 함수 정의
function moveNext(){
    // console.log("next 클릭!");
    currentIdx++;
    $slideBox.css('left', -(currentIdx * slideWidth));
    $slideBox.css("transition", "0.5s ease");
    checkEnd();
}

function moveFirst(){
    currentIdx = 0;
    checkEnd();
    $slideBox.css("transition", "none");
    $slideBox.css("left", "0")
}

// (2) prev 버튼을 누르면 이전 이미지 (화면)

$('.prev').on("click", function() {
    // console.log("next 클릭!");
    currentIdx--;
    
    $slideBox.css('left', -(currentIdx * slideWidth));
    $slideBox.css("transition", "0.5s ease");
    checkEnd();
})

// (3) 처음 이미지와 마지막 이미지 화살표 감추기
function checkEnd(){
    if(currentIdx <= 0){
        $('.prev').css("display", "none");
    } else{
        $(".prev").css("display", "block");
    }

    if(currentIdx >= 2){
        $('.next').css("display", "none");
    } else{
        $('.next').css("display", "block");
    }
}

// setTimeout은 매개변수로 넘겨준 시간 뒤에 핸들러 함수를 실행
// setTimeout(function(){
    // alert("setTimeout")
// }, 1000);  // 1초 뒤에 실행

// setInterval(function(){
//     alert("setInterval!");
// }, 1000);

setInterval(function(){
    // 마지막 슬라이드 화면인 경우 => 다시 처음으로
    if(currentIdx == slideCnt - 1){
        moveFirst();
    } else{
        moveNext();
    }
}, 3000);