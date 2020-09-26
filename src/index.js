import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import './index.scss';
import App from "./components/app";
import Cart from "./components/cart";
import Footer from "./components/footer";
import rootReducers from "./reducers";
import store from "./store";
import Header from "./components/header";
import history from './history';

ReactDOM.render(
    <Provider store={store(rootReducers)}>
        <Header />
        <Router history={history} basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/cart" component={Cart} />
                <Route component={() => (<div>404 Not found</div>)} />
            </Switch>
        </Router>
        <Footer />
    </Provider>,
    document.getElementById("root"));