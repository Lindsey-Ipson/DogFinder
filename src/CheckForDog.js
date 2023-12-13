import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';


function CheckForDog({ dogs }) {

  const { name } = useParams();

  if (name) {
    const searchedDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={searchedDog} />;
  }

  return null;
}

export default CheckForDog;