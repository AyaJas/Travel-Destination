import './App.css';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import myData from '../src/data/db.json';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path ='/city/:id' element={<TourDetails data = {myData}/>} />
      </Routes>
    </>
  );
}

export default App;
