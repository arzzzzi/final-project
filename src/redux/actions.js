const ADD_OBJECTIVE = 'ADD_OBJECTIVE';
const REMOVE_OBJECTIVE = 'REMOVE_OBJECTIVE';
const EDIT_OBJECTIVE = 'EDIT_OBJECTIVE';
const CREATE_GOAL = 'CREATE_GOAL';

function addObjective(id) {
    return {
        type: ADD_OBJECTIVE,
        payload: {
            id: id
        }
    }
}

function removeObjective(index) {
    return {
        type: REMOVE_OBJECTIVE,
        payload: {
            index: index
        }
    }
}

function editObjective(id) {
    return {
        type: EDIT_OBJECTIVE
    }
}