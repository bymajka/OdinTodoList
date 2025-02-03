const createToDoItem = (title, description, dueDate, priority, compleated) => {
    return {
        title, description, dueDate, priority, compleated, 
        toDoInfo: () =>{return `${title} - ${description}\n ${dueDate}, ${priority}, ${compleated ? 'compleated' : 'uncompleated'}`;},
        compleate: () => {compleated = true},
    };
}
export default createToDoItem;