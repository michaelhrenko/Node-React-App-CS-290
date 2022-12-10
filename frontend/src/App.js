import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

import Navigation from './components/Navigation';
import './App.css';

import HomePage from './pages/HomePage';
import AddExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

import { GiWeightLiftingUp } from 'react-icons/gi';
import { BiRun } from 'react-icons/bi';
import { TbSwimming } from 'react-icons/tb';

function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>
          <header>
            <h1>Your Exercise Goals</h1>
            <p>Experience the thrill of accomplishing your goals!</p>
            <BiRun className='App-logo'/>
            <GiWeightLiftingUp className='App-logo'/>
            <TbSwimming className='App-logo'/>
          </header>
          <Navigation />
            <main>
              <Route path="/" exact><HomePage setExercise={setExercise} /></Route>
              <Route path="/add-exercise"><AddExercisePage /></Route>
              <Route path="/edit-exercise"><EditExercisePage exercise={exercise} /></Route>
            </main>
          <footer>
            <p>&copy; Michael Hrenko</p>
          </footer>
      </Router>
    </>
  );
}

export default App;