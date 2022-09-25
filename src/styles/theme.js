import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
    palette:{
        primary: {
            main: '#1976D2',
            success: '#4CAF50',
            error: '#FF0000',
        }
    },
    typography:{},
    components:{
        MuiCalendarPicker:{
            variants: [
                {
                    props: {
                        variant: 'fullwidth'
                    },
                    style: {
                        width: '100%',
                        backgroundColor: 'white',
                        'div[role="row"]':{
                            justifyContent: 'space-between',
                            marginLeft: '50px',
                            marginRight: '50px',
                            PickersDay: {
                                border: '1px solid red'
                            },
                            '.scheduled':{
                                backgroundColor: '#1976D288'
                            }
                        },
                        '> div:first-of-type':{   
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginLeft: '50px',
                            marginRight: '50px'
                        }
                    }
                }
            ]
        },
        MuiGrid:{
            variants:[
                {
                    props:{
                        variant:'full-screen'
                    },
                    style:{
                        height:'100vh',
                        alignItems:'center'
                    }
                },
                {
                    props:{
                        variant:'vertical-center'
                    },
                    style:{
                        display:'flex',
                        justifyContent:'center'
                    }
                }
            ]
        }
    }
})