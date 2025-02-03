import { createProject } from "./createProject";
import { renderProject } from "./renderProject";
import { logger } from "./logger";

export const renderProjectInput = (projectContainer) => {
    const inputContainer = document.createElement('form');
    const input = document.createElement('input');
    input.setAttribute('placeholder', "Enter project name");

    inputContainer.addEventListener('submit', (event) => {
        event.preventDefault(); 

        if (!input.value.trim()) return; 

        logger(createProject(input.value));
        renderProject(input, projectContainer);

        input.remove();

        input.value = ''; 
    });

    inputContainer.appendChild(input);
    projectContainer.appendChild(inputContainer);
}