import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom' ;

// import logo from './logo.svg';
import CarRedux from './Components/CarRedux/CarRedux';
import BaiTapGameBauCuaRedux from './Components/BaiTapCaCuoc/BaiTapGameBauCuaRedux';
//import component for routing
import Header from './Components/Header';
import Home from './Routing/Home';
import Login from './Routing/Login';
import Register from './Routing/Register';
import Parent from './HOC/Parent';

//Higher Other Component H.O.C in react
import {HomeTemplate} from './Routing/Templates/HomeTemplate'
import { AdminTemplate } from './Routing/Templates/AdminTemplate';

function App() {
  return (
    <div className="App">
      {/* <CarRedux></CarRedux> */}
      {/* <BaiTapGameBauCuaRedux></BaiTapGameBauCuaRedux> */}
      <BrowserRouter>
        <Header />
        <Switch>
          <HomeTemplate path="/home" exact component={Home}></HomeTemplate>
          <HomeTemplate path="/" exact component={Home}></HomeTemplate>
          <AdminTemplate path="/login" exact component={Login}></AdminTemplate>
          <HomeTemplate path="/register" exact component={Register}></HomeTemplate>
          <HomeTemplate path="/hoc" exact component={Parent}></HomeTemplate>
          {/* <HomeTemplate path="/register" exact component={Register}></HomeTemplate> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
