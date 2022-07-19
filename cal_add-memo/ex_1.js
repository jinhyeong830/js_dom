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


    //전역 함수 만들기
function writeSchedule(){
    if(content.value===""){
        content.setAttribute("placeholder","내용을 입력해주세요");
    }else{
        let dv=document.createElement("div");
        dv.textContent=content.value;
        pParent.append(dv);
        content.value=""; //클릭 누르면 txt창 초기화시키기
        date.value="";
    }
}

//delete-div 클릭시 삭제되도록
cal.addEventListener("click",function(e){
    if(e.target.tagName==="DIV"){
        console.log(e.target.tagName);
        e.target.remove(); //왜 div가 넘어가지?
        date.value=""; //날짜 칸으로 div내용이 들어가서 date.value 초기화 시켜줌.. 
    }
})     
         
    
    
     






