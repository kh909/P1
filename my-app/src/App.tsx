import React from 'react';
import './include/bootstrap';
import './App.css';
import { LoginComponent } from './components/login-component';
import { UserComponent } from './components/user-component';
import { UsersComponent} from './components/users-component';
import { UsersUpdateComponent} from './components/users-update-component';
import { ReimbursementStatusComponent} from './components/reimbursement-status-component';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ReimbursementIDComponent} from './components/reimbursement-id-component';
import { ReimbursementSubmitComponent} from './components/reimbursement-submit-component';
import { ReimbursementUpdateComponent} from './components/reimbursement-update-component';
import {EmployeeProfileComponent}  from './components/employee-profile-component';
import {EmployeeSubmitComponent} from './components/employee-submit-component';
import MainComponent from './components/main-component';
import EmployeeMainComponent from './components/employee-main-component';
import {EmployeeStatus} from './components/employee-status-component';



const App: React.FC = () => {
  return (
    <HashRouter>
        <Switch>
          <Route path="/login" component= {LoginComponent} />
          <Route path="/users/update" component ={UsersUpdateComponent} />
          <Route path="/user" component= {UserComponent} />
          <Route path="/users" component= {UsersComponent} />
          <Route path="/main" component = {MainComponent} />
          <Route path="/employee/submit" component = {EmployeeSubmitComponent} />
          <Route path="/employee/profile" component = {EmployeeProfileComponent} />
          <Route path="/employee/status" component = {EmployeeStatus}/>
          <Route path="/employee" component = {EmployeeMainComponent} />
          <Route path="/reimbursements/status" component={ReimbursementStatusComponent} />
          <Route path="/reimbursements/author/userid/" component={ReimbursementIDComponent} />
          <Route path="/reimbursements/submit" component={ReimbursementSubmitComponent} />
          <Route path="/reimbursements/update" component={ReimbursementUpdateComponent} />
          <Route component={LoginComponent} />
        </Switch>
    </HashRouter>
  );
}

export default App;
