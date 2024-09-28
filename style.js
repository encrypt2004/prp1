const item=document.querySelector("#item")
const toDoBox=document.querySelector("#to-do-box")

item.addEventListener("keyup",function(event){
    if(event.keyup=="Enter"){
        addToDo(this.value)
         this.value=" ";
    }
})

const addToDo=(item)=>{
    const listItem = document.createElement("li")
    listItem.innerHTML= 
      `${item};
    
    <i class='fas fa-trash'></i>`  ;
    listItem.addEventListener("click",function(){
        this.classList.toggle(".done" );
    })
    toDoBox.appendChild(listItem)
}
listItem.querySelector("i").addEventListener("click",{
     function(){
        listItem.remove();
     }
})
