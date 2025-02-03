import { project } from ".";
import crossImage from "./img/cross.svg";
import { removeToDo } from "./removeToDo";

const toDoContainer = document.querySelector('.todo-container');

export const renderProject = (project) => {
    let projectSection = document.querySelector('.todo-list-section');

    if (!projectSection) {
        projectSection = document.createElement('section');
        projectSection.classList.add("todo-list-section");
    } else {
        projectSection.innerHTML = ""; // Очищення перед повторним рендером
    }


    const h1 = document.createElement('h1');

    h1.innerHtml = project.name;    

    project.toDoList.forEach(item => {
        projectSection.appendChild(renderToDo(item));
    });
    
    toDoContainer.insertBefore(projectSection, toDoContainer.firstChild);
}

const renderToDo = (toDoItem) => {
    const renderedToDo = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerHTML = toDoItem.title;

    const p = document.createElement('p');
    p.innerHTML = toDoItem.description;

    const date = document.createElement('p');
    date.innerHTML = `${toDoItem.dueDate}`;
    date.classList.add("date");

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = toDoItem.compleated;

    const removeButton = document.createElement('img');
    removeButton.classList.add('cross');
    removeButton.src = crossImage;

    removeButton.addEventListener('click', () => {
        removeToDo(project.toDoList, toDoItem);
    })

    renderedToDo.appendChild(h2);
    renderedToDo.appendChild(checkbox);
    renderedToDo.appendChild(p);
    renderedToDo.appendChild(date);
    renderedToDo.appendChild(removeButton);

    return renderedToDo;
}