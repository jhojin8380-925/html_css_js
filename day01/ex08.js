// if문

let age = 20;

// <if문 에제>
// 나이가 20살 이상이라면 성인 출력
// 그게 아니라 17살 이상이라면 고등학생입니다 출력
// 그것도 아니라 14살 이상이라면 중학생입니다 출력
// 조건이 모두 맞지 않다면 어린이 입니다 출력

if(age >= 20) {
    console.log("성인입니다.");
} else if(age >= 17){
    console.log("고등학생입니다.");
} else if(age >= 14){
    console.log("중학생입니다.");
} else{
    console.log("어린이입니다.");
}