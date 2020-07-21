import React, { useState, useEffect } from "react";
import CardContainer from "./component/Card-container";
import Table from "./component/Table";
import virus from "./images/virus (1).svg";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    onSearchCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    fetch(
      `https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=${
        search ? search : "world"
      }`
    )
      .then((res) => res.json())
      .then(
        (json) =>
          // Save the posts into state
          setSearchResult(json.data.rows.map((c) => c)),
        setSearch("")
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
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? onSearchCountry() : null
        }
      />
      {searchResult.length > 0 ? (
        <>
          <h3 className="country">{searchResult[0].country}</h3>
          <CardContainer result={searchResult} />
        </>
      ) : (
        <h1>...oops no data on the country you searched</h1>
      )}
      <Table data={data} />
      <h3 className="footer">
        please stay safe{" "}
        <span role="img" aria-label="face with mask">
          😷
        </span>
      </h3>
    </div>
  );
}

export default App;
