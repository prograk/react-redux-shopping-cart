import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import './index.scss';
import App from "./components/app";
import Cart from "./components/cart";
import Footer from "./components/footer";
import rootReducers from "./reducers";
import store from "./store";

ReactDOM.render(
    <Provider store={store(rootReducers)}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/cart" component={Cart} />
            </div>
        </BrowserRouter>
        <Footer />
    </Provider>,
    document.getElementById("root"));