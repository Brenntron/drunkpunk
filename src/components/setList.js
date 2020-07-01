import React, { useState, useEffect, useReducer } from "react";
import "../App.scss";
import { connect } from "react-redux";
import axios from "axios";
import fetchReducer from "../reducers/fetchReducer";
import { Checkbox } from "antd";
import SetItem from "./setItem";
import InputRange from "react-input-range";

function SetList() {
  const [{ beers }, dispatch] = useReducer(fetchReducer, {
    beers: [],
  });
  const [beerName, setBeerName] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [flavorNotes, setFlavorNotes] = useState([]);
  const [Ibu, setIbu] = useState({ min: 0, max: 120 });
  const [Abu, setAbu] = useState({ min: 0, max: 13 });
  const flavorOptions = [
    "Hoppy",
    "Citrus",
    "Malty",
    "Herbal",
    "Bitter",
    "Fruity",
    "Toasty",
    "Earthy",
    "Sour",
    "Dry",
    "Caramel",
    "Smokey",
    "Tart",
    "Crisp",
    "Toffee",
    "Spicey",
  ];

  let punkApi = new URL("https://api.punkapi.com/v2/beers");

  async function fetchPunk(beerName, dispatch, cancelToken) {
    const params = {
      abu_lt: Abu.max,
      abu_gt: Abu.min,
      ibu_lt: Ibu.max,
      ibu_gt: Ibu.min,
      beer_name: beerName,
    };

    if (beerName === "") {
      return undefined;
    }

    dispatch({ type: "FETCH_START" });

    try {
      punkApi.search = new URLSearchParams(params).toString();
      const result = await axios.get(punkApi, {
        cancelToken,
      });

      dispatch({ type: "FETCH_SUCCESS", payload: result.data });
    } catch (err) {
      console.error(err);
      axios.isCancel(err) || dispatch({ type: "FETCH_ERROR" });
    }
  }

  useEffect(() => {
    const { cancel, token } = axios.CancelToken.source();
    const timeOutId = setTimeout(
      () => fetchPunk(beerName, dispatch, token),
      500
    );

    return () => cancel("No longer latest query") || clearTimeout(timeOutId);
  }, [beerName]);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function handleOnChange(checkedValues) {
    setFlavorNotes(checkedValues);
  }

  function displayedBeers() {
    displayedBeers = beers.filter((beer) => beer.tagline.includes(flavorNotes));
    // No clear way to filter flavor notes from the data given... would need to talk to API team or get another
    // perspective.... regardless here's about how I'd filter the data.
    return displayedBeers;
  }

  return (
    <div className="set-list">
      <div className="set-list__search-bar">
        <header className="set-list__title">THE SET LIST</header>
        <div onClick={toggleMenu} className="set-list__filter-button">
          FILTER BY
        </div>
        <div className="set-list__search-box">
          <input
            className="set-list__input"
            onChange={(e) => setBeerName(e.target.value)}
            placeholder="Search for Beer Name or Type"
            type="text"
            value={beerName}
          />
        </div>
      </div>
      {showMenu ? (
        <div className="filter-menu">
          <header className="filter-menu__title">FLAVOR NOTES</header>
          <Checkbox.Group options={flavorOptions} onChange={handleOnChange} />
          <form className="filter-menu__slider-form">
            <InputRange
              maxValue={120}
              minValue={0}
              onChange={(value) => setIbu(value)}
              step={1}
              value={Ibu}
            />
          </form>
        </div>
      ) : null}
      {beers.length > 0 ? (
        <div className="set-list__results">
          {displayedBeers().map((beer) => (
            <SetItem beer={beer} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default connect()(SetList);
