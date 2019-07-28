import * as React from 'react';
import NavComponent from './nav-component';


export class UsersUpdateComponent extends React.Component{

    render() {
        return (
            <div className="users" >
                <NavComponent/>
                    <h2>Update Users</h2> 
                    
            </div>
            
        );
    }
}