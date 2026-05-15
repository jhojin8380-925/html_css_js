// 콜백 함수 : 다른 함수의 매개변수에 전달되는 함수

function calculate(num1, num2, callback){
    // num1, num2 : 두 숫자를 전달받을 매개변수
    // callback : 콜백함수를 전달받을 매개변수
    callback(num1, num2);
}

function add(num1, num2){
    console.log(num1 + num2);
    
}

// calculate(10, 20, add)


function mul(num1, num2){
    console.log(num1 * num2);
    
}
// calculate(10, 20, mul);

// <콜백함수 실습>
// 상품명, 가격, 개수를 전달받은 뒤 ,전체 금액을 출력한다
// 1) 상품명과 가격, 개수는 pay()함수에 전달받는다
// 2) print()함수에서는 상품명과 전체 금액을 전달받아 출력
// 3) pay() 함수는 print() 함수를 callback 으로 전달받는다
// pay()를 주함수로 print()를 콜백함수로 사용  

function pay(product, price, count, callback){
    callback(product, price, count)
}


function print(product, price, count){
    console.log(product, price * count);
}

pay("사과", 1000, 3, print)


// 즉시 실행 함수
// (function(){
//     console.log("hi");
// })();

(function(x, y){
    console.log(x + y);   
})(10, 20);