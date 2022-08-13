import { ThemeProvider } from "@mui/system";
import {theme} from '../styles/theme'
import { AppContextProvider } from "../utils/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </AppContextProvider>
  );
}


