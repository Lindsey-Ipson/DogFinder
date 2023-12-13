import React from 'react';
import "./DogDetails.css";

function DogDetails ({ dog }) {
  console.log('fvcytfcyu')
  console.log('DOG HERE:', dog)
  console.log('NAME HERE:', dog.name)
  console.log('AGE HERE:', dog.age)
  console.log('FACTS HERE:', dog.facts)
  console.log('SRC HERE:', dog.src)

  const factLis = dog.facts.map(fact => <li>{fact}</li>)

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