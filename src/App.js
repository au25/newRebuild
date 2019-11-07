import React, {useEffect} from "react";
import {BrowserRouter, useLocation} from "react-router-dom";
import Contact from "./components/Contact/ContactSection";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import Cookie from "./components/Cookie/Cookie";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <div className="App">
      <React.Fragment>
      <CssBaseline />
        <BrowserRouter >
        <ScrollToTop />
        <Navbar />
        <Contact />
        <Cookie />
        </BrowserRouter >
      </React.Fragment>
    </div>
  );
}

export default App;
