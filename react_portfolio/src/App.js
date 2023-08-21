import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (


    <HashRouter>
      <div>


        <Navbar />

        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />


        </Routes>


        <Footer />



      </div>

    </HashRouter>
  );
}

export default App;
