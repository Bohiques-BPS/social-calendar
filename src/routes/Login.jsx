import React from 'react'
import { Card, TextField, Button, Grid, Box } from '@mui/material'



export default function Login({onLogin, disabled, registerButton, children}) {
    

    
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
                                <Button onClick={onLogin} disabled={disabled}>Login</Button>
                            </Grid>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={5} style={{ display:'flex', justifyContent:'flex-end' }}>
                                { registerButton && (registerButton) }
                            </Grid>
                        </Grid>
                        <Box>
                            {children}
                        </Box>
                    </Card>
                </Grid>
            </Grid>
    )
}