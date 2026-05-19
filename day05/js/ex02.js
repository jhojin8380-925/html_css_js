
// 동기 vs 비동기

// 1) 동기 방식 - 코드가 순서대로 실행된다
// console.log("1번 : 주문 접수");
// console.log("2번 : 커피 제조 중...");
// console.log("3번 : 커피 완성! 픽업!");

console.log("1번 : 주문 접수");

setTimeout(function(){
    // 이 안의 코드는 3초 뒤에 실행
    console.log("2번 : 커피 완성");
}, 3000);

// 먼저 처리
console.log("3번 : 자리에 앉아서 대기 중...");


