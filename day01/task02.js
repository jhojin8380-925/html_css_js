// <연산자 실습>
// 본인 이름, 나이를 상수로 설정 후(삼항 연산자) 
const name = "정호진";
const age = 24;

// 나이가 19살 이상이면 '입장가능'
// 19살 미만이면 '입장불가'
const result1 = age >= 19? "입장가능" : "입장불가";

// 나이가 짝수면 '짝수'
// 나이가 홀수면 '홀수'
console.log(age);

const result2 = age % 2 == 0? "짝수" : "홀수";

// 콘솔 출력 결과
// [본인성함]님은 [나이]살이고 [입장여부] [홀수 or 짝수]
console.log(`${name}님은 ${age}살이고 ${result1} ${result2}`);

