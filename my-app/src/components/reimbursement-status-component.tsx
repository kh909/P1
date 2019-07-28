import * as React from 'react';
import Axios from 'axios';
import NavComponent from './nav-component';


interface ReimbursementStatus {
        reimbursementid: string,
        author: string,
        amount: string,
        date_submitted: string,
        date_resolved: string,
        resolver: string,
        status: string, 
        type: string,
        description: string,
        inputValue: string
}

export class ReimbursementStatusComponent extends React.Component<any, ReimbursementStatus> {

    constructor(props: any) {
        super(props);
        
        this.state = {
            reimbursementid: '',
            author: '',
            amount: '',
            date_submitted: '',
            date_resolved: '',
            resolver: '',
            status: '',
            type: '',
            description: '',
            inputValue: ''
        };
    }

    handleReimbursementID(e: any) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            inputValue : value
        });
    }

    searchReimbursement() {
        
        console.log(localStorage)

        console.log(localStorage.getItem("token"))
        const url = `http://localhost:3001/reimbursements/status/${this.state.inputValue}`;

        //the headers with the key
        const config = {
            headers: {
                "Authorization" : localStorage.getItem("token"),
                'Content-Type' : 'application/json'
            }
        }
        Axios.get(url, config).then(payload => {
            console.log(payload)
            console.log(payload.data.userId)
            this.setState({
                ...this.state,
                reimbursementid: payload.data[0].reimbursementid,
                author: payload.data[0].author,
                amount: payload.data[0].amount,
                date_submitted: payload.data[0].date_submitted,
                date_resolved: payload.data[0].date_resolved,
                resolver: payload.data[0].resolver,
                status: payload.data[0].status,
                type: payload.data[0].type,
                description: payload.data[0].description,
                
            })
            console.log(this.state)
            
        });


    }
        render() {
            return (
                <div className="reimbursements" >
                    <NavComponent/>
                    <div>
                    
                    <form>
                        <h5>Display Reimbursement By Status</h5> 
                            <div className="input-field">
                            <label htmlFor="username">Reimbursement Status ID</label>
                                <input type="text" 
                                        value={this.state.inputValue}
                                        placeholder="Reimbursement Status ID" 
                                        onChange= {(event) => this.handleReimbursementID(event)}>
                                </input>
                            </div>
                        <button onClick={() => this.searchReimbursement()}>Submit</button>
                    </form>

                    {this.state.reimbursementid &&
                        <div id="user-display">
                            
                            <div> reimbursement id: {this.state.reimbursementid}</div>
                            <div> author: {this.state.author}</div>
                            <div> amount: {this.state.amount}</div>
                            <div> date submitted: {this.state.date_submitted}</div>
                            <div> date resolved: {this.state.date_resolved}</div>
                            <div> resolver: {this.state.resolver}</div>
                            <div> status: {this.state.status}</div>
                            <div> type: {this.state.type}</div>
                            <div> description: {this.state.description} </div>
                            
                        </div>
                    }
                </div>
                       
                    
                </div>
                
            );
        }
}

