import * as React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../assets/rev-logo.png';
import Axios from 'axios';
import api from '../util/api';

// export class LoginComponent extends React.Component<{}, IState>{
export class LoginComponent extends React.Component <any,any>{
    
    constructor(props:any) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    //submit button is pressed
   async handleSubmit(e: any) {

        let user= await api.post('/login',{
            username: this.state.username,
            password: this.state.password
            
        });
        const token = user.data.token

        console.log(token)
        console.log(user.data)
        console.log(user.data.role)
        //if the credentials are valid go to /users

        if (user.data.sucess === true) {
            localStorage.setItem("token",token)
            localStorage.setItem("role",user.data.role)
            //takes user to user page
            this.props.history.replace("/users");
        } 
      //  console.log(this.state)
    }

        //username entered in box
        handleUserName(e: any) {
            const value = e.target.value;
            this.setState({
                username : value
            });
        }

        //password entered in box
        handlePassword(e: any) {
            const value = e.target.value;
            this.setState({
                password : value
            });
        }
    
        render() {
            return (
                <div className="login" >
                <div>
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
                        </div>
                    </nav>
                </div>
                    <form>
                        <h5>ERS Sign In</h5>
                        <div className="input-field">
                            <label htmlFor="username">Username</label>
                            <input type="text" 
                                    id="username" 
                                    name="username" 
                                    placeholder="Username" 
                                    onChange= {(event) => this.handleUserName(event)}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                                    id="password" 
                                    placeholder="Password" 
                                    onChange= {(event) => this.handlePassword(event)}/>
                        </div>
                    </form>

                        <div className="input-field">
                                <button onClick={(event) => this.handleSubmit(event)}>Login</button>
                        </div>
                        
                </div>       
            );
        }
}

