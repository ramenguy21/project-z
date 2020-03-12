import React from 'react';
import './App.css';
import Editor from "./Components/Editor"

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
      <header>
        <h1>Hijama DB</h1>
      </header>


      <Editor></Editor>


    </div>
  );
}

export default App;
