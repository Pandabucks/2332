class Todo{
    constructor(title, completed){
        this.title = title;
        this.completed = completed;

    }
    toggle(){
        this.completed = !this.completed;
    }
}

const todo = new Todo('learn JavaScript',false);

function handleToggle(){
    const display = document.getElementById('result');
    todo.toggle();
    display.innerText = todo.title + '-' + todo.completed
}
// console.log(todo);
// console.log(todo.title);
// console.log(todo.completed);
// todo.toggle();
// console.log(todo.completed);
 