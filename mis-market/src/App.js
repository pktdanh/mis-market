import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Link,
   Switch,
   Redirect,
   useLocation
 } from "react-router-dom";
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Products';
import Homepage from './pages/Homepage'
import Footer from './components/Footter';
import ItemProduct from './components/ItemProduct';
import About from './components/About';
import Category from './pages/Category';
import AboutMe from './pages/AboutMe';
import MyOrder from './pages/MyOrder';
import OrderDetail from './pages/OrderDetail';
import Store from './pages/Store';
import Login from './pages/Login';
import Collection from './pages/Collection';

import './App.css'
function App() {
  return (
     <Router>
        <div className="containers">
            <Header />
            <Switch>
               <Route path="/" exact component={Homepage} />
               <Route path="/collections/:id" exact component={Collection}/>
               <Route path="/category/:id" exact component={Category}/>
               <Route path="/carts" exact component={Cart} />
               <Route path="/product/:id" exact component={ItemProduct}/>
               <Route path="/about" exact component={About} />
               <Route path="/aboutme" exact component={AboutMe} />
               <Route path="/myorder" exact component={MyOrder} />
               <Route path="/myorder/:id" exact component={OrderDetail} />
               <Route path="/store" exact component={Store} />
               <Route path="/store/:id" exact component={Store} />
               <Route path="/signin" exact component={Login} />
               <Route path="*">
            <NoMatch />
          </Route>
            </Switch>
            <Footer></Footer>
        </div>
     </Router>
  );
}

function NoMatch() {
   let location = useLocation();
 
   return (
     <div>
       <h3>
         No match for <code>{location.pathname}</code>
       </h3>
     </div>
   );
 }
 
export default App;

