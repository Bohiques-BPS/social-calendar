import React from "react"
import {Grid, Card, Typography, Button} from '@mui/material'

export default function ErrorPage({code, children}) {
    return(
        <Grid container variant="full-screen">
            <Grid item xs={12}>
                <Card style={{
                    display:'flex',
                    flexDirection:'column',
                    padding:'10px',
                    marginLeft:'auto',
                    marginRight:'auto',
                    width:'80%',
                    boxShadow: '5px 5px 10px #0004'
                }}>
                    <Grid container style={{justifyContent:'space-around', paddingTop:'20px', paddingBottom:'20px'}}>
                        <Grid item xs={2}>
                            <Typography style={{
                                fontWeight: 'bold',
                                borderRadius: '50%',
                                height: '100px',
                                width: '100px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                boxShadow: '4px 4px 10px #00000055'
                            }}>{code}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>
                                {children}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{display:'flex',justifyContent:'center', marginTop:'10px'}}>
                            <Button>Back</Button>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}