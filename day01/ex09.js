// switch문

let num = 1;

switch(num){
    case 1 : 
        // num에 저장된 값이 1일 때 실행
        console.log("num은 1입니다");
        break; // switch문의 {} 중괄호 영역 탈출
    
    case 2 :
        //num에 저장된 값이 2일때 실행
        console.log("num은 2입니다.");
        break;
    
    default :
        //num에 저장된 값과 case의 값이 하나도 일치하지 않을 때
        console.log("num은 1도 2도 아닙니다.");
        
        
}