import { ADD_TODO } from '../actions/todos';
import { ADD_GOAL } from '../actions/goals';
export const checker = (store) => (next) => (action) => {
    if (
        action.type === ADD_TODO &&
        action.todo.name.toLowerCase().includes('redux')
    ) {
        return alert('Redux is a bad todo item');
    }
    if (
        action.type === ADD_GOAL &&
        action.goal.name.toLowerCase().includes('redux')
    ) {
        return alert('Redux is a bad goal item');
    }

    return next(action);
};
