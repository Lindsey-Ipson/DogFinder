import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

const DogList = ({ dogs }) => {
  return (
    <div className='DogList'>
      <h1>Meet the dogs!</h1>
      {dogs.map(dog => (
        <div className="DogList-dog-container">
          <img src={dog.src} alt={dog.name} />
          <div className="DogList-name">
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
          </div>
        </div>
      ))}
    </div>
  )
};

export default DogList;
