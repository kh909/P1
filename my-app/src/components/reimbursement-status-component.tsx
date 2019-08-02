import * as React from 'react';
import NavComponent from './nav-component';
import api from '../util/api';

export class ReimbursementStatusComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        
        this.state = {
            reimbursements: [],
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

    let reimbursementID = await api.get(`/reimbursements/status/${this.state.inputValue}`, config)
        this.setState({
            reimbursements : reimbursementID.data
        })
    }
        render() {

            return (
                <div className="reimbursements">
                    <NavComponent/>
                    
                    <form>
                        <h5>Display Reimbursement By Status</h5> 
                        <div>
                           
                                <select onChange={(e) => this.handleReimbursementID(e)} name="inputValue">
                                    <option value="" disabled selected>(Select Status)</option>
                                    <option value="1">Pending</option>
                                    <option value="2">Approved</option>
                                    <option value="3">Deny</option>
                                </select>
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

