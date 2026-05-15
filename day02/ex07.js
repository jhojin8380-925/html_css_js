const user1 = {
    name : "홍길동",
    age : 20,
    address : "대전광역시",
    introduce : function(){
        console.log("안녕하세요~!");
    } 
};

const user2 = {
    name : "짱구",
    age : 19,
    address : "서울특별시",
    introduce : function(){
        console.log("안녕");
    } 
};

// 객체 안에 객체가 프로퍼티로 들어갈 수 있다
const site = new Object(); // => 빈 객체 생성 
console.log(site);
site.user1 = user1;
site.user2 = user2;

console.log(site);

// 첫번째 user 의 이름 가져오기

console.log(site.user1);
console.log(site.user1.name);
// .(~의, ~안에) : 접근 연산자(하위 연산자)
