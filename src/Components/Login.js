import React from 'react'
import {Grid, Paper, Avatar, TextField, Button, Typography, Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleLogin from "react-google-login";
import {NodeFetchHelper} from "../Others/NodeFetchHelper";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {json} from "overmind";
import {SessionManager} from "../Others/SessionManager";


const GoogleIcon = () => {
    return <svg style={{width: 20, height: 20}} viewBox="0 0 24 24">
        <path fill="#000000"
              d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"/>
    </svg>
}
const api_endpoint = "http://localhost:2000/users/login/";


const responseFacebook = (response) => {
    const name = response.name;
    const email = response.email;
    const picture = response.picture.data.url;
    NodeFetchHelper.post(api_endpoint, null, null, {
        name,
        email,
        picture,


    }, function (statusCode, jsonData, ok) {
        if (statusCode >= 400) {
            // ERRR
        } else {
            SessionManager.saveAccessToken(jsonData)

        }
    })
}


const responseGoogle = (response) => {
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const picture = response.profileObj.imageUrl;
    NodeFetchHelper.post(api_endpoint, null, null, {
        name,
        email,
        picture,
    }, function (statusCode, jsonData, ok) {
        if (statusCode >= 400) {
            // ERRR
        } else {
            console.log(jsonData)
            SessionManager.saveAccessToken(jsonData)
        }
    })
}



const Login = () => {

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
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6} alignContent={'center'}>
                        <GoogleLogin
                            clientId="784820003359-1v2ifv8j3uu6g6co0j0bj2l78fa8vfeu.apps.googleusercontent.com"
                            render={renderProps => (
                                <Button variant="contained" color="#7CB342" fullWidth={1} startIcon={<GoogleIcon/>} onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</Button>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Grid>
                    <Grid item xs={6} alignContent={"center"}>
                        <FacebookLogin
                            appId="3651148031641282"
                            fields="name,email,picture"
                            callback={responseFacebook}
                            render={renderProps => (
                                <Button variant="contained" color="#7CB342" fullWidth={1} startIcon={<FacebookIcon/>} onClick={renderProps.onClick}>Facebook</Button>
                            )}
                        />
                    </Grid>
                </Grid>

                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
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
    )
}

export default Login
