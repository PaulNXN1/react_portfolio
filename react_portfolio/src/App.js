import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume"

function App() {
  return (
      <div>
        <Navbar />
        <Homepage />
        <About />
        <Projects />
        <Contact />
        <Resume />

      </div>
  );
}

export default App;
