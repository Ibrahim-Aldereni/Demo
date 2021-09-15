import React, { Component } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
