import React from 'react';
import './include/bootstrap';
import './App.css';
import { LoginComponent } from './components/login-component';
import { UserComponent } from './components/user-component';
import { UsersComponent} from './components/users-component';
import { ReimbursementsComponent} from './components/reimbursements-component';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavComponent from './components/nav-component';
import MainComponent from './components/main-component';



const App: React.FC = () => {
  return (
    <HashRouter>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/user" component={UserComponent} />
          <Route path="/users" component={UsersComponent} />
          <Route path="/main" component = {MainComponent} />
          <Route path="/reimbursements" component={ReimbursementsComponent} />
          <Route component={LoginComponent} />
        </Switch>
      
    </HashRouter>
  );
}

export default App;
