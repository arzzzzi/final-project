import { ADD_ITEM, DELETE_ITEM } from "./actions";

const initialState = {
    idCount: 0,
    list: []
}

function reducer(state = initialState, action) {
    const { idCount, list } = state;

    switch (action.type) {
        case ADD_ITEM:
            console.log(action.payload)
            const { obj } = action.payload
            const newList = [...list]
            newList.push({...obj, id: idCount })
            console.log(newList)
            return {...state, list: newList, idCount: idCount + 1 }
        case DELETE_ITEM:
            const { id } = action.payload
            const newArr = list.filter(l => l.id !== id)
            return {...state, list: newArr }
        default:
            return state
    }
}


export default reducer;