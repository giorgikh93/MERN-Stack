import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ExercisesList from './components/ExercisesList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <div className="container">
      <Navbar/>
        <Route path='/' exact component={ExercisesList} />
        <Route path='/edit/:id'  component={EditExercise} />
        <Route path='/create'  component={CreateExercise} />
        <Route path='/user' component={CreateUser} />

    </div>
  );
}

export default App;
