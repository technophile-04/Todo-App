const check = document.querySelectorAll('.check');
const todoName = document.querySelectorAll('.todo-name');

check.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        todoName[index].classList.toggle('checked');
    })
});