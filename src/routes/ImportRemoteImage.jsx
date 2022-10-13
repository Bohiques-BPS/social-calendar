import React, {useState} from 'react'
import { Box, Button, Grid, List, ListItem, ListItemButton, ListItemText, TextField, InputAdornment, ListItemIcon, IconButton } from "@mui/material"
import { Lateral } from "../components"
import { Check, Clear } from '@mui/icons-material'
import { useAppContext } from '../utils/AppContext'
import { setDomains } from '../actions/domains'

export default function ImportRemoteImage(){
    const [context, setContext] = useAppContext()
    const [ currentDomain, setCurrentDomain ] = useState('')

    const addDomain = () => {
        if( /.{1,}\..{1,}/.exec(currentDomain) ){
            setContext( prevContext => {
                setDomains([ ...prevContext.domains, `https://${currentDomain}` ])                
                return {
                    ...prevContext,
                    domains: [ ...prevContext.domains, `https://${currentDomain}` ]
                }
            })
            setCurrentDomain( prevCurrentDomain => '')
        }
    }

    const changeDomainEvent = event => {
        setCurrentDomain( prevCurrentDomain => event.target.value )
    }

    const deleteItemEvent = target => () => {
        setContext( prevContext => {
            setDomains( prevContext.domains.filter( domain => domain!==target) )
            return {
                ...prevContext,
                domains: prevContext.domains.filter( domain => domain!==target)
            }
        })
    }

    return(
        <Grid container>
            <Grid item xs={2}>
                <Lateral />
            </Grid>
            <Grid item xs={10}>
                <Grid container>
                    <Grid item xs={12}>
                        <Box style={{ padding:'10px', alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                            <TextField 
                                value={currentDomain} 
                                onChange={changeDomainEvent} 
                                placeholder='dominio.ejemplo'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start" >https://</InputAdornment>,
                                  }} />
                            <Button variant='contained' {...{disabled: !!!/.{1,}\..{1,}/.exec(currentDomain) }} onClick={addDomain}>Agregar Dominio</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <List>
                            {context.domains.map( domain => 
                                (<ListItemButton key={domain}>
                                    <ListItem>
                                        <ListItemText>{domain}</ListItemText>
                                        <ListItemIcon>
                                            <IconButton onClick={deleteItemEvent(domain)}>
                                                <Clear />
                                            </IconButton>
                                        </ListItemIcon>
                                    </ListItem>
                                </ListItemButton>)
                            )}
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}