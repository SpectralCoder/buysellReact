import React, {useEffect, useState} from 'react';
import {Logics} from "../Others/Logics";
import Grid from "@material-ui/core/Grid";
import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    makeStyles, Paper
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        height: 200,
    },
    media: {
        height: 150,
        width: 200,
    },
});


const HomeDesign = ({datafromTop}) => {
    const classes = useStyles();
    const [arrProduct, setProduct] = useState([])
    useEffect(() => {
        Logics.getTopProduct(datafromTop, setProduct)
    }, []);

    {
        return (
            <Paper elevation={10} style={{
                margin: 30,
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            }}>
                <Grid container={'column'}>
                    <Grid xs={6}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {datafromTop}
                        </Typography>
                    </Grid>
                    <Grid xs={5}>

                    </Grid>
                    <Grid xs={1}>
                        {
                            <Link to={'/showMore/' + datafromTop}>
                                <Button>
                                    More
                                </Button>
                            </Link>
                        }

                        {/*<Button component={Link} to='/showMore'>*/}
                        {/*    Fayaz*/}
                        {/*</Button>*/}

                    </Grid>

                    <Grid container>
                        {
                            arrProduct.map(function (item, index) {
                                return (
                                    <Card className={classes.root} height="25%">
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

        );
    }
};

export default HomeDesign;

// 'hahaha ${variable}' ``