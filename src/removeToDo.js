import { renderProject } from "./renderToDoList";
import { project } from ".";

export const removeToDo = (toDoList, toDo) => {
    toDoList.splice(toDoList.indexOf(toDo), 1);
    renderProject(project);
}