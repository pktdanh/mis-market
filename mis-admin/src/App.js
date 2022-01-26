import React, {Component, createContext, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import "antd/dist/antd.css";

import Home from "./pages/Home";
import Login from './pages/Login'
import Register from './pages/Register';
import TableListInvoice from './components/tableListInvoice/TableListInvoice'

import BarChart from './components/chart/BarChart'

export const MyContext = React.createContext();

function App() {
  // const [store, setStore] = useState(localStorage.getItem("MIS_Admin"))
  // const [newInvoice, setNewInvoice] = useState(localStorage.getItem("MIS_newInvoice"))
  const [isLogin, setIsLogin] = useState(localStorage.getItem("MIS_Admin") === "true" ? true : false)
  return (
    <MyContext.Provider value={{
      isLogin: isLogin,
      updateLogin: () =>{
        setIsLogin(!isLogin);
        localStorage.setItem("MIS_Admin",!isLogin);
      },
    }}>
      {
        isLogin === true ? <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>} />              
              <Route path="/invoices" element={<TableListInvoice></TableListInvoice>} />                 
            </Routes>            
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
