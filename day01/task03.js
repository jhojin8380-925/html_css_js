    let name = prompt("이름을 입력")
    let point = prompt("자바스크립트 점수 입력")
    let result = "";

    if(point >= 90){
        result = "A";
    } else if(point >= 80){
        result = "B";
    } else if(point >= 70){
        result = "C";
    } else if(point >= 60){
        result = "D";
    } else{
        result = "F";
    }

    with(document){
        write(`<h1>성적 관리 프로그램</h1>`)
        write(`<br>`)
        write(`<div>학생 이름 : ${name}</div>`)
        write(`<br>`)
        write(`<div>자바스크립트 점수 : ${point}</div>`)
        write(`<br>`)
        write(`<div>학점 : ${result}학점</div>`)
    }
