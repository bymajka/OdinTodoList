import { closePopUp } from "./closePopUp.js";
import createToDoItem from "./createToDo";
import { project } from "./index.js";
import { renderProject } from "./renderToDoList.js";
import { validateForm } from "./validateForm.js";

export const handleFormSubmit = (event, title, desc, date, compleated, popUpWindow) => {
    event.preventDefault();

    if(!validateForm(title, desc, date, compleated))
        return;
    else{
        const newToDo = createToDoItem(
            title.input.value,
            desc.input.value,
            date.input.value,
            1,
            compleated.input.checked
        )

        project.addToDoToList(newToDo);
        renderProject(project);
        closePopUp(popUpWindow);
    }
}