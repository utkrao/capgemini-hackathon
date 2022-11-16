// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [sdg_data, setSdgData] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:4000/tp")
          .then((response) => response.json())
          .then((data) => setSdgData(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  console.log(sdg_data);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' >

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
