import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './loader.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      
      <BrowserRouter basename="">
      <Routes>
        <Route exact path="/ReactPortfolio" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
