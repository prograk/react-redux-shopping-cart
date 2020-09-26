import React from "react";
import { connect } from "react-redux";
import history from "../history";

class CartIcon extends Component {

    constructor(props) {
        super(props)
    }

    handleNavigate = e => {
        e.preventDefault();
        history.push("/cart");
    }

    render() {
        const { products } = this.props;
        return (
            <a href="" className="header_cart" onClick={this.handleNavigate}>
                {products.totalProducts > 0 ? <div className="header_count">{products.totalProducts}</div> : ''}
                <i className="fa fa-shopping-cart header_icon" aria-hidden="true"></i>
            </a>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(CartIcon);