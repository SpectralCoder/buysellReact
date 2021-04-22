import React from 'react';
import {Avatar, Button, Grid, Link, Paper, TextField, Typography} from "@material-ui/core";
import {SessionManager} from "../Others/SessionManager";

const UserProfile = () => {
    const paperStyle = {
        padding: 20,
        height: '70vh', width: 320,
        margin: "50px 150px auto"
    }
    const avatarStyle = {backgroundColor: '#1bbd7e'}
    const btnstyle = {margin: '8px 0'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><img src={SessionManager.getUserPicture()} ></img></Avatar>
                    <h2> {SessionManager.getUserName()}</h2>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6} alignContent={'center'}>

                    </Grid>
                    <Grid item xs={6} alignContent={"center"}>

                    </Grid>
                </Grid>

                <Grid align='center'>
                    <Typography>
                        <Link href="#">
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Typography> Do you want an account ?
                        <Link href="#">
                            Sign Up
                        </Link>
                    </Typography>
                </Grid>

            </Paper>
        </Grid>
    );
};

export default UserProfile;