import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About1 from './components/About1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import { ShootingStars } from "./components/Background/Shootingstars";
import { StarsBackground } from "./components/Background/stars-background";

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="relative z-10">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<><Hero /><About1 /></>} />
            <Route path="/About" element={<About />} />
          </Routes>
          <Contact />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
