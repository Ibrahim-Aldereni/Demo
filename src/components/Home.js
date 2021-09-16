import React, { Component } from "react";
import Hero from "./Hero";
import Card from "./Card";
import CollectionCard from "./CollectionCard";
import DiscoverList from "./DiscoverList";
class Home extends Component {
  render() {
    return (
      <main className="home-container container">
        <Hero />
        <div className="first-sec-container">
          <DiscoverList />
          <Card
            title="ttttt"
            subtitle1="ssss"
            subtitle2="gggggg"
            bought="888"
            price="$55"
            oldPrice="$77"
            width="30rem"
            hoverText="hover texxxxxxx"
            img="https://main-cdn.grabone.co.nz/goimage/325x225/c1a3dbabdbba0721012652889951780c340c30bd.jpg"
          />
          <CollectionCard
            title="ttttt"
            subtitle="ssss"
            width="30rem"
            hoverText="hover texxxxxxx"
            img="https://main-cdn.grabone.co.nz/goimage/325x225/c1a3dbabdbba0721012652889951780c340c30bd.jpg"
          />
        </div>
      </main>
    );
  }
}

export default Home;
