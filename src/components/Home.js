import React, { useState, useEffect } from "react";

import "./Home.css";

export default function Home() {
  const [data, setData] = useState([]);

  const Response = async () => {
    const dataDetails = await fetch(
      "https://restcountries.eu/rest/v2/region/asia"
    );
    setData(await dataDetails.json());
  };

  const refreshBtn = () => {
    window.location.reload(true);
  };

  useEffect(() => {
    Response();
  }, []);

  return (
    <div className="mainContainer">
      <h1>Asian Countries</h1>
      <div className="subConatiner">
        {data.map((elm) => {
          return (
            <div className="boxContainer">
              <div className="flagImage">
                <img src={elm.flag} alt="FlagImg" width="100px"></img>
              </div>
              <div>
                <h2>{elm.name}</h2>
                <div>
                  <h4>Capital : {elm.capital}</h4>
                  <h4>Region : {elm.region}</h4>
                  <h4>Subregion : {elm.subregion}</h4>
                  <h4>Population : {elm.population}</h4>
                  <h4>
                    Borders :
                    {elm.borders &&
                      elm.borders.length > 0 &&
                      elm.borders.map((elem) => ` ${elem.toString()},`)}
                  </h4>
                  <h4>
                    Language :
                    {elm.languages &&
                      elm.languages.length > 0 &&
                      elm.languages.map((elem) => ` ${elem.name.toString()},`)}
                  </h4>
                </div>
              </div>
              <div>
                <button className="button" type="reset" onClick={refreshBtn}>
                  Refresh
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
