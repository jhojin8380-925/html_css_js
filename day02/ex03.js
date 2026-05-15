// 익명함수

// let 변수명 = function(매개변수){...};

let sayHello = function(){
    console.log("안녕하세요");
    
}

console.log(typeof sayHello);
console.log(sayHello);
// => sayHello 함수 자체를 출력, 내용은 표시되지 않고 함수 객체 자체가 출력

// 변수를 함수처럼 호출하여 사용
sayHello();

// < 익명함수 실습 >
// 2개의 숫자를 전달받아, 전달받은 숫자의 합을 반환하는 addNum 함수 생성
let addNum = function(num1, num2){
    return num1 + num2;
}

console.log(addNum(1, 2));

// 화살표 함수
// (매개변수, ...) => 실행할 문장;
// (매개변수, ...) => {리턴값};
let add = (num1, num2) => num1 + num2;

console.log(add(10, 20));

let sayHi = () => console.log(("Hello!"));
sayHi()