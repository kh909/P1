import * as React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../assets/rev-logo.png';
import Axios from 'axios';
import NavComponent from './nav-component';
import api from '../util/api';
import { object } from 'prop-types';


export class UsersComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        
        this.state = {
            users:[]
        };
    }


    
    async getUsers() {
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
                <h2></h2>
                    <table>
                        <tbody>
                            {userRows}
                        </tbody>
                    </table>     
                </div>
            </div>    
                
            );
        }
}

