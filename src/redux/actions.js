const ADD_OBJECTIVE = 'ADD_OBJECTIVE';
const REMOVE_OBJECTIVE = 'REMOVE_OBJECTIVE';
const CHANGE_OBJECTIVE = 'CHANGE_OBJECTIVE';
const MOVE_TO_LIST = 'MOVE_TO_LIST'

function addObjective(obj) {
    return {
        type: ADD_OBJECTIVE,
        payload: {
            obj: obj
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

function changeObjective(id, value) {
    return {
        type: CHANGE_OBJECTIVE,
        payload: {
            id,
            value
        }
    }
}

function moveToList(id) {
    return {
        type: MOVE_TO_LIST,
        payload: {
            itemId: id
        }
    }
}
// function editObjective(id) {
//     return {
//         type: EDIT_OBJECTIVE,
//         payload: {
//             objId: id
//         }
//     }
// }

export { moveToList, MOVE_TO_LIST, addObjective, removeObjective, ADD_OBJECTIVE, REMOVE_OBJECTIVE, CHANGE_OBJECTIVE, changeObjective }