
import {theme} from './styles/theme'
import {Container, ThemeProvider, Typography} from '@mui/material'
export default function App(){

    return(
        <ThemeProvider theme={theme}>
            <Container>
                <Typography>Bohiques</Typography>
            </Container>
        </ThemeProvider>
    );
}