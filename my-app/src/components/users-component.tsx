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
            const userRows = this.state.users.map((user: any)=>(
                <tr key={user.userid}>
                    {Object.values(user).map((prop: any)=>(
                        <td>{prop}</td>
                    ))}
                </tr>
                )
            )  

            const userRowNames = this.state.users.map((user: any) => {
                return (user)
            })
            return (
                <div className="user" >
                <NavComponent/>
                <div>
                        <h5>Display All Users</h5> 
                <button onClick={()=>this.getUsers()}>
                Display Users
                </button>
                <div>

                </div>
                    <table>
                        <tbody className="user">
                            {userRows}
                        </tbody>
                    </table>     
                </div>
            </div>    
                
            );
        }
}

