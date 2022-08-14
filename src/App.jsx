import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import {theme} from './styles/theme'
import { AppContextProvider } from "./utils/AppContext";


import Main from './routes/Main';
import Login from './routes/Login';
import Register from './routes/Register';

import Loader from "./components/Loader";

export default function App() {
  return (
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <Loader>
            <Routes>
              <Route path="/register" element={<Register />}  />
              <Route path="/login" element={<Login />}  />
              <Route path="/" element={<Main />}/>
            </Routes>
          </Loader>
        </ThemeProvider>
      </AppContextProvider>
  );
}


