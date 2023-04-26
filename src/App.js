import { Routes, Route } from "react-router-dom";
import './App.css';
import './loader.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      
      
      <Routes>
        {/* <Route index element={<Home/>}/> */}
        <Route path="/ReactPortfolio" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Resume/> */}
      
      
      
      
     
    </div>
  );
}

export default App;
