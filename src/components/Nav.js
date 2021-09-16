import React, { Component } from "react";
import {
  GrLocation,
  IoIosArrowDown,
  FaRegHeart,
  CgShoppingCart,
  IoPersonOutline,
  FaRegEnvelope,
  RiArrowRightSLine,
  FiHome,
  FiSearch,
  AiOutlineAppstore,
} from "react-icons/all";

class Nav extends Component {
  render() {
    return (
      <header className="nav-container">
        <nav class="navbar navbar-expand-lg nav-1 navbar-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              <svg
                id="svg__global--go-logo-white"
                viewBox="0 0 315.3 60"
                className="nav-logo"
              >
                <path
                  class="st0"
                  d="M55.8 52.1V21.7c0-2.3 1.2-3.5 3.5-3.5h4c2.3 0 3.5 1.2 3.5 3.5v4.7c1.2-6.8 6.5-9 9.7-9l1.2.1c1.7.1 2.1 1.5 2.1 3v5.1c0 2-1 2.9-2.5 2.7-.7-.1-1.2-.1-1.8-.1-4.4 0-8.4 2.8-8.4 12.2v11.8c0 2.3-1.2 3.5-3.5 3.5h-7.8v-3.6zM3.1 30.2c0-14.4 11.5-26.4 27.4-26.4 6 0 11 1.3 15.4 3.9 2 1.2 2.2 3.1.9 4.9L45 15c-1.3 1.8-2.8 2-4.9 1-3.9-2-6.7-2.1-9.6-2.1-9.1 0-15.9 7.2-15.9 16.2 0 8.6 5.9 16.2 16.4 16.2 3 0 6.3-.7 8.9-2v-7.9H31c-1.9 0-3.5-1.6-3.5-3.5v-5.1h19.7c2 0 3.6 1.6 3.6 3.6V46c0 1.8-.6 3.2-2.3 4.4-5.5 4.1-11.6 5.9-17.7 5.9-16.4.1-27.7-11.8-27.7-26.1m78.2 6.7c0-11 7.5-19.5 18-19.5 5 0 9.3 1.9 12 6.1v-1.8c0-2.3 1.2-3.5 3.5-3.5h4.3c2.3 0 3.5 1.2 3.5 3.5v33.9h-7.8c-2.3 0-3.5-1.2-3.5-3.5v-1.7c-2.7 4.1-7.1 6-12 6-10.5 0-18-8.4-18-19.5m30.2 0c0-6-3.8-10.5-9.5-10.5-5.9 0-9.3 4.7-9.3 10.5s3.4 10.5 9.3 10.5c5.7 0 9.5-4.5 9.5-10.5m28 13.5v1.7c0 2.3-1.3 3.5-3.6 3.5h-7.7V6.5c0-2.3 1.2-3.5 3.5-3.5h4.2c2.3 0 3.6 1.2 3.6 3.5v17c2.7-4.2 7.1-6.1 11.9-6.1 10.6 0 18.1 8.5 18.1 19.5 0 11.1-7.5 19.5-18.1 19.5-4.9 0-9.2-1.9-11.9-6m18.7-13.5c0-5.8-3.5-10.5-9.3-10.5s-9.5 4.5-9.6 10.5c.1 6 3.8 10.5 9.6 10.5s9.3-4.7 9.3-10.5m15.3-6.7c0-14.3 11.1-26.3 27-26.3s27 11.9 27 26.3c0 14.3-11.1 26.3-27 26.3-16-.1-27-12-27-26.3m42.4 0c0-9-6.4-16.2-15.4-16.2s-15.4 7.2-15.4 16.2 6.3 16.2 15.4 16.2c9 0 15.4-7.2 15.4-16.2m15.4 21.9V21.7c0-2.3 1.2-3.5 3.5-3.5h4.3c2.3 0 3.5 1.2 3.5 3.5v2.5c1.8-4.3 5.8-6.8 11.4-6.8 10 0 13.7 7.9 13.7 16.7v18.1c0 2.3-1.3 3.5-3.6 3.5h-7.7V34.9c0-5.2-2-8.3-5.9-8.3s-7.9 3-7.9 10v15.6c0 2.3-1.2 3.5-3.5 3.5h-7.8v-3.6zm40.1-15c0-10.6 7.9-19.7 20.5-19.7 10.6 0 19.4 6.4 19.9 18.3.1 2.1-1.4 3.1-3.6 3.1h-26.1c-.1 4.4 4.3 8.7 11.5 8.7 2.7 0 5.5-.7 8.3-2.3 2-1.1 3.6-.9 5 .7l.8 1c1.5 1.7 1.3 3.7-.7 5.2-4.3 3.1-9.3 4.2-14.1 4.2-13.4.1-21.5-8.5-21.5-19.2m29.8-4.5c-1-5-5.3-6.6-9.2-6.6-3.9 0-8.4 1.7-9.6 6.6h18.8z"
                ></path>
              </svg>
            </a>
            {/* <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div className="navbar-collapse2" id="navbarText">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <div class="dropdown">
                    <button
                      class="btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <GrLocation className="nav-icon-style" />
                      Auckland
                      <IoIosArrowDown className="nav-icon-style-arrow" />
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a href="#">Auckland</a>
                      </li>

                      <li>
                        <a href="#">Waikato</a>
                      </li>

                      <li>
                        <a href="#">Wellington</a>
                      </li>

                      <li>
                        <a href="#">Northland</a>
                      </li>

                      <li>
                        <a href="#">Manawatu - Wanganui</a>
                      </li>

                      <li>
                        <a href="#">Tauranga</a>
                      </li>

                      <li>
                        <a href="#">Rotorua - Taupo</a>
                      </li>

                      <li>
                        <a href="#">Hawkes Bay</a>
                      </li>

                      <li>
                        <a href="#">Christchurch</a>
                      </li>

                      <li>
                        <a href="#">Taranaki</a>
                      </li>

                      <li>
                        <a href="#">Nelson - Marlborough</a>
                      </li>

                      <li>
                        <a href="#">Queenstown - Wanaka</a>
                      </li>

                      <li>
                        <a href="#">Dunedin - Invercargill</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <FaRegHeart className="nav-icon-style" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <CgShoppingCart className="nav-icon-style-cart" />
                  </a>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <button
                      class="btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <IoPersonOutline className="nav-icon-style" />
                      <IoIosArrowDown className="nav-icon-style-arrow" />
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li class="toggler-off dropdown-list-item--account">
                        <a href="#">My Account</a>
                      </li>

                      <li class="toggler-off dropdown-list-item--gifts">
                        <a href="#">Gifts</a>
                      </li>

                      <li class="toggler-off dropdown-list-item--profile">
                        <a href="#">Profile</a>
                      </li>

                      <li class="toggler-off dropdown-list-item--my-subscriptions">
                        <a href="#">My Subscriptions</a>
                      </li>

                      <li class="toggler-off dropdown-list-item--experience">
                        <a href="#">My Purchases</a>
                      </li>

                      <li class="toggler-off dropdown-list-item--logout">
                        <a href="#">Logout</a>
                      </li>

                      <li class="toggler-off dropdown-list-item--login">
                        <a href="#">Login</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <FaRegEnvelope className="nav-icon-style" />
                    <span className="px-2">Subscribe</span>
                  </a>
                </li>
                <li
                  class="nav-item"
                  style={{
                    borderLeft: "1px solid #5ad1ff",
                  }}
                >
                  <a
                    href="https://www.nzme.co.nz"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="//new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png"
                      style={{
                        paddingLeft: "20px",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*********************************** nav 2 **********************************/}
        <nav class="navbar navbar-light nav-2 navbar-expand-lg">
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Browse Categories
                    <IoIosArrowDown className="nav2-icon-style-arrow" />
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li class="has-submenu">
                      <a class="dropdown-item" href="#">
                        <span>Activities, Events & Outdoors</span>
                        <RiArrowRightSLine className="submenu-arrow-icon" />
                      </a>
                      <div class="megasubmenu dropdown-menu">
                        <h5>Activities, Events & Outdoors</h5>
                        <article>
                          <p>Adventure & outdoors</p>
                          <span>BungyJumping, Camping, Horse Riding..</span>
                        </article>
                        <article>
                          <p>Fun & Lesisure</p>
                          <span>Amusement Parks, Bowling, Bus..</span>
                        </article>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a class="dropdown-item" href="#">
                        <span>Automative</span>
                        <RiArrowRightSLine className="submenu-arrow-icon" />
                      </a>
                      <div class="megasubmenu dropdown-menu">
                        <h5>Automative</h5>
                        <article>
                          <p>Automative Parts</p>
                          <span>
                            Automotive Accessories, Car Parts, Motor...
                          </span>
                        </article>
                        <article>
                          <p>Car Electronics</p>
                          <span>
                            Car Alarms, Car Amplifiers, Car GPS, Car..
                          </span>
                        </article>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    What's New
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Trending
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    For You
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Shop Products
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search GrabOne"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>
        <nav className="nav-3">
          <div className="nav3-container container">
            <div>
              <FiHome className="ico" /> <br />
              <span>Home</span>
            </div>
            <div>
              <FiSearch className="ico" /> <br />
              <span>Search</span>
            </div>
            <div>
              <AiOutlineAppstore className="ico" /> <br />
              <span>Categories</span>
            </div>
            <div>
              <CgShoppingCart className="ico" /> <br />
              <span>Cart</span>
            </div>
            <div>
              <IoPersonOutline className="ico" /> <br />
              <span>Account</span>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
