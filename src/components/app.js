
import React from "react";
import SubHeader from "./subheader";
import ShoppingList from "./shoppinglist";
import Filter from "./filter";

const App = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="product_container container_common">
                    <div className="row">
                        <div className="col-2 product_col_filter">
                            <Filter />
                        </div>
                        <div className="col-10 product_col_list">
                            <SubHeader />
                            <ShoppingList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;