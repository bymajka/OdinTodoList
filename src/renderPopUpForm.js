export const renderPopUpForm = () => {
    const overlayContainer = document.createElement('div');
    overlayContainer.classList.add('overlay-container');
    overlayContainer.id = "pop-up-overlay";

    const popUpWindow = document.createElement('div');
    popUpWindow.classList.add('pop-up-window');

    const form = document.createElement('form');

    const h1 = document.createElement('h1');
    h1.innerHTML = "Enter ToDo information";

    const title = createLabelInput("Title", true);
    const desc = createLabelInput("Description", true);
    const date = createLabelInput("Date", true);
    date.input.type = 'date';
    const compleated = createLabelInput("Task Compleated", false);
    compleated.input.type = "checkbox";
    const compleateContainer = document.createElement('div');
    compleateContainer.classList.add('compleate-block');
    addElementsToParent(compleateContainer, [compleated.label, compleated.input]);

    const submitButton = document.createElement('button');
    submitButton.innerHTML = "Submit";
    submitButton.type = "submit";
    submitButton.classList.add("submit-form");
    
    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = "Cancel";
    cancelButton.classList.add("cancel");

    addElementsToParent(form, [h1, title.label, title.input, desc.label, desc.input, date.label, date.input, compleateContainer, submitButton]);

    popUpWindow.appendChild(form);
    popUpWindow.appendChild(cancelButton);
    overlayContainer.appendChild(popUpWindow);

    document.body.appendChild(overlayContainer);

    cancelButton.addEventListener('click', () => {
        overlayContainer.remove();
    });
}

const createLabelInput = (name, required) => {
    const label = document.createElement('label');
    label.innerHTML = `${name}: `;
    const input = document.createElement('input');
    input.required = required;

    return {label, input};
}

const addElementsToParent = (parent, arr) => {
    arr.forEach(element => {
        parent.appendChild(element);
    });
}

