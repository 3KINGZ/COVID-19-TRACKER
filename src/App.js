import React, { useState, useEffect, useRef } from "react";
import CardContainer from "./component/Card-container";
import Table from "./component/Table";
import virus from "./images/virus (1).svg";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const input = useRef();

  useEffect(() => {
    onSearchCountry();
  }, []);

  useEffect(() => {
    fetch(
      `https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search
      `
    )
      .then((res) => res.json())
      .then((json) =>
        // Save the posts into state
        setData(json.data.rows.map((c) => c))
      )
      .catch((error) => {
        setError("...oops an error occured while loading page");
      });
  }, []);

  function onSearchCountry() {
    setSearch(input.current.value);
    fetch(
      `https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=${
        search ? search : "world"
      }`
    )
      .then((res) => res.json())
      .then((json) =>
        // Save the posts into state
        setSearchResult(json.data.rows.map((c) => c))
      )
      .catch((error) => {
        setError("...oops an error occured while loading page");
      });
  }
  console.log(error);

  return (
    <div className="app">
      <h1>
        <img src={virus} alt="virus" /> COVID-19 Tracker
      </h1>
      <p className="info">Know the stats of the coronavirus spread</p>
      <input
        type="text"
        placeholder="Search country"
        ref={input}
        onKeyPress={(event) =>
          event.key === "Enter" ? onSearchCountry() : null
        }
      />
      <div className="country">{search ? search : "world"}</div>
      {searchResult.length > 0 ? (
        <CardContainer result={searchResult} />
      ) : (
        <h1>...oops no data on the country you searched</h1>
      )}
      <Table data={data} />
      <h3>
        *please stay safe{" "}
        <span role="img" aria-label="face with mask">
          😷
        </span>
        *
      </h3>
    </div>
  );
}

export default App;
