// Ul => BOX
let $slideUl = $(".slide-ul");
// Li => imgs
let $slideLi = $(".slide-li");

// 너비
let slideWidth = 800;
// 인덱스 번호
let currentIdx = 0;
// 이미지 수
let slideCnt = $slideLi.length;

checkEnd();

$('.next').on("click", moveNext)

function moveNext(){
    currentIdx++;

    $slideUl.css('left', -(currentIdx * slideWidth));
    $slideUl.css("transition", "0.5s ease");
    checkEnd();
}

function moveFirst(){
    // console.log("next 클릭!");
    currentIdx = 0;
    checkEnd();
    $slideUl.css("transition", "none")
    $slideUl.css("left", "0")
}


// 이벤트 정의 > 버튼 누르면 다음 이미지
$('.prev').on("click", function() {
    // console.log("next 클릭 !");
    currentIdx--;
    
    $slideUl.css('left', -(currentIdx * slideWidth));
    $slideUl.css("transition", "0.5s ease");
    checkEnd();
})


function checkEnd(){
    if(currentIdx <= 0){
        $('.prev').css("display", "none");
    } else{
        $(".prev").css("display", "block");
    }

    if(currentIdx >= 3){
        $('.next').css("display", "none");
    } else{
        $('.next').css("display", "block");
    }
}

setInterval(function(){
    // 마지막 슬라이드 화면인 경우 => 다시 처음으로
    if(currentIdx == slideCnt - 1){
        moveFirst();
    } else{
        moveNext();
    }
}, 3000);