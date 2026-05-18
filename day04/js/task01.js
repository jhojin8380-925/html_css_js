let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let textFocus = document.querySelector(".text-focus")
let textInner = document.querySelector(".text-inner")
let food = document.querySelectorAll(".food")
let selectFood = document.querySelector(".select-food")

text1.addEventListener("focus", ()=>{
    textFocus.innerText = "작성중"; 
})
text1.addEventListener("blur", ()=>{
    textFocus.innerText = "작성완료!"; 
})

function text2Inner(element){
    element.addEventListener("keyup", ()=>{
        textInner.innerText = element.value;
        console.log(element.value);
        //실제 데이터를 가져올려면 value 를 사용해야함 
    })
}

text2Inner(text2);

function radioEvent(element){
    element.addEventListener("change", ()=>{
        selectFood.innerHTML = element.value;
        console.log(element.value)
    })
}

for(let i = 0; i < food.length; i++){
    radioEvent(food[i]);
}

// items.forEach(radioEvent)