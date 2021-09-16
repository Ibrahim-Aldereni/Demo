import React, { Component } from "react";
import {
  RiFacebookCircleFill,
  AiFillTwitterCircle,
  AiFillInstagram,
  FaYoutube,
  BsPhone,
} from "react-icons/all";
class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-main">
          <div className="container">
            <div>
              <p>Follow us on</p>
              <div className="footer-ico-container">
                <RiFacebookCircleFill className="footer-ico" />
                <AiFillTwitterCircle className="footer-ico" />
                <AiFillInstagram className="footer-ico" />
                <FaYoutube className="footer-ico" />
              </div>
              <p>Get app exclusive deals</p>
              <button>
                <BsPhone fontSize="1.7em" /> Download our App
              </button>
            </div>
            <div>
              <p>GrabOne</p>
              <a href="#">GrabOne Guarantee</a>
              <br />
              <a href="#">Contact Us</a>
              <br />
              <a href="#">About Us</a>
              <br />
              <a href="#">Terms &amp; Returns</a>
              <br />
              <a href="#">Blog</a>
              <br />
              <a href="#">Gift Cards</a>
            </div>
            <div>
              <p>My Account</p>
              <a href="#">My Account</a>
              <br />
              <a href="#">My Cart</a>
              <br />
              <a href="#">My Coupons</a>
              <br />
              <a href="#">FAQ</a>
            </div>
            <div>
              <p>Merchants</p>
              <a href="#">Run a Deal</a>
              <br />
              <a href="#">Merchant Centre</a>
            </div>
            <div>
              <p>Newsletter Signup</p>
              <p>
                Sign up for our daily emails and we'll send you all the best
                deals, tailored for you.
              </p>
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
            </div>
          </div>
        </div>

        <div className="footer-footer container">
          <a href="#"> Privacy Policy </a>
          <span> © 2021 GrabOne Limited</span>
          <img src="//new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_long.d08e62aa63ff.png" />
        </div>
      </div>
    );
  }
}

export default Footer;
