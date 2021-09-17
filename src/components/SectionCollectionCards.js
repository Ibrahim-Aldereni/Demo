import React, { Component } from "react";
import CollectionCard from "./CollectionCard";

class SectionCollectionCards extends Component {
  render() {
    const props = this.props;
    const cards = props.data.map((data, index) => {
      return (
        <CollectionCard
          title={data.title}
          subtitle={data.subtitle}
          width="19.5rem"
          hoverText={data.hoverText}
          img={data.img}
          key={index}
        />
      );
    });
    return (
      <section
        className="cards-section-container container"
        style={{ marginBottom: "90px" }}
      >
        <span>{props.header}</span>
        <a href="#"> View More {">"}</a>
        <div className="cards-container">{cards}</div>
      </section>
    );
  }
}

export default SectionCollectionCards;
