import * as React from 'react';
import NavComponent from './nav-component';
const MainComponent: React.FC = () => {
    return(
        <div className="users" >
            <NavComponent/>
            <div>Welcome!</div>
        </div>
    );
}

export default MainComponent;