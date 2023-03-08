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