import Movie from "./components/MoviePage/Movie";
import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/movie/:id" element={<Movie />}/>

      </Routes>
  
    </Router>

  );
 
}

export default App;
