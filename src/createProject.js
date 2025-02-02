export const createProject = (name) => {
    var toDoList = [];
    return {name, toDoList,
        addToDoToList: (toDoItem) => {
            toDoList.push(toDoItem);
        },
        removeFromToDoList: (item) => {
            toDoList.splice(toDoList.indexOf(item), 1);
        },
        projectInfo: () => {
            return `${name} project, todos: ${toDoList.map(item => item.title).join(' | ')} `;
        },
        sortByPriority: () => {
            toDoList.sort((a, b) => a.priority - b.priority);
        }
    };
}