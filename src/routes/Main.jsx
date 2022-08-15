import React, {} from "react";
import { Grid } from "@mui/material";
import ImageView from "../components/ImageView";


export default function Main(){
    return(    
        <Grid container>
            <Grid item xs={12}></Grid>
            <Grid item xs={4}>  </Grid>
            <Grid item xs={8}>
                <ImageView></ImageView>
            </Grid>
        </Grid>
    )
}