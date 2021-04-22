import React from "react";
import ReactDOM from "react-dom";
import {
    CardContent,
    Fab, FormControl,
    FormControlLabel, FormLabel,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem, Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import CollectionsIcon from "@material-ui/icons/Collections";
import {blue, red} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {SessionManager} from "../Others/SessionManager";
import {NodeFetchHelper} from "../Others/NodeFetchHelper";


import axios from "axios";

const imgbbUploader = require("imgbb-uploader");

const api_endpoint = "http://192.168.1.14:2000/products"
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    icon: {
        margin: theme.spacing.unit * 2
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        "&:hover": {
            color: red[800]
        }
    },
    cardHeader: {
        textalign: "center",
        align: "center",
        backgroundColor: "white"
    },
    input: {
        display: "none"
    },
    title: {
        color: blue[800],
        fontWeight: "bold",
        fontFamily: "Montserrat",
        align: "center"
    },
    button: {
        color: blue[900],
        margin: 10
    },
    secondaryButton: {
        color: "gray",
        margin: 10
    },
    typography: {
        margin: theme.spacing.unit * 2,
        backgroundColor: "default"
    },

    searchRoot: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400
    },
    searchInput: {
        marginLeft: 8,
        flex: 1
    },
    searchIconButton: {
        padding: 10
    },
    searchDivider: {
        width: 1,
        height: 28,
        margin: 4
    }
}));

const ImgUpload = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [valueType, setValueType] = React.useState('New');
    const [valueStatus, setValueStatus] = React.useState('Available');
    const [picture, setPicture] = React.useState('');
    const [pAvailability, setPAvailability] = React.useState('');
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [discount, setDiscount] = React.useState('');
    const [category, setCategory] = React.useState('');


    const options = [
        'food', 'clothing', 'Shoes'
    ];

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangeType = (event) => {
        setValueType(event.target.value);
    };
    const handleChangeStatus = (event) => {
        setValueStatus(event.target.value);
    };


    const handleSubmitClick = () => {
        const user = SessionManager.getUserId();
        console.log(name);
        console.log(price);
        console.log(discount);
        console.log(user);
        console.log(category);
        console.log(valueStatus);
        console.log(valueType);
        console.log(pAvailability);
        console.log(picture);

        NodeFetchHelper.post(api_endpoint,null,
            {Authorization: 'Bearer ' + SessionManager.getAccessToken()},
            {
            name,
            price,
            discount,
            user,
            category,
            type : valueType,
            status: valueStatus,
            pAvailable: pAvailability,
            picture,

        },function (statusCode, jsonData, ok) {
                if (statusCode >= 400) {
                    console.log("sorry, can't put in")

                } else {
                    console.log(jsonData)
                }
            })
    };

    // const handleSubmitClick = () => {
        // const user = SessionManager.getUserId()
        // console.log(name);
        // console.log(price);
        // console.log(discount);
        // console.log(user);
        // console.log(category);
        // console.log(valueStatus);
        // console.log(valueType);
        // console.log(pAvailability);
        // console.log(picture);
        // axios.post(api_endpoint, {
        //     name,
        //     price,
        //     discount,
        //     user,
        //     category,
        //     type: valueType,
        //     status: valueStatus,
        //     pAvailable: pAvailability,
        //     picture,
        //     headers: { Authorization:'Bearer '+SessionManager.getAccessToken() }
        // })
        //     .then((response)=> {
        //         console.log(response);
        //     })
        //     .catch((error)=> {
        //         console.log(error);
        //     });

    //     axios.post(`http://192.168.1.14:2000/products/`, {
    //         name: name,
    //         price: price,
    //         discount: discount,
    //         user: SessionManager.getUserId(),
    //         category: category,
    //         type: valueType,
    //         picture: picture,
    //         pAvailable: pAvailability,
    //         status: valueStatus
    //
    //
    //         // headers: { Authorization:'Bearer '+SessionManager.getAccessToken() }
    //     }, {
    //
    //     })
    //         .then((response) => {
    //             console.log(SessionManager.getAccessToken())
    //             console.log('worked: ' + response)
    //         })
    //         .catch((error) => {
    //             console.log(SessionManager.getAccessToken())
    //             console.log(error)
    //             console.log(name);
    //             console.log(price);
    //             console.log(discount);
    //             console.log(SessionManager.getUserId());
    //             console.log(category);
    //             console.log(valueStatus);
    //             console.log(valueType);
    //             console.log(pAvailability);
    //             console.log(picture);
    //         })
    // };

    const handleUploadClick = (event) => {
        var form = new FormData
        form.append("image", event.target.files[0])
        console.log(event.target.files)
        axios.post('https://api.imgbb.com/1/upload?key= 08956f7eeb774c3be18512fefe054acd', form)
            .then(function (response) {
                setPicture(response.data.data.url)
                console.log(response.data.data.url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <React.Fragment>
                <CardContent>
                    <Grid container justify="center" alignItems="center">

                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={handleUploadClick}
                        />
                        <label htmlFor="contained-button-file">
                            <Fab component="span" className={classes.button}>
                                <AddPhotoAlternateIcon/>
                            </Fab>
                        </label>
                    </Grid>
                </CardContent>
            </React.Fragment>
            <div><TextField name="name" label="Product Name" onChange={(event) => {
                setName(event.target.value)
            }}/></div>
            <div><TextField name="Price" label="Price" onChange={(event) => {
                setPrice(event.target.value)
            }}/></div>

            <div><TextField id="Discount" label="Discount" onChange={(event) => {
                setDiscount(event.target.value)
            }}/></div>

            <div className={classes.root}>
                <List component="nav" aria-label="Device settings">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        onClick={handleClickListItem}
                    >
                        <ListItemText primary="Category" secondary={options[selectedIndex]}/>
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => {
                                setCategory(option);
                                handleMenuItemClick(event, index);
                            }}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Type</FormLabel>
                    <RadioGroup aria-label="Type" name="productType" value={valueType} onChange={handleChangeType}>
                        <FormControlLabel value="New" control={<Radio/>} label="New"/>
                        <FormControlLabel value="Resell" control={<Radio/>} label="Resell"/>
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                    <FormLabel component="legend">Status</FormLabel>
                    <RadioGroup aria-label="Status" name="ProductStatus" value={valueStatus}
                                onChange={handleChangeStatus}>
                        <FormControlLabel value="Available" control={<Radio/>} label="Available"/>
                        <FormControlLabel value="Out of Order" control={<Radio/>} label="Out of Order"/>
                    </RadioGroup>
                </FormControl>

            </div>
            <div><TextField id="pAvailabilty" label="Inventory Count" onChange={(event) => {
                setPAvailability(event.target.value)
            }}/></div>
            <Button color="primary" onClick={handleSubmitClick}>
                Add Your product

            </Button>
        </div>

    )

};

export default ImgUpload;


