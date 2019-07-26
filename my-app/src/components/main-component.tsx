import * as React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../assets/rev-logo.png';
const MainComponent: React.FC = () => {
    return(
        <div>
        <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
                <div className="navbar-header c-pointer shift-left">
                    <Link to="/login" className="unset-anchor">
                        <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
                    </Link>
                </div>
                </nav>    
        </div>
    );

}

export default MainComponent;