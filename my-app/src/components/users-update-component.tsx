import * as React from 'react';
import NavComponent from './nav-component';
import Axios from 'axios';

export class UsersUpdateComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        
        this.state = {
            userid: '',
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            role: '',
            
        };
        this.submitChange= this.submitChange.bind(this);
    }

    submitChange(e: any){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async submitReimbursements() {
        const url = `http://localhost:3001/users`;

        //the headers with the key
      
        const headers= {
            "Authorization" : localStorage.getItem("token"),
            'Content-Type' : 'application/json'

        }
            
        const body = {
            userId: this.state.userid,
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            email: this.state.email,
            role: this.state.role
        }
        console.log(body)

       const response = await Axios({
           method: "patch",
           url: `http://localhost:3001/users`,
           headers: headers,
           data: body})
       
            console.log(response)

        
    
    }
    
    render() {
        return (
            <div className="users" >
                <NavComponent/>
                    <h2>Update Users</h2> 
                    <form>
                    <div> 
                                <label>User ID: </label>
                                <input onChange={(e) => this.submitChange(e)} name="userid"/>
                            </div>
                            <div> 
                                <label>Username: </label>
                                <input onChange={(e) => this.submitChange(e)} name="username"/>
                            </div>
                            <div> 
                                <label>Password: </label>
                                <input onChange={(e) => this.submitChange(e)} name="password"/>
                            </div>
                            <div> 
                                <label>First Name: </label>
                                <input onChange={(e) => this.submitChange(e)} name="firstname"/>
                            </div>
                            <div> 
                                <label>Last Name: </label>
                                <input onChange={(e) => this.submitChange(e)} name="lastname"/>
                            </div>
                            <div> 
                                <label>Email: </label>
                                <input onChange={(e) => this.submitChange(e)} name="email"/>
                            </div>
                            <div> 
                                <label>Role: </label>
                                <input onChange={(e) => this.submitChange(e)} name="role"/>
                            </div>
                    </form>
                    <button onClick={() => this.submitReimbursements()}>Submit</button>
            </div>
            
        );
    }
}