import React from "react";
import "../App.scss";
import rocknrollHand from "../assets/images/icon_rocknroll_hand.svg";
import mail from "../assets/images/icon_mailing_list.svg";

function Welcome() {
  return (
    <div className="welcome">
      <div className="description">
        <header className="description__title">WELCOME!</header>
        <p className="description__prompt">
          Back in 1992 Phillipe Gonzolaz and Roger Carpendar set off on a
          mission to create a perfectly balanced beer that would be refreshing,
          delicious, and infinitely drinkable. Their flagship lager took off and
          soon after they started pexerimenting with different styles of beer
          and more unique flavors and ingredients. Now Punk Out Brews has over
          30 awesomely distinct award-winning beers for every pallette.
        </p>
        <div className="description__tag">
          <p className="description__tagText">Find your inner Punk!</p>
          <img src={rocknrollHand} className="description__hand" alt="" />
        </div>
      </div>
      <div className="mailingList">
        <header className="mailingList__title">JOIN OUR MAILING LIST</header>
        <img src={mail} className="mailingList__mailIcon" alt="" />
        <p className="mailingList__prompt">
          Sign up and we'll send you info about exclusive beer premieres,
          festivals we'll be at, and special promotions!
        </p>
        <form className="mailingList__form">
          <input
            className="mailingList__input"
            type="text"
            placeholder="beerafficionado@rockstar.com"
          />
          <input
            className="mailingList__button"
            type="submit"
            value="Heck Yes!"
          />
        </form>
      </div>
    </div>
  );
}

export default Welcome;
