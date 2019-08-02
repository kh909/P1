import * as React from 'react';
import NavComponent from './nav-component';
import Axios from 'axios';

export class ReimbursementUpdateComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        
        this.state = {
            reimbursementid: '',
            date_resolved: new Date(),
            resolver: localStorage.getItem("userid"),
            status: '',
            created: false
            
        };
        this.submitChange= this.submitChange.bind(this);
    }

    submitChange(e: any){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async submitReimbursements() {

        //the headers with the key
      
        const headers= {
            "Authorization" : localStorage.getItem("token"),
            'Content-Type' : 'application/json'
        }
            
        const body = {
            reimbursementId: this.state.reimbursementid,
            dateResolved: this.state.date_resolved,
            resolver: this.state.resolver,
            status: this.state.status
        }
        console.log(body)

       const response = await Axios({
           method: "patch",
           url: `http://localhost:3001/reimbursements`,
           headers: headers,
           data: body})

           this.setState({
               ...this.state,
               created: true
           })
       
            console.log(response)
            console.log(response.data)
    }

        render() {
            return (
                <div className="reimbursements" >
                    <NavComponent/>
                        <h2>Update Reimbursements</h2> 
                        <form>
                            <div> 
                                <label>Reimbursement ID: </label>
                                <input onChange={(e) => this.submitChange(e)} name="reimbursementid"/>
                            </div>
                            <div>
                            <label>Status: </label>
                                <select onChange={(e) => this.submitChange(e)} name="status">
                                    <option value="" disabled selected>(Select)</option>
                                    <option value="1">Pending</option>
                                    <option value="2">Approved</option>
                                    <option value="3">Deny</option>
                                </select>
                            </div>
                        </form>
                        
                        <button onClick={() => this.submitReimbursements()}>Submit</button>
                        {(this.state.created)&&
                                <div>Updated</div>}
                </div>
            );
        }
}