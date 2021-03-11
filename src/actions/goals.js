import API from 'goals-todos-api';
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal,
    };
}

function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id,
    };
}

export function handleAddGoal(name) {
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                if (name.length > 0) {
                    dispatch(addGoal(goal));
                } else {
                    alert('please provide a valid goal');
                }
            })
            .catch(() => {
                alert('error while adding goal');
            });
    };
}

export function handleDeleteGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id));
        return API.deleteGoal(goal.id).catch(() => {
            alert('error while removing item');
            dispatch(addGoal(goal));
        });
    };
}
