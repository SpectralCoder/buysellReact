import React from 'react';
import {Grid, Paper, Avatar, TextField, Button, Typography, Link, Box, CssBaseline, Container} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const SignUp = () => {
    const paperStyle = {
        padding: 20,
        height: '80vh', width: 450,
        margin: "50px 150px auto"
    }
    const avatarStyle = {backgroundColor: '#1bbd7e'}
    const btnstyle = {margin: '8px 0'}
    return (
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid  container item xs={12} align='center' spacing={1}>
                    <CssBaseline/>
                    <Grid  item xs={12}>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>

                    </Grid>

                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>

                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid spacing={20}>


                            <form noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                    </Grid>

                                    <Grid item xs={6} sm={6}>

                                    </Grid>
                                    <Grid item xs={6} sm={6}>

                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"

                                >
                                    Sign Up
                                </Button>
                                <Grid container justify="center">
                                    <Grid item align={'center'}>
                                        <Link href="#" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>


                    </Grid>
                </Grid>

            </Paper>


        </Grid>
    );
};

export default SignUp;