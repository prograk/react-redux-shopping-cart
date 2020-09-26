import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, } from "redux";
import { productsRangeListing } from "../action";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

class Filter extends Component {

    state = {
        value: {
            min: 0,
            max: 100000
        }
    }

    constructor(props) {
        super(props);
    }

    handleChange = (value) => {
        if (value.max <= 100000)
            this.setState({ value })
    }

    submitFilter = (event) => {
        event.preventDefault();
        const { value } = this.state;
        this.props.productsRangeListing(value);
    }

    render() {
        const { value } = this.state;
        return (
            <div className="filter">
                <div className="filter_title">Filters</div>
                <form>
                    <div>
                        <div className="filter_slider">
                            <InputRange
                                minValue={0}
                                maxValue={100000}
                                value={value}
                                formatLabel={value => `₹${value}`}
                                onChange={this.handleChange} />
                            <div className="filter_label">Price</div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-blue" onClick={this.submitFilter}>Apply</button>
                </form>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ productsRangeListing }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);