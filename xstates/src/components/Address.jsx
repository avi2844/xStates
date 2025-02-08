import React, { useState } from "react";
import Country from "./Country";
import States from "./States";
import Cities from "./Cities";

function Address() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <>
      <h1>Select Location</h1>
      <Country cityHandler={setCountry}/>
      <States country={country} stateHandler={setState} state={state}/>
      <Cities country={country} state={state} city={city} cityHandler={setCity} stateHandler={setState}/>
      {
        (country && city && state) ? <h2>You selected {city}, {state}, {country}</h2> : null
      }
    </>
  );
}

export default Address;
