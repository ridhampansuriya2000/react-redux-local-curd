import React from "react";
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import UserListContainer from './containers/UserListContainer';
import UserDetailsContainer from './containers/UserDetailsContainer';
import EditUserContainer from './containers/EditUserContainer';
import CreateUser from './components/CreateUser';
import DeleteUserContainer from './containers/DeleteUserContainer';
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={UserListContainer} />
            <Route path="/user/:userId" component={UserDetailsContainer} />
            <Route path="/edit/:userId" component={EditUserContainer} />
            <Route path="/create" component={CreateUser} />
            <Route path="/delete/:userId" component={DeleteUserContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
