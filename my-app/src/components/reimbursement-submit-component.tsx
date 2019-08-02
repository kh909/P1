import * as React from 'react';
import NavComponent from './nav-component';
import Axios from 'axios';

export class ReimbursementSubmitComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        
        this.state = {
            author: localStorage.getItem("userid"),
            amount: '',
            date_submitted: new Date(),
            status: 1,
            type: '',
            description: '',
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
            author: this.state.author,
            amount: this.state.amount,
            dateSubmitted: this.state.date_submitted,
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
                status: response.data.status,
                type: response.data.type,
                description: response.data.description,
                created: true
            })
            console.log(this.state)
    }

        render() {
            return (
                <div className="reimbursements" >
                    <NavComponent/>
                        <h2>Submit Reimbursements</h2>
                            <form>
                            <div> 
                                <label>Amount: </label>
                                <input onChange={(e) => this.submitChange(e)} name="amount"/>
                            </div>
                            <div> 
                                <label>Description: </label>
                                <input onChange={(e) => this.submitChange(e)} name="description"/>
                            </div>
                        
                            <div>
                            <label>Type: </label>
                                <select onChange={(e) => this.submitChange(e)} name="type">
                                    <option value="" disabled selected>(Select)</option>
                                    <option value="1">Lodging</option>
                                    <option value="2">Travel</option>
                                    <option value="3">Food</option>
                                    <option value="4">Other</option>
                                </select>
                            </div>
                            </form>
                            <button onClick={() => this.submitReimbursements()}>Submit</button>

                            {(this.state.created)&&
                                <div>Created</div>}
                </div>
                
            );
        }
}