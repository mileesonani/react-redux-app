import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { insertData, deleteData, editData } from '../Store/StoreActions/StoreActions'

const GridComponent = (props) => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state)
    const DeleteUser = (id) => dispatch(deleteData(id))
    const EditUser = (id) => dispatch(editData(id))
    const InsertUser = (user) => dispatch(insertData(user))
    // const getLocalStorageData = () => {
    //     const localStorageData = JSON.parse(localStorage.getItem('user'));
    //     if (localStorageData) {
    //         for (let index = localStorageData.length; index < localStorageData.length; index++) {
    //             const element = localStorageData[index];
    //             props?.InsertUser(element)
    //         }
    //     }
    // }
    // useEffect(() => {
    //     getLocalStorageData();
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('user', JSON.stringify(props?.userData));
    // }, [props?.userData])
    return (
        <div>
            <Link to='/insert'><button type='button'>Add</button></Link>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((x) => {
                        return (
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.FirstName}</td>
                                <td>{x.LastName}</td>
                                <td><button type='button' onClick={() => DeleteUser(x.id)}>Delete</button>
                                    <Link to='/insert'><button type='button' onClick={() => EditUser(x.id)}>Edit</button></Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default GridComponent
