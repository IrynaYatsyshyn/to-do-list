let notes;
let list = document.querySelector('ul');

function Local() {
    notes = list.innerHTML;
    localStorage.setItem('notes', notes);
}

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    } else if (ev.target.tagName === 'SPAN') {
        let elem = ev.target.parentNode;
        elem.remove();
    }
    Local();
}, false);

function newElement() {
    let li = document.createElement('LI');
    let inputValue = document.getElementById('todoEl').value;
    let inp = document.createTextNode(inputValue);
    li.appendChild(inp);
    if (inputValue === '') {
        alert('Write your note!');
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('todoEl').value = '';
    let span = document.createElement('SPAN');
    let txt = document.createTextNode('X');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    Local();
}

if (localStorage.getItem('notes')) {
    list.innerHTML = localStorage.getItem('notes');
}
