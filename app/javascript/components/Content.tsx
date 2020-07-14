import * as React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./Application.css";
import MainRouter from "./MainRouter";

const Content = (): JSX.Element => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <br />

            <br />

            <Grid container spacing={2}>
                <Grid item xs={1} />

                <Grid item xs={10}>
                    <MainRouter />
                </Grid>
            </Grid>
        </main>
    );
};

export default Content;