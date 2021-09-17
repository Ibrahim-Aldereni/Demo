import React, { Component } from "react";
import Card from "./Card";

class SectionCards extends Component {
  render() {
    const props = this.props;
    const cards = props.data.map((data, index) => {
      return (
        <Card
          title={data.title}
          subtitle1={data.subtitle1}
          subtitle2={data.subtitle2}
          bought={data.bought}
          price={data.price}
          oldPrice={data.oldPrice}
          width="19.5rem"
          hoverText={data.hoverText}
          img={data.img}
          key={index}
        />
      );
    });
    return (
      <section className="cards-section-container container">
        <span>{props.header}</span>
        <a href="#"> View More {">"}</a>
        <div className="cards-container">{cards}</div>
      </section>
    );
  }
}

export default SectionCards;
