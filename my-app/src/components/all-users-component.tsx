import React from 'react';

interface Person{
    userid : string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    role: string
};

export class PersonComponent extends React.Component<Person, any> {
    constructor(props: Person) {
        super(props);
    }

    render() {
        return (
            <div id="person-container">
                
                <div>ID: {this.props.userid}</div>
                <div>Username: {this.props.username}</div>
                <div>First Name: {this.props.username}</div>
                <div>Last Name: {this.props.last_name}</div>
                <div>Email: {this.props.email}</div>
                <div>Role: {this.props.role}</div>
            </div>
        );
    };
}