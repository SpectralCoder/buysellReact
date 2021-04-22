import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AppToolbar from "./AppToolbar/AppToolbar";
import DummyComponent from "./Components/DummyComponent";
import Home from "./Components/Home";
import ShowMore from "./Components/ShowMore";
import Top from "./Components/Top";
import {Logics} from "./Others/Logics";
import {useOvermind} from "./Others/OvermindHelper";
import CartDesign from "./Components/CartDesign";
import BecomeSeller from "./Components/BecomeSeller";
import ImgUpload from "./Others/ImgUpload";
import AddProduct from "./Components/AddProduct";
import SellerDashboard from "./Dashboard/SellerDashboard";

const App = () => {
    const {state, actions} = useOvermind();

    useEffect(() => {
        Logics.getCartCount(function (length) {
            actions.setCartCounter(length);
        })
    }, [])

    return (
        <Router>
            <AppToolbar/>
            <Switch>
                <Route path="/cart">
                    <CartDesign/>
                </Route>
                <Route path="/dashboard">
                    <SellerDashboard />
                </Route>

                <Route path="/imgUpload">
                    <AddProduct/>
                </Route>

                <Route path="/becomeSeller">
                    <BecomeSeller/>
                </Route>

                <Route path="/login">
                    <DummyComponent/>
                </Route>
                <Route path="/top">
                    <Top/>
                </Route>
                <Route path="/showMore/:category">
                    <ShowMore/>
                </Route>
                <Route path="/">
                    <Home/>

                </Route>
            </Switch>
        </Router>
    );

};

export default App;