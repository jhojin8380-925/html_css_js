// async/awiat

// 커피 주문 작업

// promise를 반환하는 함수
function processOrder(stepName){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve(stepName + "완료!");        
        }, 1000);
    })
}

// async/await로 순서대로 처리
async function startOver(){
    console.log("===== 주문시작 =====");
    
    let result1 = await processOrder("1. 주문 접수");
    console.log(result1);
    let result2 = await processOrder("2. 결제 완료");
    console.log(result2);
    let result3 = await processOrder("3. 포인트 적립 완료");
    console.log(result3);
    
}

startOver();