import React, {useEffect, useState} from 'react';
import {Box, ButtonBase, IconButton, makeStyles, Paper, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Logics} from "../Others/Logics";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import {NodeFetchHelper} from "../Others/NodeFetchHelper";
import {SessionManager} from "../Others/SessionManager";
import io from "socket.io-client";

const socENDPOINT = 'http://localhost:2000/';
let socket ;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),

        Width: 500,
        Height: 100,
    },
    image: {
        width: 100,
        height: 100,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    indiPaper: {
        Width: 500,
        Height: 150,

    },
}));


const CartDesign = () => {
    const classes = useStyles();
    const [count, setCount] = useState(0)

    const [arrCart, setCart] = useState([])

    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        Logics.getCart(setCart)

        console.log('Hello I am from use Effect...')
    }, []);
    const paperStyle = {
        padding: 10,
        height: '80vh', width: '76vh',

    }
    const boxStyle = {
        height: '60vh', width: '76vh',
    }

    return (
        <Grid container>
            <Grid xs={2} sm={2}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center' style={{backgroundColor: '#4caf50'}}>
                        Cart
                    </Grid>
                    <Grid>
                        <Box style={boxStyle} overflow="auto">
                            {/*<Paper className={classes.paper} elevation={15}>*/}


                            <Grid container direction='column'>
                                {
                                    arrCart.map((item, index) => {
                                        {
                                            if (totalAmount == 0) {
                                                Logics.getCartTotalAmount(arrCart, setTotalAmount)

                                            }
                                        }
                                        return (
                                            <div className={classes.root}>
                                                <Paper elevation={15} className={classes.indiPaper}>
                                                    <Grid container>
                                                        <Grid item xs={3} sm={3}>
                                                            <ButtonBase className={classes.image}>
                                                                <img className={classes.img} alt="complex"
                                                                     src={item.products.picture}/>
                                                            </ButtonBase>
                                                        </Grid>
                                                        <Grid container xs={6} direction='column'>
                                                            <Grid xs={3}>
                                                                <Typography gutterBottom variant="subtitle1">
                                                                    {item.products.name}

                                                                </Typography>
                                                            </Grid>
                                                            <Grid xs={3}>
                                                                <Typography gutterBottom variant="subtitle1">
                                                                    {/*{item.products.shop}*/}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid xs={3} alignContent={'center'}>
                                                                <Button color="secondary">Remove</Button>
                                                            </Grid>

                                                        </Grid>
                                                        <Grid container direction='column' xs={3}>
                                                            <Grid align='center'>
                                                                <Typography gutterBottom variant="subtitle1">
                                                                    Price:{item.products.price * item.count}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid align='center'>
                                                                <IconButton aria-label="minus" onClick={() => {

                                                                    item.count--;
                                                                    setCount(count - 1)
                                                                    if (item.count < 1) {
                                                                        item.count = 1
                                                                        setCount(1)
                                                                    }
                                                                    Logics.getCartTotalAmount(arrCart, setTotalAmount)


                                                                }}>
                                                                    <IndeterminateCheckBoxOutlinedIcon
                                                                        fontSize="small"/>
                                                                </IconButton>

                                                                {item.count}
                                                                <IconButton aria-label="plus" onClick={() => {
                                                                    item.count++;
                                                                    setCount(count + 1)
                                                                    Logics.getCartTotalAmount(arrCart, setTotalAmount)
                                                                }}>
                                                                    <AddBoxOutlinedIcon fontSize="small"/>
                                                                </IconButton>


                                                            </Grid>
                                                            <Grid align='center'>
                                                                Buy
                                                            </Grid>

                                                        </Grid>
                                                    </Grid>
                                                </Paper>


                                            </div>

                                        )

                                    })
                                }


                            </Grid>

                            {/*</Paper>*/}
                        </Box>
                    </Grid>
                    <Grid>
                        <Typography gutterBottom variant="subtitle1">
                            Total
                        </Typography>

                        {totalAmount}

                    </Grid>
                    <Grid>
                        <Button onClick={() => {
                            socket = io(socENDPOINT);
                            socket.emit('message','I am message...')
                            console.log("kire bhai")
                            // NodeFetchHelper.post(`http://localhost:2000/orders/`, null,
                            //     {Authorization: 'Bearer ' + SessionManager.getAccessToken()}
                            //     ,
                            //     {
                            //         products: arrCart[0].products,
                            //         Buyer: SessionManager.getUserId()
                            //     }, function (statusCode, jsonData, ok) {
                            //         if (statusCode >= 400) {
                            //             console.log("sorry, can't put in")
                            //
                            //         } else {
                            //
                            //             socket.emit('notification', {product: jsonData.products})
                            //
                            //         }
                            //     })
                        }}>
                            Checkout
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    );
}

export default CartDesign;
