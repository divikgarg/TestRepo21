import { useDispatch } from "react-redux";
import {AddUser} from "../actions/index"


export default function AddUserDetails() {
const dispatch = useDispatch();
    var UserObj = {
        id:-1,
        first_Name:"",
        last_Name:"",
        age:-1
    }

    function UpdateUserDetails(e){
        switch(e.target.id){
         case "FName" :
              UserObj.first_Name = e.target.value;
              break;
    case "LName" :
        UserObj.last_Name = e.target.value;
        break;
        
    case "Age" :
        UserObj.age = e.target.value;
        break;
        }
        
    }

    function handleChange(e) {
        console.log("fun called A");
        AddUser(dispatch,UserObj);
    }

    
    return (
        <div>
           <table>
           <tr>
                    <td>First Name</td>
                    <td> <input type="text" onChange={UpdateUserDetails} maxLength="10" minLength="3" id="FName"></input> </td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td> <input type="text" onChange={UpdateUserDetails} maxLength="10" minLength="3" id="LName"></input> </td>
                </tr>
                <tr>
                    <td>age</td>
                    <td> <input type="number" onChange={UpdateUserDetails} min="18" max="50"  id="Age"></input> </td>
                </tr>
                <tr>
                <td> <input type="button" onClick={handleChange}  id="btnDetails" value="Save Details"></input> </td>   
                </tr>
            </table>
        </div>
    );

}