import React from 'react';
import './App.css';
import Editor from "./Components/Editor"
import SignIn from './Components/Auth/SignIn';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AppointmentForm from './Components/Appointment'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/Auth/SignUp';
import NavBar from './NavBar'



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1 className="mt-3">Hijama DB</h1>
          <NavBar />
        </header>
        <Switch>
          <Route path="/editor" component={Editor}></Route>
          <Route path="/appointment" component={AppointmentForm}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
