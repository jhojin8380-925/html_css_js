//html 요소를 id명으로 가져오기 

let title = document.getElementById('title');
console.log(title);

let divBox = document.getElementsByClassName('div-box');
console.log(divBox);
//Class로 요소를 가져오면 여러요소가 선택되므로
// 배열 형태로 가져오게 된다

//가져온 요소에서 특정 요소만 사용하고 싶다면 인덱스 번호를 사용
console.log(divBox[0]);

// querySelector를 사용하면 좀더 자유롭게 선택자를 사용하여
// 요소를 가져올 수 있다
let bgGreen = document.querySelector("#bg-green");
console.log(bgGreen);

// querySelectorAll 은 여러 요소를 가져온다
let divBorder = document.querySelectorAll(".div-border")
console.log(divBorder);

// --------------------
// 가져온 요소의 text가져오기
console.log(title.innerText);

// 가져온 요소의 text 수정하기

title.innerText = 'innerText사용!';
// title.innerText = "<div> innerText 사용!</div>"
// 태그는 적용되지 않음

// 가져온 요소의 text와 내부 태그까지 가져오기
console.log(bgGreen.innerHTML);
// 아무것도 없음
bgGreen.innerHTML = "<div> 내부에 div넣기!</div>"

// --------------------------------
// 요소의 특정 속성 가져오기
console.log(bgGreen.getAttribute('class'));

// 요소 속성 변경
bgGreen.setAttribute('style', "background-color : green")

// <실습>
// 나머지 div 2개도 DOM을 활용하여 id와 일치하는 background-color 변경

// 변수만들어서 적용
let bgRed = document.querySelector("#bg-red");
console.log(bgRed);

bgRed.setAttribute('style', "background-color : red")

let bgYellow = document.querySelector("#bg-yellow");
console.log(bgYellow);

bgYellow.setAttribute('style', "background-color : yellow")

// 바로 적용
// document.querySelector(#bg-red).setAttribute('style', 'background-color : red')
// document.querySelector(#bg-yellow).setAttribute('style', 'background-color : yellow')


// div-border 클래스를 가진 요소들은 테두리 두께를 2px 주고
// 5px 둥글게 만들기
let borders = document.querySelectorAll('.div-border');
console.log(borders);

// borders[0].setAttribute('style', 'border : 2px solid black', 'border-radius : 5px');

// 2) 속성 값 수정
for(let i = 0; i < borders.length; i++){
    borders[i].setAttribute('style', 'border : 2px solid black;', 'border-radius : 5px;')
}


// css stle 속성은 다음과 같이도 변경가능
// - 요소.style.속성명

// console.dir(bgGreen);

console.log(bgGreen.style);
console.log(bgGreen.style.border);
bgGreen.style.backgroundColor = 'green';

//setAttribute는 스타일을 모두 지우고 덮어쓰는 반면,
// style 프로퍼티를 사용하면 특정 프로퍼티에 직접 접근하여
// 수정 가능

//속성명은 그대로 사용하면 되지만 background-color 처럼
// - 가 포함된 속성명은 카멜 표기법으로 변환하여 사용







