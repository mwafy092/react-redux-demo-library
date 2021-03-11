import API from 'goals-todos-api';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
    };
}
function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id,
    };
}
function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    };
}

export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodo(todo.id));
        return API.deleteTodo(todo.id).catch(() => {
            alert('error while removing item');
            dispatch(addTodo(todo));
        });
    };
}

export function handleSaveTodo(name) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                if (name.length > 0) {
                    dispatch(addTodo(todo));
                } else {
                    alert('please provide a valid todo');
                }
            })
            .catch(() => {
                alert('error while adding todo');
            });
    };
}

export function handleToggleTodo(todo) {
    return (dispatch) => {
        dispatch(toggleTodo(todo.id));
        return API.saveTodoToggle(todo.id).catch(() => {
            alert('error while toggling status');
            dispatch(toggleTodo(todo.id));
        });
    };
}
