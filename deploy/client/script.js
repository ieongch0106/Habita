const form = document.getElementById('form');
const clear = document.getElementById('clear');
const ls = window.localStorage;
const todos = JSON.parse(ls.getItem('form'));

if (todos) {
    if (todos.length !== 0) {
        document.getElementById('lst').firstElementChild.remove();
    }
    todos.forEach((todo)=> {
        addTodo(todo);       
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    addTodo();
});

function addTodo(todo) {
    let text = form.name.value;
    if (todo) {
        text = todo;
    }  
    const ul = document.getElementById('lst');
    if (text) {
        const li = document.createElement('li');
        if (ls.length === 0) {
            const last = ul.lastElementChild;
            last.innerHTML = text;
            if (text !== 'e.g., call Tiffany at 8pm') {
                last.style.color = 'black';
            }
            last.addEventListener('click', ()=> {
                last.classList.toggle("completed");
                updateLS();
            });
            last.addEventListener('contextmenu', (e)=> {
                e.preventDefault();
                
                last.remove();
            })
        } else {
            li.innerHTML = text;
            if (text !== 'e.g., call Tiffany at 8pm') {
                li.style.color = 'black';
            }
            li.addEventListener('click', ()=> {
                li.classList.toggle("completed");
                updateLS();
            });
            li.addEventListener('contextmenu', (e)=> {
                e.preventDefault();
                
                li.remove();
            })
            ul.prepend(li);
        }
        updateLS();
    }
}

function updateLS() {
    const todos = document.querySelectorAll("li");

    const lst = [];

    todos.forEach((todo, index) => {
        if (!todo.classList.contains("completed")) {
            lst.push(todo.textContent);
        }
    });

    ls.setItem('form', JSON.stringify(lst));
}

clear.addEventListener('click', ()=> {
    ls.clear();
    location.reload();
});