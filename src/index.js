import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Pages/Footer';

ReactDOM.render(
  <>
   <Router>
   <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        {/* <Redirect to="/" /> */}
        </Routes>
      </Router>
    <Footer />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
