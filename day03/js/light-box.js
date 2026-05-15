let testImg = document.querySelectorAll(".test-img");
let bigImgWrap = document.querySelector(".big-img-wrap");

// console.log(testImg);
// console.log(bigImgWrap);

for(let i = 0; i < testImg.length; i++){
    testImg[i].addEventListener("click", function(){
        let src = this.getAttribute("src");
        // console.log(src);
        let bigImg = document.querySelector(".big-img")
        bigImg.setAttribute("src", src)
        bigImgWrap.style.display = "flex";


    })
}

bigImgWrap.addEventListener('click', function(){
    bigImgWrap.style.display = "none";
})