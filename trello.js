function pushIn(){
    let trello = document.querySelector("#trello-input");
    let todo = trello.value;
    if(todo.trim()==""){
        alert("Enter Todo")
        return;
    }
    printList(todo.trim());
    //console.log(todo.trim());
    trello.value = '';
}

let ul = document.createElement('ul');
let div = document.getElementById('list');
ul.setAttribute('id','trellolist');
div.appendChild(ul);


function printList(todo){
    let li = document.createElement('li');
    li.setAttribute('id','singlepoint');
    let textnode = document.createTextNode(todo);
    li.appendChild(textnode);
    ul.appendChild(li);
}