import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';


function CheckForDog({ dogs }) {

  const { name } = useParams();
  console.log('DOGS HERE:', dogs)
  console.log('NAME HERE:', name)

  if (name) {
    const searchedDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={searchedDog} />;
  }

  return null;
}

export default CheckForDog;