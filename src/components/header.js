import React from "react";
import Search from "./search";
import CartIcon from "./carticon";
import history from "../history";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    handleNavigate = e => {
        e.preventDefault();
        history.push('/');
    }

    render() {
        return (
            <header className="header">
                <div className="container-fluid">
                    <div className="header_wrapper d-flex align-items-center justify-content-between">
                        <div className="header_common header_left">
                            <a href="#" className="header_logo" onClick={this.handleNavigate}>
                                <i className="fa fa-star header_icon header_icon-yellow" aria-hidden="true"></i>
                            </a>
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