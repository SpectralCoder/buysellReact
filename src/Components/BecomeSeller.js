import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles, Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {confirmAlert} from 'react-confirm-alert'; // Import
import './react-confirm-alert.css';
import {useHistory} from "react-router-dom";
import {SessionManager} from "../Others/SessionManager";
import {NodeFetchHelper} from "../Others/NodeFetchHelper";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '80vh', width: '100vh',
    },
}));

// const options = {
//     title: 'Title',
//     message: 'Message',
//     buttons: [
//         {
//             label: 'Yes',
//             onClick: () => alert('Click Yes')
//         },
//         {
//             label: 'No',
//             onClick: () => alert('Click No')
//         }
//     ],
//     childrenElement: () => <div />,
//     customUI: ({ onClose }) => <div>Custom UI</div>,
//     closeOnEscape: true,
//     closeOnClickOutside: true,
//     willUnmount: () => {},
//     afterClose: () => {},
//     onClickOutside: () => {},
//     onKeypressEscape: () => {},
//     overlayClassName: "overlay-custom-class-name"
// };

const BecomeSeller = () => {
    const [curLocation, setCurLocation] = React.useState('');
    const [perLocation, setPerLocation] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [arr1, setArr1] = React.useState('');
    const [arr2, setArr2] = React.useState('');

    const history = useHistory();


    const submitData = () => {
        const phones = arr1 + "," + arr2
        const id = SessionManager.getUserId()
        NodeFetchHelper.put(`http://localhost:2000/users/${id}`, null,
            {Authorization: 'Bearer ' + SessionManager.getAccessToken()},
            {
                phones,
            clocation: curLocation,
            plocation: perLocation,
            roles: "pending",
            password},
            (status, jsonData, ok) => {
                console.log(jsonData)
                if (ok) {
                    confirmAlert({

                        message: 'Your request is on process, We will get back to you soon.',
                        buttons: [
                            {
                                label: 'Ok',
                                onClick: () => {
                                    let path = "/";
                                    history.push(path);
                                }

                            },
                        ]
                    });
                } else {
                    confirmAlert({

                        message: 'Please recheck your inputs.',
                        buttons: [
                            {
                                label: 'Ok',
                                onClick: () => {
                                    let path = "/becomeSeller";
                                    history.push(path);
                                }

                            },
                        ]
                    });

                }
            })


    };
    const classes = useStyles();
    return (
        <Grid container xs={12}>
            <Paper className={classes.paper}>
                <Grid container xs={12} align={'center'}>
                    <Grid xs={6}>
                        <TextField label="Phone Number" id="standard-size-small" size="small" onChange={(event) => {
                            setArr1 (event.target.value);
                        }}/>


                    </Grid>
                    <Grid xs={6}>
                        <TextField label="Alternative Phone Number" id="standard-size-small" size="small"
                                   onChange={(event) => {
                                       setArr2(event.target.value);
                                   }}/>

                    </Grid>
                    <Grid xs={12}>
                        <TextField label="Current Location" id="standard-size-small" size="small" onChange={(event) => {
                            setCurLocation(event.target.value)
                        }}/>
                    </Grid>
                    <Grid xs={12}>
                        <TextField label="Permanent Location" id="standard-size-small" size="small"
                                   onChange={(event) => {
                                       setPerLocation(event.target.value)
                                   }}/>

                    </Grid>
                    <Grid xs={12}>
                        <TextField label="Password" id="standard-size-small" size="small" onChange={(event) => {
                            setPassword(event.target.value)
                        }}/>
                    </Grid>
                    {/*<Grid xs={12}>*/}
                    {/*    <TextField label=" Confirm Password" id="standard-size-small" size="small"/>*/}
                    {/*</Grid>*/}
                    <Grid xs={12}>
                        <Button onClick={submitData}> Submit </Button>
                    </Grid>
                </Grid>


            </Paper>

            <Grid container xs={6}>
            </Grid>


        </Grid>

    )
        ;
};

export default BecomeSeller;