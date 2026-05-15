let modalBox = document.querySelector(".modal-box");
let loginClickBox = document.querySelector(".login-click-box");
let closeBtnWarp = document.querySelector(".close-btn-warp");
let closeBtn = document.querySelector(".close-btn");

loginClickBox.addEventListener('click', function(){
    modalBox.style.display = 'flex';
})
loginClickBox.addEventListener('mouseover', function(){
    loginClickBox.style.backgroundColor = 'yellow';   
})
loginClickBox.addEventListener('mouseout', function(){
    loginClickBox.style.backgroundColor = 'white';   
})

closeBtnWarp.addEventListener('click', function(){
    modalBox.style.display = 'none';
})

closeBtn.addEventListener('mouseover', function(){
    closeBtn.style.backgroundColor = 'brown';
})

closeBtn.addEventListener('mouseout', function(){
    closeBtn.style.backgroundColor = 'burlywood';
})