import React from 'react';
import './include/bootstrap';
import './App.css';
import { LoginComponent } from './components/login-component';
import { UsersComponent } from './components/users-component';
import { ReimbursementsComponent} from './components/reimbursements-component';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavComponent from './components/nav-component';
import MainComponent from './components/main-component';



const App: React.FC = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/users" component={UsersComponent} />
          <Route path="/reimbursements" component={ReimbursementsComponent} />
          <Route component={LoginComponent} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
