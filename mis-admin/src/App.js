import React, {Component, createContext, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import "antd/dist/antd.css";

import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
