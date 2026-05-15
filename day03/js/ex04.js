
const input = document.querySelector("input[type='button']");
const p = document.querySelector('p')

input.addEventListener("click", function(){
    // p.style.fontSize = "30px";
    // p.style.border = "3px dashed magenta";
    // p.style.width = "100px"
    // p.style.backgroundColor = "pink"

    with(p.style){
        fontSize = "30px";
        border = "3px dashed magenta";
        width = "100px"
        backgroundColor = "pink"
    }
})