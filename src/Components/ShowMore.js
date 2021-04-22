import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from "@material-ui/core/Typography";
import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
     Paper
} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import {Logics} from "../Others/Logics";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },

    },
    root1: {
        maxWidth: 300,
        height: 200,
    },
    media: {
        height: 150,
        width: 200,
    },
}));

export default function BasicPagination() {
    const {category} = useParams();
    const classes = useStyles();
    const [arrProduct, setProduct] = useState([])
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(1)
    const handleChange = (event, value) => {
        setPage(value);
        Logics.getPaginatedProduct(category, value, setProduct)
    };
    useEffect(() => {
        Logics.getPaginatedProduct(category, page, setProduct, setTotal)
    }, []);
    return (
        <div>

            <Paper elevation={10} style={{
                margin: 30,
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            }}>
                <Grid container={'column'}>
                    <Grid xs={6}>
                    </Grid>
                    <Grid xs={5}>

                    </Grid>
                    <Grid xs={1}>
                        {
                        }

                        {/*<Button component={Link} to='/showMore'>*/}
                        {/*    Fayaz*/}
                        {/*</Button>*/}

                    </Grid>

                    <Grid container>
                        {
                            arrProduct.map(function (item, index) {
                                return (
                                    <Card className={classes.root1} height="25%">
                                        <Grid container spacing={1}>
                                            <CardActionArea>
                                                <Grid container={'column'} spacing={1}>
                                                    <Grid>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={item.picture}
                                                            title="Contemplative Reptile"
                                                        />
                                                    </Grid>
                                                    <Grid>
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h6"
                                                                        component="h2">
                                                                {item.name}
                                                            </Typography>
                                                            Price:{item.price}
                                                        </CardContent>
                                                    </Grid>
                                                </Grid>
                                            </CardActionArea>
                                            <Grid spacing={1}>
                                                <CardActions>
                                                    <IconButton aria-label="add to favorites">
                                                        <FavoriteIcon/>
                                                    </IconButton>
                                                    <IconButton aria-label="share">
                                                        <ShareIcon/>
                                                    </IconButton>
                                                    <Button size="small" color="primary">
                                                        Buy
                                                    </Button>
                                                </CardActions>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                )
                            })
                        }

                    </Grid>
                </Grid>
            </Paper>
            <div className={classes.root}>
                <Pagination
                    count={total} color="secondary"
                    page={page}
                    onChange={handleChange}

                />
            </div>
        </div>


    );
}