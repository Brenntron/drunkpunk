import React, { Component } from "react";
import "../App.scss";
import BeerMug from "../assets/images/icon_beer_mug.svg";
import splatter from "../assets/images/splatter.svg";

class Header extends Component {
  changeClass(e) {
    let items = document.getElementsByClassName("nav__item--active");

    if (items && items.length > 0) {
      items[0].classList.remove("nav__item--active");
    }

    e.target.className = "nav__item nav__item--active";
  }

  render() {
    let width = window.innerWidth;
    let displayIcon;

    if (width >= 1024) {
      displayIcon = true;
    } else {
      displayIcon = false;
    }

    return (
      <div className="header">
        <div className="title">
          {displayIcon ? (
            <img className="title__icon" src={BeerMug} alt="" />
          ) : null}
          <div className="title__text">PUNK OUT BREWS</div>
        </div>
        <div className="splatter">
          <div className="splatter__cover"></div>
          <img src={splatter} className="splatter__image" alt="" />
        </div>
        <div className="nav">
          <div
            className="nav__item nav__item--active"
            onClick={(e) => this.changeClass(e)}
          >
            <div className="nav__text">OUR BREWS</div>
          </div>
          <div className="nav__item" onClick={(e) => this.changeClass(e)}>
            <div className="nav__text">WHERE TO BUY</div>
          </div>
          <div className="nav__item" onClick={(e) => this.changeClass(e)}>
            <div className="nav__text">CONTACT</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
