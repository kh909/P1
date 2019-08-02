import * as React from 'react';
import NavComponent from './nav-component';
import api from '../util/api';


export class UsersComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        
        this.state = {
            users:[]
        };
    }
    
    async getUsers() {

        try{
        //the headers with the key
        const config = {
            headers: {
                "Authorization" : localStorage.getItem("token"),
                'Content-Type' : 'application/json'
            }
        }
        let allUsers = await api.get("/users", config)
        console.log(allUsers.data)

        this.setState({
            users : allUsers.data
        })
        //catch if wrong user try to access
    } catch {
        alert("You are not authorized for this operation")
    }

    }
        render() {
            
            return (
                <div className="user">
                <NavComponent/>    
                <h5>Display All Users</h5> 
                <button onClick={()=>this.getUsers()}>

                Display Users
                </button>
                    <table className="tables">
                        <thead>
                            <tr>
                                <th>ID </th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                        this.state.users.map((User: any) => {
                            return(
                                <tr>
                                    <td>{User.userid}</td>
                                    <td>{User.username}</td>
                                    <td>{User.first_name}</td>
                                    <td>{User.last_name}</td>
                                    <td>{User.email}</td>
                                    <td>{User.role}</td>
                                </tr>
                            )}
            )}
                    </tbody>
                    </table>    
                </div>
                
            );

        }
        
}

