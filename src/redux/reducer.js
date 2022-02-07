import { ADD_OBJECTIVE, REMOVE_OBJECTIVE, CHANGE_OBJECTIVE, MOVE_TO_LIST } from "./actions";

const initialState = {
    objectives: [{ id: 1, title: '' }],
    idCount: 2,
    list: []
}

function reducer(state = initialState, action) {
    const { objectives, idCount, list } = state;

    switch (action.type) {
        case ADD_OBJECTIVE:
            const { obj } = action.payload
            const newObj = [...objectives]
            newObj.push({...obj, id: idCount })
            return {...state, objectives: newObj, idCount: idCount + 1 }
        case REMOVE_OBJECTIVE:
            const { index } = action.payload
            console.log(index)
            const anotherObj = [...objectives]
            anotherObj.splice(index, 1)
            const anotherState = {...state, objectives: anotherObj }
            return anotherState
        case CHANGE_OBJECTIVE:
            const { value, id } = action.payload
            console.log(value, id)
            const newObject = objectives.find((o) => o.id === id)
            const newArr = objectives.filter(o => o.id !== id)
            newArr.push({...newObject, title: value })
            return {
                ...state,
                objectives: newArr
            }
        case MOVE_TO_LIST:
            const { itemId } = action.payload
            const object = objectives.find(o => o.id === itemId)
            list.push({...object })
            return {
                ...state,
                list,
                itemId: id
            }
        default:
            return state
    }
}

export default reducer;