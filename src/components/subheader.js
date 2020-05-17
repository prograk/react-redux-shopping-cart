import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { productSortAction, productsRangeListing } from "../action";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

class SubHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSort: '',
            modal: false,
            modalFor: '',
            value: {
                min: 0,
                max: 100000
            }
        }
    }

    handleSliderChange = (value) => {
        if (value.max <= 100000)
            this.setState({ value })
    }

    closePopup = () => {
        this.setState({
            modal: false,
            modalFor: ""
        })
    }

    submitFilter = () => {
        event.preventDefault();
        const { value } = this.state;
        this.closePopup();
        this.props.productsRangeListing(value);
    }

    handleClick = (action) => {
        this.setState({
            activeSort: action,
            modal: false
        })
        this.props.productSortAction(action);
    }

    handleClickMobile = (value) => {
        let { modalFor } = this.state;
        modalFor = value

        this.setState({
            modal: true,
            modalFor
        })
    }

    render() {
        const { activeSort, modal, modalFor, value } = this.state;
        return (
            <>
                <div className="subHeader">
                    <div className="subHeader_wrapper">
                        <div className="subHeader_mobile">
                            <div className="subHeader_mobile_common subHeader_mobile_sort" onClick={() => this.handleClickMobile("Sort Options")}>
                                <i className="fa fa-sort"></i> Sort
                        </div>
                            <div className="subHeader_mobile_common subHeader_mobile_filter" onClick={() => this.handleClickMobile("Filter Options")}>
                                <i className="fa fa-filter"></i> Filter
                        </div>
                        </div>
                        <ul className="subHeader_list"><span className="subHeader_title">Sort By</span>
                            <li><div className={`${activeSort === "SORT_DESENDING" ? 'active' : ''}`} onClick={() => this.handleClick("SORT_DESENDING")}>Price -- High Low</div></li>
                            <li><div className={`${activeSort === "SORT_ASENDING" ? 'active' : ''}`} onClick={() => this.handleClick("SORT_ASENDING")}>Price -- Low High</div></li>
                            <li><div className={`${activeSort === "SORT_DISCOUNT" ? 'active' : ''}`} onClick={() => this.handleClick("SORT_DISCOUNT")}>Discount</div></li>
                        </ul>
                    </div>
                </div>

                <div className={`modal fade ${modal ? "show" : ''}`} role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{modalFor}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closePopup}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {modalFor === "Sort Options" ?
                                    <div className="body_sort">
                                        <ul className="body_list">
                                            <li><div className={`${activeSort === "SORT_DESENDING" ? 'active' : ''}`} onClick={() => this.handleClick("SORT_DESENDING")}>Price -- High Low</div></li>
                                            <li><div className={`${activeSort === "SORT_ASENDING" ? 'active' : ''}`} onClick={() => this.handleClick("SORT_ASENDING")}>Price -- Low High</div></li>
                                            <li><div className={`${activeSort === "SORT_DISCOUNT" ? 'active' : ''}`} onClick={() => this.handleClick("SORT_DISCOUNT")}>Discount</div></li>
                                        </ul>
                                    </div>
                                    :
                                    <div className="body_filter">
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
                                                            onChange={this.handleSliderChange} />
                                                        <div className="filter_label">Price</div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-blue" onClick={this.submitFilter}>Apply</button>
                                            </form>
                                        </div >
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ productSortAction, productsRangeListing }, dispatch)
}

export default connect(null, mapDispatchToProps)(SubHeader);