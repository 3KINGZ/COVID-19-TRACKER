import React from "react";
import Card from "./Card";
import death from "../images/death.svg";
import recovery from "../images/recovery.svg";
import active from "../images/active-cases.svg";
import totalCases from "../images/hospital.svg";
import "./Card-container.css";

function CardContainer({ result }) {
  return (
    <div className="card-container">
      <Card
        imgSrc={totalCases}
        alt="total cases"
        data={result}
        label="TOTAL CASES"
      />
      <Card imgSrc={death} alt="deaths" data={result} label="TOTAL DEATHS" />
      <Card
        imgSrc={recovery}
        alt="total deaths"
        data={result}
        label="TOTAL RECOVERIES"
      />
      <Card
        imgSrc={active}
        alt="active cases"
        data={result}
        label="ACTIVE CASES"
      />
    </div>
  );
}

export default CardContainer;
