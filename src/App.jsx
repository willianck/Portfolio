
import React from 'react';
import ReactDOM from 'react-dom';

import Topbar from "./components/topbar";
import Intro from  "./components/intro";
import Projects from "./components/projects";
import About from "./components/about";
import "./components/App.scss";
import Navbar from "./components/navigation/navbar";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Contact from './components/contact';




function App() {
  return (
    <div className="app">
          <Topbar/>
          <div className = "sections">
              <Intro/>
              <About/>
              <Skills/>
              <Projects/>
              <Contact/>
              <Footer/>
          </div>
           
     <div className = "sidebar-nav">
          <Navbar/>      
    </div>
    </div>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
