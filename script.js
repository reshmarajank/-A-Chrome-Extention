let myLead=[]
const inputEl=document.getElementById("input-el");
let result=document.getElementById("result");
let listItem=" "

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLead"))
if(leadsFromLocalStorage){

        myLead=leadsFromLocalStorage;
        render(myLead);
}

function render(lead){
    listItem=" "
    for(let i=0;i<lead.length;i++){
    //listItem+= "<li><a href='"+myLead[i]+"'  target='_blank'>"+myLead[i]+"</a></li>"
    listItem +=`
    <li>
    <a href ="${lead[i]}" target="_blank">
    ${lead[i]}
    </a>
    </li>
    `
    }
    result.innerHTML =listItem}

const inputBtn=document.getElementById("input-button")
const deleteBtn=document.getElementById("delete-btn")

deleteBtn.addEventListener("dblclick",function(){
    myLead=[]
    localStorage.clear()
    render(myLead)
})

inputBtn.addEventListener("click",function(){
    myLead.push(inputEl.value)
    localStorage.setItem("myLead",JSON.stringify(myLead))
    console.log( localStorage.getItem("myLead"))
    render(myLead)
    inputEl.value=null;
    
    
}) 

