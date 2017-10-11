

function onReady() {

   const toDos = [];
   const addToDoForm = document.getElementById('addToDoForm');



 function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

function renderTheUI(toDos) {
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo) {

    const newLi = document.createElement('li');
    const remTask = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    newLi.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(remTask);

    remTask.addEventListener("click", event => {
     toDoList.removeChild(newLi);
   });

  });


}

   addToDoForm.addEventListener('submit', event => {
       event.preventDefault();
       createNewToDo();
     });

  renderTheUI(toDos);
   }

  window.onload = function() {
        onReady();
    };
