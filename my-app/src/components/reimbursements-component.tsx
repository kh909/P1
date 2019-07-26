import * as React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../assets/rev-logo.png';

export class ReimbursementsComponent extends React.Component{

        render() {
            return (
                <div className="reimbursements" >
                    <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
                <div className="navbar-header c-pointer shift-left">
                    <Link to="/login" className="unset-anchor">
                        <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ml-auto margin-nav">
                        <li className="nav-item active">
                            <Link to="/users"
                                className="unset-anchor nav-link">Users</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/reimbursements"
                                className="unset-anchor nav-link">Reimbursements</Link>
                        </li>

                    </ul>
                </div>
            </nav>
                    <form>
                        <h5>Reimbursements</h5> 
                        <label>Reimbursements: </label>
                        <select>
                            
                            <option value="">All Users</option>
                            <option value="">Users by ID</option>
                        </select>
                    </form>
                </div>
                
            );
        }
}

