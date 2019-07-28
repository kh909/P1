import * as React from 'react';
import NavComponent from './nav-component';

export class ReimbursementSubmitComponent extends React.Component{

        render() {
            return (
                <div className="reimbursements" >
                    <NavComponent/>
                        <h2>Submit Reimbursements</h2> 
                       
                </div>
                
            );
        }
}