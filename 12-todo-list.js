const todoList = [{
    name:'make dinner',
    dueDate:'2024-12-22'
},{
    name:'wash dishes',
    dueDate:'2024-12-22'
}];

 renderTodoList();

function renderTodoList(){

    let todoListHTML = '';


    todoList.forEach((todoObject, index) => {
        const {name, dueDate } = todoObject;
        const html = `
        <div>${name}</div> 
         <div>${dueDate}</div>
        <button onclick="
            
            " class="delete-todo-button ja-delete-todo-button">Delete</button>
           
        `;
        todoListHTML += html;
    });
   

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;


    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListerner('click',()=> {
                todoList.splice(index,1);
            renderTodoList();
            })
        })
}

   document.querySelector('.js-add-todo-button')
        .addEventListener('click',() => {
            addTodo();
        });

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}