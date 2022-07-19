const cal=document.querySelector("table");
const date=document.querySelector("#date");
const content=document.querySelector("#content");
// const btn=document.querySelector("button"); html 상에서 onclick걸어줘서 변수선언 따로 필요 없음
let pParent; //parent 미리 선언

cal.addEventListener("click",function(e){
    if(e.target.tagName==="P"){
        date.value=e.target.textContent;
        pParent=e.target.parentNode;
    }else {
        // 테이블 TD가 클릭 되면 TD를 전역 변수에 저장하여 위치 전달 why?
        //날짜 뿐만 아니라 날짜에 대한 칸을 눌러도 동작하도록
        date.value = e.target.firstChild.textContent;
        pParent = e.target;
    }
});

let dv;
    //전역 함수 만들기
function writeSchedule(){
    if(content.value===""){
        content.setAttribute("placeholder","내용을 입력해주세요");
    }else{
        dv=document.createElement("div");
        dv.textContent=content.value;
        pParent.append(dv);
        content.value=""; //클릭 누르면 txt창 초기화시키기
        date.value="";
    }
}

cal.addEventListener("click",function(e){//child로 접근?
    if(e.target.tagName==="DIV"){
        console.log(e.target.tagName);
        e.target.remove(); //왜 dv가 넘어가지?
        date.value="";
    }
})     
         
    
    
     






