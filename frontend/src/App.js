// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
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
