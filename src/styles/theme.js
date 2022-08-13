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