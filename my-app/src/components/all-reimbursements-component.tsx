import React from 'react';

interface Reimbursements{
    reimbursementid: string,
    author: string,
    amount: string, 
    date_submitted: string,
    date_resolved: string,
    resolver: string,
    status: string,
    type: string,
    description: string
};

export class ReimburseComponent extends React.Component<Reimbursements, any> {
    constructor(props: Reimbursements) {
        super(props);
    }

    render() {
        return(
            <div id="person-container">
                <div>Reimbursement ID: {this.props.reimbursementid}</div>
                <div>Author: {this.props.author}</div>
                <div>Amount: {this.props.amount}</div>
                <div>Submitted: {this.props.date_submitted}</div>
                <div>Resolved: {this.props.date_resolved}</div>
                <div>Resolver: {this.props.resolver}</div>
                <div>Status: {this.props.status}</div>
                <div>Type: {this.props.type}</div>
                <div>Description: {this.props.description}</div>
            </div>
        );
    };
}