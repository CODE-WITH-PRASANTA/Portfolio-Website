import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Project from "./Components/Projects/Project";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
