// 동적 바인딩 : 저장되는 값에 따라 자료형이 동적으로 결정된다
var data = 10;

console.log(data);
console.log(typeof data);

var age;
console.log(age);

//hoisting(호이스팅) : 선언의 위치에 상관없이 존재하면 메모리에 할당
console.log(data2);
var data2 = 10;
console.log(data2); //초기화는 코드 실행 단계에서 실행됨

var data3 = '수정 금지';
// data3 = '안녕';
// let, const를 사용하는 것이 권장된다
console.log(data3);

// +) 상수 : 값을 저장하면 변경할 수 없는 저장공간
// - 자바 : final 자료형 상수명; ex) final int num = 10;


const data4 = 100;
// data4 = 50; // 오류 발생 상수는 변경 안됨
console.log(data4);
