import Navbar from "./Components/navbar/Navbar";
import Test from "./test";
import "./app.scss"
import Hero from "./Components/hero/Hero";
import Parallax from "./Components/parallex/Parallax";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/cursor/Cursor";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services" /></section>
    <section><Services /> </section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <Portfolio />
    <section id="Contact">
      <Contact/>
    </section>

  
    {/*  <Test/> */}
  </div>;
};

export default App;
