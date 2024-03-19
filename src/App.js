import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';
// import { NavLink } from 'react-router-dom';

function App() {

  return (
      <div className="">
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Project/>} />
          <Route path="/skills" element={<Skills/> }/>
        </Routes>
        <div>
          < Footer/>
        </div>
      </div>
  );
}

export default App;
