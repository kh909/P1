import * as React from 'react';
import NavComponent from './nav-component';
import Axios from 'axios';

export class ReimbursementSubmitComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        
        this.state = {
            author: '',
            amount: '',
            date_submitted: '',
            date_resolved: '',
            resolver: '',
            status: '',
            type: '',
            description: ''
            
        };
        this.submitChange= this.submitChange.bind(this);
    }

    submitChange(e: any){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async submitReimbursements() {
        const url = `http://localhost:3001/reimbursements`;

        //the headers with the key
      
        const headers= {
            "Authorization" : localStorage.getItem("token"),
            'Content-Type' : 'application/json'

        }
            
        const body = {
            author: this.state.author,
            amount: this.state.amount,
            dateSubmitted: this.state.date_submitted,
            dateResolved: this.state.date_resolved,
            resolver: this.state.resolver,
            status: this.state.status,
            type: this.state.type,
            description: this.state.description
        }

       const response = await Axios({
           method: "post",
           url: `http://localhost:3001/reimbursements`,
           headers: headers,
           data: body})
       
            console.log(response.data)

            this.setState({
                ...this.state,
                author: response.data.author,
                amount: response.data.amount,
                date_submitted: response.data.date_submitted,
                date_resolved: response.data.date_resolved,
                resolver: response.data.resolver,
                status: response.data.status,
                type: response.data.type,
                description: response.data.description 
            })
    
        
    }

        render() {
            return (
                <div className="reimbursements" >
                    <NavComponent/>
                        <h2>Submit Reimbursements</h2>
                            <form>
                            <div> 
                                <label>Author: </label>
                                <input onChange={(e) => this.submitChange(e)} name="author"/>
                            </div>
                            <div> 
                                <label>Amount: </label>
                                <input onChange={(e) => this.submitChange(e)} name="amount"/>
                            </div>
                            <div> 
                                <label>Date Submitted: </label>
                                <input onChange={(e) => this.submitChange(e)} name="date_submitted"/>
                            </div>
                            <div> 
                                <label>Date Resolved: </label>
                                <input onChange={(e) => this.submitChange(e)} name="date_resolved"/>
                            </div>
                            <div> 
                                <label>Resolver: </label>
                                <input onChange={(e) => this.submitChange(e)} name="resolver"/>
                            </div>
                            <div> 
                                <label>Status: </label>
                                <input onChange={(e) => this.submitChange(e)} name="status"/>
                            </div>
                            <div> 
                                <label>Type: </label>
                                <input onChange={(e) => this.submitChange(e)} name="type"/>
                            </div>
                            <div> 
                                <label>Description: </label>
                                <input onChange={(e) => this.submitChange(e)} name="description"/>
                            </div>
                        
                            <div>{this.state.author}</div>
                            <div>{this.state.amount}</div>
                            <div>{this.state.date_submitted}</div>
                            <div>{this.state.date_resolved}</div>
                            <div>{this.state.resolver}</div>
                            <div>{this.state.status}</div>
                            <div>{this.state.type}</div>
                            <div>{this.state.description}</div>
                            </form>
                            <button onClick={() => this.submitReimbursements()}>Submit</button>
                </div>
                
            );
        }
}