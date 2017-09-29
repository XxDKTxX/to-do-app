function onReady() {
   var toDos = [];
    var addToDoForm = document.getElementById('addToDoForm');


   function createNewToDo() {
var newToDoText = document.getElementById('newToDoText');

toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';
 }

 renderTheUI(toDos);
}


 addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
  });

  function renderTheUI(toDos) {
      var toDoList = document.getElementById('toDoList');

      toDoList.innerHTML = '';

      toDos.forEach(function(toDo) {
        var newLi = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        newLi.innerHTML = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
      });

    }
  }

  window.onload = function() {
     alert("The window has loaded!");
    onReady();

   };

   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', () => {
event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input for the checkbox
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    //empty the input
    newToDoText.value = '';

  });
 }
