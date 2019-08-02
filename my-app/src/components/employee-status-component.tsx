import * as React from 'react';
import EmployeeNavComponent from './employee-nav-component';
import api from '../util/api';

export class EmployeeStatus extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            reimbursements: [],
            inputValue: ''
        };
    }


    async searchReimbursement() {
        //headers with token
        const config = {
            headers: {
                "Authorization" : localStorage.getItem("token"),
                'Content-Type' : 'application/json'
            }
        }
        console.log(localStorage.getItem("userid"))
        console.log(localStorage.getItem("token"))
    let reimbursementID = await api.get(`/reimbursements/author/userid/${localStorage.getItem("userid")}`, config)
        this.setState({
            reimbursements : reimbursementID.data
        })

        
    }
        render() {

            return (
                <div className="reimbursements">
                    <EmployeeNavComponent/>
                    
                    <form>
                        <h5>Display Reimbursement By Status</h5> 
                        
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