import React, { Component } from "react";

class CollectionCard extends Component {
  render() {
    const props = this.props;
    return (
      <>
        <div class="card coll-card-container" style={{ width: props.width }}>
          <div className="card-img-container">
            <img src={props.img} className="card-img-top img" alt="..." />
            <div class="overlay">
              <p>{props.hoverText}</p>
            </div>
          </div>
          <div class="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.subtitle}</p>
            <a href="#" className="coll-card-btn">
              View Collections {">"}
            </a>
          </div>
          <div className="coll-card-level1">&nbsp;</div>
          <div className="coll-card-level2">&nbsp;</div>
        </div>
      </>
    );
  }
}

export default CollectionCard;
