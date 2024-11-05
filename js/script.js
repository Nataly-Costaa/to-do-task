const main = document.querySelector('main');
const newTask = document.getElementById('insertTask');
const buttonAdd = document.getElementById('add');

let createdTasks = [];

buttonAdd.addEventListener('click', () => {
    if (!newTask.value) {
        alert('Insira uma task');
        return;
    } else if (createdTasks.includes(newTask.value)) {
        alert('Essa task já existe');
        newTask.value = '';
        return;
    }

    creatNewList();
    newTask.value = '';
});

function creatNewList(index) {
    const newList = document.createElement('section');
    newList.classList.add('containers');

    newList.innerHTML = `
        <section id="containers">
            <input type="text" class="listTask" readonly>
            <button class="delet" data-index="${index}">DELET</button>
        </section>
    `;

    main.appendChild(newList);

    const listTask = newList.querySelector('.listTask').value = newTask.value;
    const buttonDelete = newList.querySelector('.delet');

    
    buttonDelete.addEventListener('click', () => {
        // Encontra o índice da tarefa no array
        const taskIndex = createdTasks.indexOf(listTask.value);
        //Remove a tarefa do array
        createdTasks.splice(taskIndex, 1);
        
        newList.remove();
    });
    
    createdTasks.push(listTask);

    return newList;
}