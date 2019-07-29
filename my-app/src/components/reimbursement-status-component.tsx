import * as React from 'react';
import NavComponent from './nav-component';
import api from '../util/api';
import { ReimburseComponent } from './all-reimbursements-component';


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
            const reimbursementComponentList = this.state.reimbursements.map((n: any) => {
                return (<ReimburseComponent {...n}/>)
            });

            return (
                <div className="reimbursements">
                    <NavComponent/>
                    <div>
                    <form>
                        <h5>Display Reimbursement By Status</h5> 
                            <div className="input-field">
                            <label htmlFor="username">Reimbursement Status ID</label>
                                <input type="text" 
                                        placeholder="Reimbursement Status ID" 
                                        onChange= {(event) => this.handleReimbursementID(event)}>
                                </input>
                            </div>
                        <button onClick={() => this.searchReimbursement()}>Submit</button>
                    </form>
                        <div id="user-display">
                        {reimbursementComponentList}    
                        </div>
                    </div>
                </div>
            );
        }
}

