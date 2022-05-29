const form = document.getElementById('form');
const clear = document.getElementById('clear');
const ls = window.localStorage;

if (ls.length !== 0) {
    document.getElementById('lst').innerHTML = ls.getItem('form');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const ul = document.getElementById('lst');
    if (form.name.value) {
        if (ls.length === 0) {
            ul.firstElementChild.innerHTML = form.name.value;
            ul.firstElementChild.style.color = 'black'
            ls.setItem('form', ul.innerHTML);
        } else {
            const li = document.createElement('li');
            li.innerHTML = form.name.value;
            li.style.color = 'black'
            ul.prepend(li);
            ls.setItem('form', ul.innerHTML);
        }
    }
});

clear.addEventListener('click', ()=> {
    ls.clear();
    location.reload();
});