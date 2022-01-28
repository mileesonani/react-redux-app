import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { editData, getData, insertData } from '../Store/StoreActions/StoreActions'

const InsertComponent = (props) => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state)
    const InsertUser = (user) => dispatch(insertData(user))
    const GetUser = (id) => dispatch(getData(id))
    const EditUser = (user) => dispatch(editData(user))
    const [user, setUser] = useState({ FirstName: '', LastName: '' })
    const setUsers = (e) => {
        setUser(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }
    return (
        <div>
            <input type='text' name='FirstName' value={user.FirstName} placeholder='FirstName' onChange={setUsers} />
            <input type='text' name='LastName' value={user.LastName} placeholder='LastName' onChange={setUsers} />
            <button type='button' onClick={() => InsertUser(user)}>Add</button>
            <button type='button' onClick={() => EditUser(user)}>Update</button>
            <Link to='/'><button type='button'>Home</button></Link>
        </div>
    )
}

export default InsertComponent
