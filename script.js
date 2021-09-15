let myLead=[]
const inputEl=document.getElementById("input-el")
const   ulEl=document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn")
const inputBtn=document.getElementById("input-button")
const deleteBtn=document.getElementById("delete-btn")
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLead"))

if(leadsFromLocalStorage){

    myLead=leadsFromLocalStorage
    render(myLead)
}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLead.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLead))
        render(myLead)
      })
})

function render(lead){
 let   listItem=" "
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
    ulEl.innerHTML =listItem}

deleteBtn.addEventListener("dblclick",function(){
        myLead=[]
        localStorage.clear()
        render(myLead)
})

inputBtn.addEventListener("click",function(){
    myLead.push(inputEl.value)
    localStorage.setItem("myLead",JSON.stringify(myLead))
   
    render(myLead)
    inputEl.value=null;
}) 
















