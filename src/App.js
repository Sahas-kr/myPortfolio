import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './loader.css';

import About from './components/about/About';
import Home from './components/home/Home';
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Project from "./components/projects/Project";
import Background from "./components/background/Background";

function App() {
  return (
    <div  >
      <Background/>
      <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </HashRouter> 
    </div>
  );
}

export default App;
