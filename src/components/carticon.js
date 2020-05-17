import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CartIcon extends Component {
    render() {
        return (
            <Link to="/cart" className="header_cart">
                {this.props.products.totalProducts > 0 ? <div className="header_count">{this.props.products.totalProducts}</div> : ''}
                <i className="fa fa-shopping-cart header_icon" aria-hidden="true"></i>
            </Link>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.products);
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(CartIcon);