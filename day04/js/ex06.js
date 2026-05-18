// jquery

//선택자 사용
// console.log($('.box2'));

let $box2 = $(".box2");
console.log($box2);

console.log($box2.parent()); // 부모인 main요소가
console.log($box2.parents()); // 조상인 main, body, html
console.log($box2.prev()); // 형인 box1이 선택됨
console.log($box2.next()); // 동생 선택
console.log($box2.nextAll()); // 동생들
console.log($box2.nextAll()[1]); // 동생들
console.log($box2.nextAll().eq(1));

// 인덱스 번호 1번 요소를 가져옴
console.log($(".div-box"));

$box2.html("<h1>html</h1>")
$(".box1").text("text")

$(".bod3").css("background-color", "gold")

let $input = $("input[type=text]");
console.log($input.attr("placeholder"));

$input.remoiveAttr("placeholder");

console.log($box2.prop('style'));

$box2.prop('style').backgroundColor = "red";


$input.on("change", ()=> {
    console.log(($input.val()));   
})

//  이벤트 =========

$(".box1").on("click", function(){
    // console.log(this);
    // this를 확인해보면 jquery 요소가 아니다
    // this.style.backgroundColor = "red";
    // 만약, jquery를 사용하고 싶다면
    // this를 jquery로 감싸야 한다
    $(this).css("background-color", "red");
});

$(".box3").on("click", (e)=>{
    // console.log(this);
    // jquery와 화살표 함수를 사용하면
    // this에는 이벤트가 걸린 요소가 아니라 
    // window 객체가 선택된다.
    // => 이런 경우, 매개변수를 활용하면
    // 해당 이벤트가 걸린 객체를 가져온다
    // console.log(e); // box3
    console.log(e.currentTarget);
    // 이벤트에서 객체에서 제공하는 프로퍼티 중 
    // currentTarget 또는 target을 사용하면
    // 이벤트가 걸린 요소를 가져올 수 있다
    // currentTarget : 현재 이벤트가 걸린 요소만 의미
    //              this와 비슷
    // target : 이벤트가 걸린 요소랑 자식까지 의미
    //         자식을 클릭해도 현재 요소의 이벤트를 발생시키려면
    //          target을 사용한다

    // currentTarget의 결과를 보면, jquery 객체가 아닌
    // 일반 요소이다
    // e.currentTarget.style.backgroundColor = "green";    

    // 만약, jquery를 사용하고 싶으면 요소를 다시
    // jquery로 감싼다
    $(e.currentTarget).css("background-color", "green");
})



