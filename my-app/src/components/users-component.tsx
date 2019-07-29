import * as React from 'react';
import NavComponent from './nav-component';
import api from '../util/api';
import { PersonComponent } from './all-users-component';

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
            
            const userComponentList = this.state.users.map((n: any) => {
                return (<PersonComponent {...n} />)
            });
            
            return (
                <div className="user">
                <NavComponent/>    
                <h5>Display All Users</h5> 
                <button onClick={()=>this.getUsers()}>

                Display Users
                </button>
                    {userComponentList}
                </div>
                
            );

        }
        
}

