function onReady() {
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
       addToDoForm.addEventListener('submit',(event) => {
       event.preventDefault();
       createNewToDo();
     });
}

function createNewToDo() {
   var newToDoText = document.getElementById('newToDoText');
   if (!newToDoText) { return }

toDos.push({
      title: newToDoText.value,
      complete: false
    });

  newToDoText.value = '';
}

function renderTheUI(toDos) {

      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";


        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
      });
   }

 window.onload = function() {
        onReady();
    };
