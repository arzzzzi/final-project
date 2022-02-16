import { ADD_ITEM, DELETE_ITEM, SET_LIST } from "./actions";

const initialState = {
    idCount: 1,
    list: [],
}

function reducer(state = initialState, action) {
    const { idCount, list } = state;

    switch (action.type) {
        case ADD_ITEM:
            const { obj } = action.payload;
            const anotherList = [...list];
            anotherList.push({...obj, id: idCount })
            return {...state, list: anotherList, idCount: idCount + 1 }
        case DELETE_ITEM:
            const { id } = action.payload;
            const newArr = list.filter(l => l.id !== id)
            return {...state, list: newArr }
        case SET_LIST:
            const { newList } = action.payload
            return {...state, list: newList }

        default:
            return state
    }
}


export default reducer;