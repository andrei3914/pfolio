import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import AboutMe from './components/AboutMe/aboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import Particles from 'react-tsparticles';
import particleOptions from './components/Misc/particleOptions';

class App extends React.Component {
  render() {
    return (
      <div className="App"> 
        <Particles params={particleOptions} /> 
        <Navigation />
        <Welcome />      
        <AboutMe />      
        <Projects />     
        <Contact />      
        <Footer />        
     </div>
    );
  }
}

export default App;
