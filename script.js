let myLead=[ "ASsd",1,6];
const inputEl=document.getElementById("input-el");
let result=document.getElementById("result");
const inputBtn=document.getElementById("input-button")
inputBtn.addEventListener("click",function(){
    myLead.push(inputEl.value)
    result.textContent=myLead
    
}) 
for(let i=0;i<myLead.length;i++){
    console.log(myLead[i])
}