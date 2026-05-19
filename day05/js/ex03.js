console.log("===== 주문 시작 =====");

// 1단계 : 주문 접숙 (1초 뒤)

setTimeout(function(){
    console.log("1. 주문 접수 완료");

    // 2단계 : 결제 처리( 1초 뒤)
    setTimeout(() => {
        console.log("2. 결제 완료");
        
        // 3단계 : 포인트 적립(1초 뒤)
        setTimeout(() => {
            console.log("3. 포인트 적립 완료");
            
            // 4단계 : 영수증 출력
            setTimeout(() => {
                console.log("4. 영수증 출력 완료");
                console.log("===== 주문 완료 =====");
                
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000)
