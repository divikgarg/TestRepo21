import React,{ useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getAllUsers} from '../actions/index'

export default function UserListComponent() {
    const dispatch = useDispatch();
    
    // Slice the data from the store using useSelector
    const UserInfo = useSelector((state) => {
        return state.usersList;
    });

    useEffect(() => {
        getAllUsers(dispatch);
    }, []);

    const UserData = function(UserInfo){
        return UserInfo.map((user) => 
               <tr key={user.id}>
                   <td>{user.id}</td>
                   <td>{user.first_Name}</td>
                   <td>{user.last_Name}</td>
                   <td>{user.age}</td>
               </tr> 
        );
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {UserData(UserInfo)}
                </tbody>
            </table>
        </div>
    );

}