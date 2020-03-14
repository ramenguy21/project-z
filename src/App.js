import React from 'react';
import './App.css';
import Editor from "./Components/Editor"
import SignIn from './Components/Auth/SignIn';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AppointmentForm from './Components/Appointment'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/Auth/SignUp';




function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Hijama DB</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Editor}></Route>
          <Route path="/appointment" component={AppointmentForm}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
