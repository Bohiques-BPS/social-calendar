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
import ScheduleHistory from './routes/ScheduleHistory';
import ImportRemoteImage from './routes/ImportRemoteImage';
import { getDomains } from './actions/domains';

export default function App() {
  const location  = useLocation()
  const navigate = useNavigate()
  const [ context, setContext ] = useAppContext()
  const [ tab, setTab ] = useState(0)
  const [ enableNavigation, setEnableNavigation ] = useState(false) 

  useEffect(()=>{
    setEnableNavigation( prevEnableNavigation => {
      return [
        '/',
        '/login',
        '/history',
        '/import',
      ].indexOf(location.pathname) !== -1
    } )

  },[location.pathname])


  const navigationTabs = ['Calendar', 'History', 'Import', 'Login'];
  
  const handleChangeTab = ( event, newTab ) => {
    console.log(newTab)
    setTab( prevTab => (newTab) )
    navigate(['/', '/history', '/import', '/login'][newTab])
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
    if(context.domains === null){
      const domains = await getDomains() 
      setContext( prevContext => ({
        ...prevContext,
        domains: domains,
        loading: false
      }))
    }
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
          { enableNavigation && <Navigation onChange={ handleChangeTab } value={tab} style={{backgroundColor:'#eee'}}>
            { navigationTabs.map( (nameTab, index) => (
              <Tab 
                label={nameTab} 
                value={index}
                key={index}
              />
            ) ) }
          </Navigation>}
            <Routes>
              <Route path="/login" element={ <Login /> }/>
              <Route path="/" element={ <Calendar /> }/>
              <Route path="/history" element={ <ScheduleHistory /> }/>
              <Route path="/import" element={ <ImportRemoteImage /> }/>
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


