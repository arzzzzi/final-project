const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const SET_LIST = 'SET_LIST';

function addItem(obj) {
    return {
        type: ADD_ITEM,
        payload: {
            obj: obj
        }
    }
}

function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: {
            id: id
        }
    }
}

function setList(list) {
    return {
        type: SET_LIST,
        payload: {
            newList: list
        }
    }
}

export { deleteItem, DELETE_ITEM, addItem, ADD_ITEM, SET_LIST, setList }