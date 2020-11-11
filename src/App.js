import React from "react";
import { BrowserRouter , Route} from 'react-router-dom'

import './App.css';

import {Header} from './parts/header'
import {Home} from './pages/home/index'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
