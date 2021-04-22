import React from 'react';
import {Grid} from "@material-ui/core";
import Login from "./Login";
import SignUp from "./SignUp";
import {SessionManager} from "../Others/SessionManager";
import UserProfile from "./UserProfile";

const DummyComponent = () => {
    return (
        <Grid container direction='row'>
            <Grid container item xs={1}>{

}
            </Grid>
            <Grid container item xs={5}>{


            }
            </Grid>

            <Grid container item xs={5}>
                <Login/>
            </Grid>
        </Grid>
    );
};

export default DummyComponent;