let btn = document.getElementById("btn-load");
let resultBox = document.getElementById("result-box");

// 버튼 클릭 시 게시글 1개를 가져와 화면에 출력한다
btn.addEventListener("click", async function () {

    // 버튼을 클릭하면 로딩 메시지를 먼저 보여준다
    resultBox.innerHTML = "<p>데이터를 불러오는 중입니다...</p>";

    try {
        // 1단계 : 서버에서 데이터를 가져온다
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        // 2단계 : 자바스크립트 객체로 변환한다
        let data = await response.json();

        // 3단계 : 가져온 데이터로 카드 형태의 HTML을 만들어 화면에 출력한다
        resultBox.innerHTML = `
            <div class="card">
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            </div>
        `;

    } catch (error) {
        resultBox.innerHTML = "<p>데이터를 불러오는데 실패했습니다.</p>";
        console.log(error);
    }
});