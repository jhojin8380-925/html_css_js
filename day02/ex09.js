// 배열

let arr = [1, 'a', true];
// 요소의 타입이 달라도 상관 없다
console.log(arr);

// 배열 요소 접근
console.log(arr[1]);

arr[1] = 'hello';

console.log(arr);
console.log(arr.length);

// 없는 인덱스에 값을 저장하면 추가 됨
arr[5] = 10;
console.log(arr);

// 배열의 기능
// 배열명.push(값) : 배열의 끝에 값을 추가
arr.push(11);
console.log(arr);

// delete 는 값을 삭제한다
delete arr[0];
console.log(arr);

// 배열명.pop() : 마지막 요소를 삭제
arr.pop();
console.log(arr);







