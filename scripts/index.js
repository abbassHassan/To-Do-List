const task_input = document.getElementsByClassName('text-input')[0];
const add_button = document.getElementsByClassName('add-button')[0];
const task_list = document.getElementsByClassName('task-list')[0];

add_button.addEventListener('click', add_task);

function add_task() {
  // Get the text from the input field
  let task_text = task_input.value;

  // Check if the input field is not empty
  if (task_text !== "") {
    // Create a new list item
    let list_item = document.createElement("li");

    list_item.innerHTML = `<p>${task_text}</p>
                            <button class="edit-button">Edit</button>
                            <button class='delete-button'>Delete</button>`;

    // Append the new list item to the task list
    task_list.appendChild(list_item);

    // Clear the input field
    task_input.value = "";

    const delete_button = list_item.querySelector('.delete-button');
    
    delete_button.addEventListener('click', function () {
      task_list.removeChild(list_item);
    });

    const p_task = list_item.querySelector('p');

    p_task.addEventListener('click', toggle_check);

    const edit_button = list_item.querySelector('.edit-button');

    // Add event listener to the edit button to prompt the user to edit the task
    edit_button.addEventListener('click', function () {
      const newText = prompt('Edit task:', p_task.textContent);
      if (newText !== null) {
        p_task.textContent = newText;
      }
    });
  }
}

// Function to toggle the 'p-checked' class on a task text
function toggle_check() {
  this.classList.toggle('p-checked');
}
