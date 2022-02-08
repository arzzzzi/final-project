const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

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

export { deleteItem, DELETE_ITEM, addItem, ADD_ITEM }