
import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge, Button, ClickAwayListener, Grow, IconButton, makeStyles, Paper, Popper} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import {SessionManager} from "../Others/SessionManager";
import {withStyles} from "@material-ui/core/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useOvermind} from "../Others/OvermindHelper";

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);


const useStyles = makeStyles((theme) => ({
    header: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        minHeight: 50,

    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const PendingAppToolbar = () => {
    const {state, actions} = useOvermind();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        console.log(event.name)
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            console.log(event.target);
            return;
        }

        setOpen(false);
    };


    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    return (
        <div>
            <AppBar position="static" className={classes.header}>
                <Toolbar variant="dense">
                    <Grid container spacing={0}>
                        <Grid item xs={5}>
                            <Button component={Link} to='/'>
                                Bi-cell
                            </Button>

                        </Grid>
                        <Grid item xs={1}>
                            <Button fullWidth={1} component={Link} to='/top'>
                                top
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button fullWidth={1}>Shops</Button>

                        </Grid>
                        <Grid item xs={1}>
                            <Button fullWidth={1}> Categories</Button>
                        </Grid>

                        <Grid item xs={3} container spacing={3}>

                            <Grid item xs={6}>
                                <Button fullWidth={1}> Notification</Button>
                            </Grid>


                            <Grid item xs={6}>

                                <div>
                                    <Button
                                        fullWidth={1}
                                        ref={anchorRef}
                                        aria-controls={open ? 'menu-list-grow' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                    >
                                        <MenuIcon/>
                                    </Button>
                                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition
                                            disablePortal>
                                        {({TransitionProps, placement}) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                            >
                                                <Paper elevation={10}>
                                                    <Grid align='center'>
                                                        <img src={SessionManager.getUserPicture()}></img>
                                                        <p> {SessionManager.getUserName()}</p>
                                                    </Grid>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6} alignContent={'center'}>

                                                        </Grid>
                                                        <Grid item xs={6} alignContent={"center"}>

                                                        </Grid>
                                                    </Grid>
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList autoFocusItem={open} id="menu-list-grow"
                                                                  onKeyDown={handleListKeyDown}>
                                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                                            <MenuItem component={Link} to={"/login"}
                                                                      onClick={handleClose}>Sign Out</MenuItem>
                                                            <MenuItem >Pending</MenuItem>
                                                        </MenuList>
                                                    </ClickAwayListener>

                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton aria-label="cart">
                                <StyledBadge showZero badgeContent={state.counter} color="secondary" component={Link}
                                             to={"/cart"}
                                             onClick={handleClose}>
                                    <ShoppingCartIcon/>
                                </StyledBadge>
                            </IconButton>
                        </Grid>


                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default PendingAppToolbar;