import * as React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../assets/rev-logo.png';



const EmployeeNavComponent: React.FC = () => {
    
    return(
        
            <div className="users" >
                <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
                    <div className="navbar-header c-pointer shift-left">
                        <Link to="/employee" className="unset-anchor">
                            <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav ml-auto margin-nav">
                            <li className="nav-item active dropdown">
                                <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</div>
                                <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                                <div className="dropdown-item"><Link to="/employee/profile" className="unset-anchor nav-link active">User Info</Link></div>
                                </div>
                            </li>
                        <li className="nav-item active dropdown">
                                <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Reimbursements</div>
                                <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                                <div className="dropdown-item"><Link to="/employee/status" className="unset-anchor nav-link active">Check Reimbursement</Link></div>
                                <div className="dropdown-item"><Link to="/employee/submit" className="unset-anchor nav-link active">Submit Reimbursement</Link></div>
                                </div>
                        </li>
                        <li className="nav-item active">
                            <Link to="/login"
                            className="unset-anchor nav-link">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}

export default EmployeeNavComponent;