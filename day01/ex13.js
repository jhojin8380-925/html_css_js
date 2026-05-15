//기타 제어문

// 1) break 문
// 1 ~ 10  까지 중 5개까지 출력
for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let i = 1; i < 10; i++){
    if(i === 5){
        continue
    }
    console.log(i);
    
}