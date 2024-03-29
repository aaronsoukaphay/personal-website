import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <div className="md: container md: mx-auto">
        <section id="about" className="scroll-m-24">
          <About />
        </section>
        <section id="projects" className="scroll-m-24">
          <Projects />
        </section>
      </div>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
