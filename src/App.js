import React from "react";
import logo from './logo.svg';
import './App.css';

import {Header} from './parts/header'
import {Footer} from './parts/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-wrapper">123</div>
      <Footer/>
    </div>
  );
}

export default App;
