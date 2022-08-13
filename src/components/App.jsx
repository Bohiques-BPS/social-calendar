import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import {theme} from '../styles/theme'
import { AppContextProvider } from "../utils/AppContext";

import Main from './Main';
import Login from './Login';
import Loader from "./Loader";

export default function App() {
  return (
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <Loader>
            <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/" element={<Main />}/>
            </Routes>
          </Loader>
        </ThemeProvider>
      </AppContextProvider>
  );
}


