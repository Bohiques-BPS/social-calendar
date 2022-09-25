import React, {useEffect, useState} from 'react'
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { Button, Modal, Tab, Typography, Card, Box, CardContent, CardHeader } from "@mui/material"
import { CalendarMonth } from "@mui/icons-material";
import {theme} from './styles/theme'
import AppModal from './AppModal';

import Main from './routes/Main';
import Login from './routes/Login';
import Calendar from './routes/Calendar'

import { Loader, Navigation } from "./components";

import { init, login, getLoginStatus, getMe } from './utils/Facebook'
import { useAppContext } from './utils/AppContext'
import { getSchedule } from './actions';

export default function App() {
  const location  = useLocation()
  const navigate = useNavigate()
  const [ context, setContext ] = useAppContext()
  const [ tab, setTab ] = useState(0)
  const [ enableNavigation, setEnableNavigation ] = useState(false) 

  useEffect(()=>{
    setEnableNavigation( prevEnableNavigation => {
      return [
        '/'
      ].indexOf(location.pathname) !== -1
    } )

  },[location.pathname])


  const navigationTabs = ['tab1', 'tab2', 'tab3'];
  
  const handleChangeTab = ( event, newTab ) => {
    console.log(newTab)
    setTab( prevTab => (newTab) )
  }

  const normalLogin = async () => {
    console.log('login')
    navigate('/main')
    
  }

  const handleClose = () => {
    console.log('handleClose')
    setContext( prevContext => ({
      ...prevContext, 
      modal: {
        ...prevContext.modal,
        open: false
      }
    }))
  }

  (async () => {
    if(context.scheduled === null ){
      const scheduled = await getSchedule() 
      setContext( prevContext => ({
        ...prevContext,
        scheduled: scheduled,
        loading: false
      }))
    }    
  })()
  

  return (
      <ThemeProvider theme={theme}>
        <Loader>
          { enableNavigation && <Navigation onChange={ handleChangeTab } style={{backgroundColor:'#eee'}}>
            { navigationTabs.map( (nameTab, index) => (
              <Tab 
                label={nameTab} 
                value={index}
                key={index}
              />
            ) ) }
          </Navigation>}
            <Routes>
              <Route path="/" element={ <Calendar /> }/>
            </Routes>
        </Loader>
        <AppModal open={ context.modal.open }>
          <Modal  
            open={true}
            onClose={handleClose}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50%',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4
            }}>
              <Card>
                <CardHeader avatar={ context.modal.avatar } title={ context.modal.title } />
                <CardContent>
                  { context.modal.content }
                </CardContent>
              </Card>
            </Box>
          </Modal>
        </AppModal>
      </ThemeProvider>
  ); 
}


