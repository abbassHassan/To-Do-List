const task_input = document.getElementsByClassName('text-input')[0];
const add_button = document.getElementsByClassName('add-button')[0];
const task_list = document.getElementsByClassName('task-list')[0];


add_button.addEventListener('click', add_task);

function add_task(){
  let task_text = task_input.value;
  if(task_text !== ""){
    let list_item = document.createElement("li");
    list_item.innerHTML = `<p>${task_text}</p> 
                            <button class="edit-button">Edit</button>
                            <button class='delete-button'>Delete</button>`;
    task_list.appendChild(list_item);
    task_input.value="";

    const delete_button = list_item.querySelector('.delete-button');
      delete_button.addEventListener('click', function () {
      task_list.removeChild(list_item);
     });

    const p_task = list_item.querySelector('p');
    p_task.addEventListener('click', toggle_check);

    const edit_button = list_item.querySelector('.edit-button');
    edit_button.addEventListener('click', function () {
      const p_task = list_item.querySelector('p');
      const newText = prompt('Edit task:', p_task.textContent);
      if (newText !== null) {
        p_task.textContent = newText;
      }
    });
  }
}

function toggle_check() {
  this.classList.toggle('p-checked');
}
