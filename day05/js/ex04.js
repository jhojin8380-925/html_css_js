// promise 객체
// : 비동기 결과를 나중에 받게하는 객체

// <온라인 쇼핑 주문> 

// 쇼핑 주문 처리하는 promise 객체 생성
let orderPromise = new Promise(function(resolve, reject){
    console.log("주문 접수중...");
    
    // 2초 뒤에 주문이 완료
    setTimeout(() => {
        let isSuccess = false; // 작업 실패 여부

        if(isSuccess){
            resolve("상품이 도착했습니다!"); // 성공 => then 으로 전달 
        } else{
            reject("배송 실패! 주소 확인"); // 실패 => catch 으로 전달
        }

    }, 2000);    
});

// promise 결과 처리
orderPromise
    .then(function(result){
        // resolve() 가 호출되면서 실행
        console.log("성공 : " + result);
    })
    .catch(function(error){
        // reject()가 호출
        console.log("실패 : " + error);
        
    })