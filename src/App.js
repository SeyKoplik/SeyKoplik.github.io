import React from 'react';
import WelcomeText from "./WelcomeText.js";
import Contact from "./Contact.js";
import NavBar from "./NavBar.js";
import ProjectCarousel from "./ProjectCarousel.js";
import Top from "./Top.js";
import Footer from "./Footer.js";
import Skills from "./Skills.js"


function App() {
 

  return (

    <div className="App">

      <NavBar />

        <header className="App-header">
          <h1 className="nameBanner 
          animate__animated animate__fadeInDown">Seychelle Koplik</h1>
        </header>

      <WelcomeText />
  
      <Skills />

      <ProjectCarousel />

      <Contact />

      <Top/>

      <Footer />

    </div>

  );
}

export default App;
