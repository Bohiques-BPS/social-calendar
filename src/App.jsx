import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import {theme} from './styles/theme'
import { useAppContext } from "./utils/AppContext";

import { getList } from './actions/mockupPost'

import Main from './routes/Main';
import Login from './routes/Login';
import Register from './routes/Register';

import Loader from "./components/Loader";

export default function App() {
  const [context, setContext] = useAppContext()

  const getData = async () => {
    const { data } = await getList()    
    setContext(prevContext => ({
        ...prevContext,
        posts:data.map( elem => {elem.load = false; return elem})
    }))
  } 

  (context.posts.length === 0) && getData()


  return (
      <ThemeProvider theme={theme}>
        <Loader>
          <Routes>
            <Route path="/register" element={<Register />}  />
            <Route path="/login" element={<Login />}  />
            <Route path="/" element={<Main />}/>
          </Routes>
        </Loader>
      </ThemeProvider>
  );
}


