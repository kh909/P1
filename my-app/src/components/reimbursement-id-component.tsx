import * as React from 'react';
import NavComponent from './nav-component';
import api from '../util/api';
import { ReimburseComponent } from './all-reimbursements-component';

export class ReimbursementIDComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state= {
            reimbursements:[],
            inputValue: ''
        };
    }

    handleReimbursementID(e: any) {
        const value = e.target.value;
        this.setState({
            ...this.state, // copies all existing state properties
            inputValue : value // overwrites the inputValue property
        });
    }

    async searchReimbursement() {
        
        //headers with token
        const config = {
            headers: {
                "Authorization" : localStorage.getItem("token"),
                'Content-Type' : 'application/json'
            }
        }

        let reimbursementID = await api.get(`/reimbursements/author/userid/${this.state.inputValue}`, config)
        this.setState({
            reimbursements : reimbursementID.data
        })
    }
    
        render() {

            const reimbursementComponentList = this.state.reimbursements.map((n: any) => {
                return (<ReimburseComponent {...n}/>)
            });

            return (
                <div className="reimbursements" >
                    <NavComponent/>
                    <form>
                        <h2>Reimbursements By User ID</h2>
                            <div className="input-field">
                                <label htmlFor="username">User ID</label>
                                    <input type="text" 
                                            placeholder="Reimbursement Status ID" 
                                            onChange= {(event) => this.handleReimbursementID(event)}>
                                    </input>
                            </div> 
                    </form> 
                    <button onClick={() => this.searchReimbursement()}>Submit</button>  
    
                    <table className="tables">
                <thead>
                    <tr>
                        <th>Reimbursement ID</th>
                        <th>Author</th>
                        <th>Amount</th>
                        <th>Date Submitted</th>
                        <th>Date Resolved</th>
                        <th>Resolver</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
            <tbody>
                {
                    this.state.reimbursements.map((Reimbursement: any) => {
                        return(
                <tr>
                    <td>{Reimbursement.reimbursementid}</td>
                    <td>{Reimbursement.author}</td>
                    <td>{Reimbursement.amount}</td>
                    <td>{Reimbursement.date_submitted}</td>
                    <td>{Reimbursement.date_resolved}</td>
                    <td>{Reimbursement.resolver}</td>
                    <td>{Reimbursement.status}</td>
                    <td>{Reimbursement.type}</td>
                    <td>{Reimbursement.description}</td>
                </tr>
                )}
                )}
            </tbody>   
            </table>
                </div>
            );
        }
}
