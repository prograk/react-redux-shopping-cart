import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import './index.scss';
import App from "./components/app";
import Cart from "./components/cart";
import Footer from "./components/footer";
import rootReducers from "./reducers";
import store from "./store";
import Loader from "./components/loader";
import Header from "./components/header";
import history from './history';

ReactDOM.render(
    <Provider store={store(rootReducers)}>
        <Header />
        <Router history={history}>
            <Suspense fallback={<Loader />}>
                <div>
                    <Route exact path="/" component={App} />
                    <Route exact path="/cart" component={Cart} />
                </div>
            </Suspense>
        </Router>
        <Footer />
    </Provider>,
    document.getElementById("root"));