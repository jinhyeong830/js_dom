const cal=document.querySelector("table");
const date=document.querySelector("#date");
const content=document.querySelector("#content");
const btn=document.querySelector("button");


// let pParent=e.target.parentNode;


cal.addEventListener("click",function(e){
    console.log(e.target.tagName);
    if(e.target.tagName==="P"){
        date.value=e.target.textContent;
    }
    let pParent=e.target.parentNode;
    console.log(pParent);
    btn.addEventListener("click",writeSchedule);
    function writeSchedule(){
        const dv=document.createElement("div");
        dv.textContent=content.value;
        pParent.append(dv);
    }
   
   
    
})


// btn.addEventListener("click",function);
// function writeSchedule(e){
//     c

// }

//어디다가 붙이라고 e.target을 전역으로 선언해서 하셨다고 합니당


