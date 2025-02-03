import "./styles.css";

import animate from "./animate";
import { createProject } from "./createProject";
import { logger } from "./logger";
import { renderPopUpForm,} from "./renderPopUpForm";
import { renderProjectInput } from "./renderProjectInput";

const projects = [];


const addToDoButton = document.querySelector('.add-todo');
const addProjectButton = document.querySelector('.create-project');

const projectContainer = document.querySelector('.project-list');
export const project = createProject("FirstProject");

addToDoButton.addEventListener('click', () => {
    renderPopUpForm();
    const overlay = document.getElementById('pop-up-overlay');
    overlay.classList.toggle('show');
})
addProjectButton.addEventListener('click', () => {
    renderProjectInput(projectContainer);
    projects.push(createProject("project2"));
})

animate();
