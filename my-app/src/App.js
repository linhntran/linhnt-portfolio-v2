import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <div className="container mt-5">
          <Routes>
            <Route path="/linhnt-portfolio-v2/" element={<About />} />
            <Route path="/linhnt-portfolio-v2/about" element={<About />} />
            <Route path="/linhnt-portfolio-v2/portfolio" element={<Portfolio />} />
            <Route path="/linhnt-portfolio-v2/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;