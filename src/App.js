import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import NavBar from "./NavBar";
import CheckForDog from "./CheckForDog";


function App() {
  return (
    <BrowserRouter>
    <NavBar dogs={App.defaultProps.dogs} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={App.defaultProps.dogs} />} />
        <Route path="/dogs/:name" element={<CheckForDog dogs={App.defaultProps.dogs}/>} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </BrowserRouter>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: '/whiskey.jpg',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: '/duke.jpg',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: '/perry.jpg',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: '/tubby.jpg',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};

export default App;