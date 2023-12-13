import './App.css';
// import { Route, BrowserRouter } from "react-router-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
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

// import './App.css';
// // import { Route, BrowserRouter } from "react-router-dom";
// import { Switch, Route, Redirect } from "react-router-dom";
// // import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import DogList from "./DogList";
// import DogDetails from "./DogDetails";

// import whiskey from "./images/whiskey.jpg";
// import duke from "./images/duke.jpg";
// import perry from "./images/perry.jpg";
// import tubby from "./images/tubby.jpg";

// function App() {
//   return (
//     <Switch>
//       <Route exact path="/dogs" >
//         <DogList dogs={App.defaultProps.dogs} />
//       </Route>
//       <Route path="/dogs/:name" >
//         <DogDetails />
//       </Route>
//       <Redirect to="/dogs" />
//     </Switch>
//   );
// }
