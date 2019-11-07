import React from "react";
import {BrowserRouter} from "react-router-dom";
import Contact from "./components/Contact/ContactSection";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter >
        <Navbar />
        <CssBaseline />
        <Contact />
        </BrowserRouter >
      </React.Fragment>
    </div>
  );
}

export default App;
