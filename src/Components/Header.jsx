import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="#">CYBERSOFT</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-link"  to="/home" activeClassName="bg-dark" activeStyle={{color:"red"}}>Trang Chủ <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/login" activeClassName="bg-dark" activeStyle={{color:"red"}}>Đăng Nhập </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/register" activeClassName="bg-dark" activeStyle={{color:"red"}}>Đăng Ký</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/hoc" activeClassName="bg-dark" activeStyle={{color:"red"}}>H.O.C</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
