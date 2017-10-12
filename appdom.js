function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteBtn = document.getElementById('delete');
  const items = toDoList.getElementsByTagName('li');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault(); //stop page from reloading

    //get the text for the new to-do item
    let title = newToDoText.value;

    //create new li
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');

    //set input's type to checkbox
    checkbox.type = "checkbox";

    //set the title (text of li to what user put in)
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
   newToDoText.value = '';

  });

  DELETE_BTN.addEventListener('click', event =>{
    for(let i=0; i<ITEMS.length; i++){
      let li = ITEMS[i].getElementsByTagName('input');
      let cb = li[0]
      if(cb.checked){
        ITEMS[i].remove();
      }
    }
  })
}

window.onload = function(){
  alert("The window has loaded!");
  onReady();
};
