// 자바스크립트의 매개변수

// 1) 디폴트 파라미터(매개변수) :
// 매개변수에 값이 전달되지 않을 경우 초기값을 설정할 수 있다

// 아이디, 비밀번호, 이름을 전달받고 이름은 기본값을 '사용자'로 설정한다
function introduce(id, pw, name = '사용자'){
    console.log(id, pw, name);    
}

// 함수 호출
introduce("qwer", "1234")
introduce("qwer", "1234", "홍길동")

// 2) 가변 파라미터 : 함수 호출시, 몇개의 값이 전달될지 모를 때 사용
function add(...numbers){
    console.log(numbers, typeof numbers);
    // for(let i = 0; i < numbers.length; i++){
    //     console.log(numbers[i]);
        
    // }
    // 빠른 for문 사용시 변수는 인덱스 번호를 가져옴
    for(let i in numbers){
        // console.log(i)
        console.log(numbers[i]);
        
    }
}

add(1, 2, 3);