import React from "react";
import "./Table.css";

function Table({ data }) {
  return (
    <div>
      <div className="country-data">
        <h2>Country Data</h2>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Active Cases</th>
            </tr>
          </thead>
          {data.length > 0
            ? data.map((country) => (
                <tr key={country.country.length * Math.random() * 100}>
                  <td>
                    <img src={country.flag} alt={`${country.country} flag`} />
                    {country.country}
                  </td>
                  <td>{country.total_cases}</td>
                  <td>{country.total_deaths}</td>
                  <td>{country.total_recovered}</td>
                  <td>{country.active_cases}</td>
                </tr>
              ))
            : null}
        </table>
      </div>
    </div>
  );
}

export default Table;
