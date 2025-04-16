import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Main/>
    </Router>
  );
}

export default App;
