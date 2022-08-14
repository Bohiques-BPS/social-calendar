import React from 'react'
import { Card, TextField, Button, Grid } from '@mui/material'


export default function Register() {
    return(
        <Grid container variant="full-screen">
            <Grid item xs={12}>
                <Card style={{
                    display:'flex',
                    flexDirection:'column',
                    padding:'10px',
                    marginLeft:'auto',
                    marginRight:'auto',
                    width:'50%',
                    boxShadow: '5px 5px 10px'
                }}>
                    <TextField placeholder="Username" style={{margin:'4px'}}></TextField>
                    <TextField placeholder="Password" style={{margin:'4px'}}></TextField>
                    <Grid container>
                        <Grid item xs={5}>
                            <Button>Login</Button>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}