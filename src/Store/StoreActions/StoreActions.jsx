import { DELETE, GET, INSERT, UPDATE } from "../StoreTypes/StoreTypes"

const insertData = (user) => {
    return {
        type: INSERT,
        payload: user
    }
}
const deleteData = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}
const getData = (id) => {
    return {
        type: GET,
        payload: id
    }
}
const editData = (id) => {
    return {
        type: UPDATE,
        payload: id
    }
}

export { insertData, deleteData, getData, editData }