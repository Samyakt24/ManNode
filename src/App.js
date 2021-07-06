import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
           <Nav />
           <Route path='/create' component={CreateExercise} />
           <Route path='/user' component={CreateUser} />
    </Router>

  )
}

export default App;
