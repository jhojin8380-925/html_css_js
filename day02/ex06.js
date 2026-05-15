// 객체

// 객체에서는 const로 작성해도 내용이 수정 된다.
const user = {
    name : "홍길동",
    age : 20,
    address : "대전광역시",
    introduce : function(){
        console.log("안녕하세요~!");
    } 
};

console.log(user);
console.log(typeof user);

console.log(user.age);

// 객체.key(기존) = 값; => key에 해당하는  value가 수정됨
user.age = 21;
console.log(user);


// 원시타입의 const => 재할당이 안됨 (수정불가)
// const number = 10;
// number = 20;