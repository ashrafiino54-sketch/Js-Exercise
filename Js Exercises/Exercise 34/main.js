
//  inserting and deleting  Ex34

const list = document.querySelector(".list")

function insertItem(){
    
    const newItem  = document.createElement('li');
    newItem.textContent = 'item new';
    list.appendChild(newItem);
    console.log(newItem);
}

function DeleteItem (){
    if(list.lastChild){
        
    list.removeChild(list.lastChild);
    } else{
        alert ("you were deleted all ready")
    }
}

