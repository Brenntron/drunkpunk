import React from "react";
import FoodPairingIcon from "../assets/images/icon_food_pairing.svg";

function SetItem(props) {
  const { beer } = props;

  return (
    <div className="set-item">
      <div className="set-item__image-container">
        <img className="set-item__image" src={beer.image_url} alt="" />
      </div>
      <div className="set-item__description-container">
        <header className="set-item__name">{beer.name.toUpperCase()}</header>
        <p className="set-item__tagline">{beer.tagline}</p>
        <div className="set-item__ratings-container">
          <p className="set-item__ratings-title">IBU</p>
          <p className="set-item__ratings-number">{beer.ibu}</p>
          <p className="set-item__ratings-divider">|</p>
          <p className="set-item__ratings-title">ABV</p>
          <p className="set-item__ratings-number">{beer.abv}%</p>
        </div>
        <p className="set-item__description">{beer.description}</p>
        <div className="set-item__food-pairing-container">
          <img
            className="set-item__food-pairing-icon"
            src={FoodPairingIcon}
            alt=""
          />
          <div className="set-item__food-pairing-list">
            {beer.food_pairing.length > 0
              ? beer.food_pairing.map((food_pairing) => (
                  <p className="set-item__food-pairing">{food_pairing}</p>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetItem;
