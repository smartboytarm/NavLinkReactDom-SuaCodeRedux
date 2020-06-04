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
function App() {
  return (
    <div className="App">
      {/* <CarRedux></CarRedux> */}
      {/* <BaiTapGameBauCuaRedux></BaiTapGameBauCuaRedux> */}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/hoc' component={Parent}/>
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
