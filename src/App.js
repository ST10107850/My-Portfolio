import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Portfolio from "./components/Portfolio";
// import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="service">
        <Service />
        <Skills />
      </section> */}
      {/* <section id="resume">
        <Resume />
      </section> */}
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
