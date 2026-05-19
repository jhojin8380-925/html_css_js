// fetch api

// 게시글 1개 가져오기 
async function fetchPost(){
    try{
        // 오류가 발생할 수 있는 문장
        // 1단계 : 해당 주소로 데이터를 요청한다
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")

        // 2단계 : 받아온 응답(데이터)을 자바 스크립트 객체로 반환
        // => json
        let data = await response.json();

        // 3단계 : 결과 확인
        console.log(data);
        console.log("제목 : " + data.title);
        console.log("내용 : " + data.bdoy);
        
    } catch(error){
        // try에서 오류가 발생했을 때 실행할 문장
        // => 데이터를 가져오지 못했을 때
        console.log("데이터를 가져오는데 실패했습니다 : " + error);
        
    }
}

//함수 호출
fetchPost();
