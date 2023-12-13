import React from 'react';
import {v1 as uuid} from "uuid";
import "./DogDetails.css";

function DogDetails ({ dog }) {

  const factLis = dog.facts.map(fact => <li key={uuid()}>{fact}</li>)

  return (
    <div className="DogDetails">
      <h1>Meet {dog.name}!</h1>
      <img src={dog.src} alt={dog.name} />
      <ul>
        <li>{dog.name} is {dog.age} years old.</li>
        {factLis}
       </ul>
    </div>
  )
};

export default DogDetails;