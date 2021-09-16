import React, { Component } from "react";
import Hero from "./Hero";
class Home extends Component {
  render() {
    return (
      <main className="home-container container">
        <Hero />
      </main>
    );
  }
}

export default Home;
