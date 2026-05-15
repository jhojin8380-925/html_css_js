// <객체 실습>
// 객체를 사용한 성적 관리 프로그램
// 프로그램에 아래 3명의 학생의 정보를 등록

//프로그램 객체를 만들고 각 학생을 프로퍼티로 추가한다
//학생마다의 점수(포인트)를 출력

const user1 = {
    name : "둘리",
    age : 5,
    point : 80
}

const user2 = {
    name : "도우너",
    age : 6,
    point : 50
}

const user3 = {
    name : "또치",
    age : 5,
    point : 90
}

const student = new Object();

student.user1 = user1;
student.user2 = user2;
student.user3 = user3;

for(let key in student){
    console.log(student[key].name);
    console.log(student[key].point);
    
}


