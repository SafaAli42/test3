// --task day 1---
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer.js";


function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer/>
    </>
  );
}

export default App;


// ----day1----
// import React from 'react';
// class App extends React.Component{

//   componentDidMount(){
//     console.log("DID Mount")

//   }

//   componentDidUpdate(){

//   }

//   componentWillUnmount(){

//   }

//   render(){
//     return( 
//     <h1>hello </h1>
//     );
//   }

// }

// export default App;


// import logo from './logo.svg';
// import './App.css';
// // ------day2---------
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import AddUser from "./pages/AddUser";
// import Home fr
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

