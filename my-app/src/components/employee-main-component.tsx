import * as React from 'react';
import EmployeeNavComponent from './employee-nav-component';
const EmployeeMainComponent: React.FC = () => {
    return(
        <div className="users">
            <EmployeeNavComponent/>
            <div>Welcome Employee!</div>
        </div>
    );
}

export default EmployeeMainComponent;