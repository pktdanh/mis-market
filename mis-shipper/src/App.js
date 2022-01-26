import React, {Component, createContext, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import "antd/dist/antd.css";
import { BackTop } from 'antd';

import Home from './pages/home/Home';
import Me from './pages/me/Me';
import Shipping from './pages/shipping/Shipping';
import Navigation from './components/Navigation/Navigation';
import ActiveSwitcher from './components/ActiveSwitcher/ActiveSwitcher';
import Login from './components/login/Login';
import Register from './components/register/Register'
// first we will make a new context
export const MyContext = React.createContext();


function App() {
  const [status, setStatus] = useState(false)
  const [isLogin, setIsLogin] = useState(localStorage.getItem("MISisShipperLogin") === "true" ? true : false)
  const [user, setUser] = useState(localStorage.getItem("MISShipper"))
  const [invoice, setInvoice] = useState({})
  return (
    <MyContext.Provider value={{
      status: status,
      isLogin: isLogin,
      user: user,
      updateStatus: () =>{
        setStatus(!status);
        localStorage.setItem("MISstatus",!status);
      },
      updateLogin: () =>{
        setIsLogin(!isLogin);
        localStorage.setItem("MISisShipperLogin",!isLogin);
      },
      updateUser: (data) =>{
        setUser(data);
        localStorage.setItem("MISShipper",data);
      }
    }}>
      {
        isLogin === true ? <>    
          <ActiveSwitcher></ActiveSwitcher>
          <BackTop />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="shipping/*" element={<Shipping></Shipping>} />
              <Route path="me/*" element={<Me></Me>} />
            </Routes>
            <Navigation></Navigation>
          </BrowserRouter>
        </> : <>
        <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Login></Login>} />
              <Route path="/register" element={<Register></Register>} />
            </Routes>            
          </BrowserRouter>
        </>
      }
    </MyContext.Provider>
  );
}


export default App;
