// 자바 스크립트 객체

let obj = {
    num1 : 10, // 키 : 값 => 프로퍼티
    num2 : 20,
    name : "홍길동",
    sum : function(){
        return this.num1 + this.num2; //같은 객체의 멤버 사용 가능
    }
}; //세미클론 작성

// 객체 사용
// 1) .을 사용
console.log(obj.num1);
console.log(obj.sum());

// 2) []을 사용

console.log(obj['name']);

//프로퍼티 추가, 삭제
// 1) 프로퍼티 추가
// 객체명.key(기존 X) = 값;
obj.num3 = 2.2;
console.log(obj);

// 2) 프로퍼티 삭제
// delete 객체명.key
delete obj.num3;
console.log(obj);


