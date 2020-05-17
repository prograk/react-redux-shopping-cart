import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import CartIcon from "./carticon";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container-fluid">
                    <div className="header_wrapper d-flex align-items-center justify-content-between">
                        <div className="header_common header_left">
                            <Link to="/" className="header_logo">
                                <i className="fa fa-star header_icon header_icon-yellow" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <div className="header_common header_right d-flex align-items-center">
                            <Search />
                            <CartIcon />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;