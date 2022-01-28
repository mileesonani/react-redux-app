import { DELETE, GET, INSERT, UPDATE } from "../StoreTypes/StoreTypes";

const initialState = [];
let count = 1, editId = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INSERT:
            // if (editId) {
            //     action.payload.id = editId;
            //     console.log(action.payload.id);
            //     return [...state, action.payload]
            // }
            // else {
            action.payload.id = count++;
            console.log(action.payload.id);
            return [...state, action.payload];
        // }
        case DELETE:
            const crrData = state;
            const index = crrData.findIndex(x => x.id === action.payload);
            crrData.splice(index, 1);
            return [...crrData];
        case GET:
            const userData = state;
            const userDetail = userData.filter(user => user.id === action.payload);
            console.log(userDetail)
            return [...userDetail]
        case UPDATE:
            const editData = state;
            console.log(editData)
            const editArr = editData.filter(x => x.id === action.payload);
            console.log(editArr)
            editId = action.payload
            console.log(editId)
            return [...editData]
        default:
            return state;
    }
}

export { reducer }