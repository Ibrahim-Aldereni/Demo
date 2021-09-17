import React, { Component } from "react";
import Hero from "./Hero";
import Card from "./Card";
import CollectionCard from "./CollectionCard";
import DiscoverList from "./DiscoverList";
import SectionCards from "./SectionCards";
import SectionCollectionCards from "./SectionCollectionCards";
import {
  featuredDeals,
  collections,
  escapes,
  activities,
  store,
  automotive,
} from "../Data";
class Home extends Component {
  render() {
    return (
      <main className="home-container container">
        <Hero />
        <div className="first-sec-container">
          <DiscoverList />
          <Card
            title="Two New Zealand Beef Tenderloin..."
            subtitle1="Duncan NZ Ltd"
            subtitle2="Auckland"
            bought="77 bought"
            price="$180"
            oldPrice="$250"
            width="30rem"
            hoverText="Two Silver Fern Farms New Zealand Export-Quality Beef Tenderloin Eye Fillets (1.8 - 2.2kg per Slab)"
            img="https://main-cdn.grabone.co.nz/goimage/325x225/c1a3dbabdbba0721012652889951780c340c30bd.jpg"
          />
          <CollectionCard
            title="Grocery Goodies"
            subtitle="Multiple deals"
            width="30rem"
            hoverText="Grocery Goodies"
            img="https://mediacdn.grabone.co.nz/asset/07BDTi7qVy"
          />
        </div>
        <section className="container second-sec-container">
          <p>Get the best deals delivered direct to your inbox each day</p>
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email Address"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </form>
        </section>
        <SectionCards header="Featured Auckland deals" data={featuredDeals} />
        <SectionCollectionCards header="Collections" data={collections} />
        <SectionCards header="Escapes" data={escapes} />
        <SectionCards
          header="Activities, Events & Outdoors"
          data={activities}
        />
        <SectionCards header="Store" data={store} />
        <SectionCards header="Automotive" data={automotive} />
      </main>
    );
  }
}

export default Home;
