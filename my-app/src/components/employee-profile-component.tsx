import * as React from 'react';
import Axios from 'axios'
import EmployeeNavComponent from './employee-nav-component';
interface Employee {
    userid : string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    role: string,
    inputValue: string
}

export class EmployeeProfileComponent extends React.Component<any, Employee>{
    constructor(props: any) {
        super(props);
        
        //sets the state to
        this.state = {
            userid: '',
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            role: '',
            inputValue: ''
        };
    }
     //sets the input from the input field
     handleUserID(e: any) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            inputValue : value
        });
    }

    searchUser() {

        const url = `http://localhost:3001/users/${this.state.inputValue}`;

        //the headers with the key
        const config = {
            headers: {
                "Authorization" : localStorage.getItem("token"),
                'Content-Type' : 'application/json'
            }
        }
        
        let role = localStorage.getItem("role")

        console.log(role)

        
        Axios.get(url, config).then(payload => {
            
            console.log(payload)
            console.log(payload.data.userid)
            this.setState({
                ...this.state,
                userid: payload.data[0].userid,
                username: payload.data[0].username,
                first_name: payload.data[0].first_name,
                last_name: payload.data[0].last_name,
                email: payload.data[0].email,
                role: payload.data[0].role, 
            })
            console.log(this.state)
        }).catch(()=> {
            alert("You can only search your own profile!!!")
        });
    }

        render() {
            return (
                <div className="user" >
                <EmployeeNavComponent/> 

            <div>
                    <form>
                        <h5>Please enter your ID</h5> 
                            <div className="input-field">
                            <label htmlFor="username">User ID</label>
                                <input type="text" 
                                        value={this.state.inputValue}
                                        placeholder="User ID" 
                                        onChange= {(event) => this.handleUserID(event)}>
                                </input>
                            </div>
                    </form>
                    <button onClick={() => this.searchUser()}>Submit</button>

                    <table className="tables">
                        <thead>
                            <tr>
                                <th> User ID</th>
                                <th> Username</th>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> Email</th>
                                <th> Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.userid}</td>
                                <td>{this.state.username}</td>
                                <td>{this.state.first_name}</td>
                                <td>{this.state.last_name}</td>
                                <td>{this.state.email}</td>
                                <td>{this.state.role}</td>
                            </tr>
                        </tbody>
                    </table>      
                </div>
            </div>    
                
            );
        }
}