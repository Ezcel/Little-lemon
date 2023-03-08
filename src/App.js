// import React, { useState } from 'react';
// // import Heading from './Heading';
// import Nav from './component/Nav';
// import Promo from './component/Promo';
// import Intro1 from './component/Intro1';
// import Intro2 from './component/Intro2';
// import Intro3 from './component/Intro3';
// import Footer from './component/Footer';
// import Btn from './Btn';
// import ModeToggler from './ModeToggler';
// 
// import './App.css';
// import InputComponent from './InputComponent';
// 
// 
// function App(props){
//   return(
//     <div className='App'>
//       <InputComponent />
//       <ModeToggler />
//       <Btn />
//       <h1>{props.title}</h1>
//       <Nav />
//       <Promo />
//       <Intro1 />
//       <Intro2 />
//       <Intro3 />
//       <Footer />
//     </div>
//   );
// };

// import MealsList from './component/MealsList';
// import Counter from './component/Counter';
// 
// function App(){
//   return(
//     <div>
//       <MealsList />
//       <Counter />
//     </div>
//   );
// };
// 
// export default App;


import Homepage from "./component/Homepage";
import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import { Link, Route, Routes } from "react-router-dom";
import CurrentMessage from "./component/CurrentMessage";
import video from "./video.mp4";
import ReactPlayer from "react-player";

function App(){
  return(
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
        <Link to="/contact" className="nav-item">Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CurrentMessage />
      <video src={video} width={375} height={250}
        controls />
        
      
    </div>
  );
};

export default App;