import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useAppContext } from "../utils/AppContext";


export default function Loader({children}) {
    const [context] = useAppContext();

    return(
        context.loading?(<Grid container variant="full-screen">
            <Grid item xs={12} variant="vertical-center">
                <CircularProgress color="inherit" size={50}/>
            </Grid>
        </Grid>):(children)
    );
}