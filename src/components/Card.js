import React, { Component } from "react";
import { RiHeartAddLine } from "react-icons/all";

class Card extends Component {
  render() {
    const props = this.props;
    return (
      <>
        <div className="card" style={{ width: props.width }}>
          <div className="card-img-container">
            <img src={props.img} className="card-img-top img" alt="..." />
            <div class="overlay">
              <p>{props.hoverText}</p>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.subtitle1}</p>
            <p className="card-text2">{props.subtitle2}</p>
          </div>
          <div className="cardFooter">
            <span>{props.bought}</span>
            <div className="cardFooter-bottomText">
              <span>
                from <br />
              </span>
              <span>{props.oldPrice}</span>
              <span>{props.price}</span>
            </div>
          </div>
          <div className="wish-btn">
            <RiHeartAddLine className="wish-ico" />
          </div>
        </div>
      </>
    );
  }
}

export default Card;
