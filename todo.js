window.addEventListener('load', () => {
    const form = document.querySelector("#taskForm");
    const input = document.querySelector("#newTaskInput");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);
        //The above is for adding a task in

        // Takes an input and makes it into a list element (Its the task itself)
        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");
        
        const trashIcon = document.createElement("button");
        trashIcon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        trashIcon.classList.add("trash-button");

        const editIcon = document.createElement("button");
        editIcon.innerHTML = '<i class="fa-solid fa-pencil"></i>';
        editIcon.classList.add("edit-button");

        task_action_el.appendChild(editIcon);
        task_action_el.appendChild(trashIcon);

        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el);

        input.value = "";

        trashIcon.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

        editIcon.addEventListener('click', () => {
            if (editIcon.innerHTML == '<i class="fa-solid fa-pencil"></i>') {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                editIcon.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                editIcon.innerHTML = '<i class="fa-solid fa-pencil"></i>';
            }
        });
    });
});