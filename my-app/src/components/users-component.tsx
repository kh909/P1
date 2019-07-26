import * as React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../assets/rev-logo.png';
import { string, number } from 'prop-types';
import Axios from 'axios';

interface Users {
    userid : string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    role: string,
    inputValue: string
}

export class UsersComponent extends React.Component<any, Users>{
    constructor(props: any) {
        super(props);
        
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

    handleUserID(e: any) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            inputValue : value
        });
    }

    searchUser() {
        
        console.log(localStorage)

        console.log(localStorage.getItem("token"))
        const url = `http://localhost:3001/users/${this.state.inputValue}`;

        //the headers with the key
        const config = {
            headers: {
                "Authorization" : localStorage.getItem("token"),
                'Content-Type' : 'application/json'
            }
        }
        Axios.get(url, config).then(payload => {
            console.log(payload)
            this.setState({
                ...this.state,
                userid: payload.data.userId,
                username: payload.data.username,
                first_name: payload.data.firstName,
                last_name: payload.data.lastName,
                email: payload.data.email,
                role: payload.data.role,
                
            })
            console.log(this.state)
            
        });

    }

        render() {
            return (
                <div className="users" >
                    <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
                <div className="navbar-header c-pointer shift-left">
                    <Link to="/login" className="unset-anchor">
                        <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ml-auto margin-nav">
                        <li className="nav-item active">
                            <Link to="/users"
                                className="unset-anchor nav-link">Users</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/reimbursements"
                                className="unset-anchor nav-link">Reimbursements</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/login"
                                className="unset-anchor nav-link">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
                    <form>
                        <h5>Users</h5> 
                        <label>Display: </label>
                            <select>
                                <option value="">All Users</option>
                                <option value="">Users by ID</option>
                            </select>

                            <div className="input-field">
                            <label htmlFor="username">User ID</label>
                                <input type="text" 
                                        value={this.state.inputValue}
                                        placeholder="User ID" 
                                        onChange= {(event) => this.handleUserID(event)}>
                                </input>
                            </div>
                        
                        <button onClick={() => this.searchUser()}>Submit</button>
                    </form>

                    <div id="user-display">
                        <div> user id: {this.state.userid}</div>
                        <div> username: {this.state.username}</div>
                        <div> first name: {this.state.first_name}</div>
                        <div> last name: {this.state.last_name}</div>
                        <div> email: {this.state.email}</div>
                        <div> role: {this.state.role}</div>
                    </div>
                </div>
            </div>    
                
            );
        }
}

