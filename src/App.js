
import { Link, Route, Routes } from "react-router-dom";

function App(){
  return(
    <div className="App">
      <header>
        <Header />
      </header>

      <nav className="nav">
        <Nav />
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
      
      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
      
    </div>
  );
};

export default App;