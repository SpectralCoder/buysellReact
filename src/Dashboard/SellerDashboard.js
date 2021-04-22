import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Paper} from "@material-ui/core";

const SellerDashboard = () => {
    const paperStyle = {
        padding: 10,
        height: '40%', maxwidth: '100%',
        margin: "30px 110px auto",

    }
    return (
        <Grid container justify='flex-end' xs={12}>

            <Grid xs={2}><Button variant="contained" color='primary'> Add Shop </Button> </Grid>
            <Grid xs={12}>
                <Paper elevation={20} style={paperStyle}>
                    <Grid container>
                        <Grid xs={12}> User Name </Grid>
                        <Grid xs={2}> Item Count </Grid>
                        <Grid xs={10} container='row'  justify='flex-end'>
                            <Grid xs={2}> Orders</Grid>
                            <Grid xs={2}> Add Product</Grid>
                        </Grid>
                    </Grid>
                </Paper>

            </Grid>
            <Grid xs={12}>
                <Paper elevation={20} style={paperStyle}>
                    <Grid container>
                        <Grid xs={12}> User Name </Grid>
                        <Grid xs={2}> Item Count </Grid>
                        <Grid xs={10} container='row'  justify='flex-end'>
                            <Grid xs={2}> Orders</Grid>
                            <Grid xs={2}> Add Product</Grid>
                        </Grid>
                    </Grid>
                </Paper>

            </Grid>
        </Grid>
    );
};

export default SellerDashboard;