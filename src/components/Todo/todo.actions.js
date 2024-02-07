export const addTodo = (title, id) => ({
    type: 'add',
    payload: { title, id, isDone: false }
});

export const deleteTodo = (id) => ({
    type: 'delete',
    payload: id
});

export const editTodoTitle = (id, newTitle) => ({
    type: 'edit',
    payload: { id, title: newTitle }
});

export const toggleTodoDone = (id, isDone) => ({
    type: 'toggleDone',
    payload: { id, isDone }
});