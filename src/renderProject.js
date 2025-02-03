export const renderProject = (input, projectContainer) => {
    const newProjectElement = document.createElement('li');
    newProjectElement.innerHTML = input.value;
    projectContainer.appendChild(newProjectElement);
}