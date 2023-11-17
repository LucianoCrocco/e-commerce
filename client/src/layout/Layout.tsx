import {
   Container,
   CssBaseline,
   ThemeProvider,
   createTheme,
} from '@mui/material';
import { useState } from 'react';
import { Header } from '.';
import { Catalog } from '../components';

export function Layout(): JSX.Element {
   const [darkMode, setDarkMode] = useState<boolean>(false);

   const handleDarkMode = () => {
      setDarkMode((prevState) => !prevState);
   };

   const theme = createTheme({
      palette: {
         mode: darkMode ? 'dark' : 'light',
         background: {
            default: darkMode ? '#212121' : '#eaeaea',
         },
      },
   });

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
         <Container>
            <Catalog />
         </Container>
      </ThemeProvider>
   );
}
