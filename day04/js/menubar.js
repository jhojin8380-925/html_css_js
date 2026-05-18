// 필요한 요소 가져오기

let $li = $('li').eq(1);
// console.log($li);
// 두번째 객체 가져옴

// 클릭 이벤트
$li.click(()=>{
    // console.log("클릭!");
    $(".sub-menu").toggleClass("none");
    console.log($(".sub-menu").attr("class"));
    // toggleClass("none")
    // 선택한 요소에 none클래스 속성이 있다면
    // 제거하고, none클래스 속성이 없다면 추가
});