// promise 체이닝
// <커피 주문 작업>

console.log("===== 주문 시작 =====");

// 각 단계를 Promise로 만들어 순서대로 연결
new Promise(function(resolve){
    // 1. 주문접수
    setTimeout(() => {
        console.log("1. 주문접수 완료");
        resolve(); // 다음 작업 (then)으로 넘어간다
    }, 1000);

})
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(() => {
                console.log("2. 결제 완료");
                resolve();
            }, 1000);
        });
    })
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(() => {
                console.log("3. 포인트 적립 완료");
                resolve();
            }, 1000);
        });
    })
    .then(function(){
        console.log("===== 주문완료 =====");
    })