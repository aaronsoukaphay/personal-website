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
      <section id="home" className="h-screen">
        <div
          style={{ backgroundImage: "url(/images/home-background.jpg)" }}
          className="h-screen flex justify-center items-center"
        >
          <Home />
        </div>
      </section>
      <div className="md: container md: mx-auto">
        <section id="about">
          <About />
        </section>
        <section id="projects">
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
