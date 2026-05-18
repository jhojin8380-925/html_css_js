// 사이드바 1
let $li1 = $('li').eq(1);

$li1.click(()=>{
    $(".sidemenu1-nav").toggleClass("none1");
    console.log($(".sidemenu1-nav").attr("class"));
    
});
// 사이드바 2
let $li2 = $('li').eq(2);

$li2.click(()=>{
    $(".sidemenu2-nav").toggleClass("none2");
    console.log($(".sidemenu2-nav").attr("class"));
    
});

//사이드바의 사이드바
let $sli1 = $('.sidemenu1-nav').eq(0);

$sli1.click(()=>{
    $(".ssidemenu1-nav").toggleClass("snone1");
    console.log($(".ssidemenu1-nav").attr("class"));
});
