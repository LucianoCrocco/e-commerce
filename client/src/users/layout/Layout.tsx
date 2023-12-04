import {
   Container,
   CssBaseline,
   ThemeProvider,
   createTheme,
} from '@mui/material';
import { ReactNode, useState } from 'react';
import { Header } from './';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

type Props = {
   children: ReactNode;
};

export function Layout({ children }: Props): JSX.Element {
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
         <ToastContainer
            position="bottom-right"
            hideProgressBar
            theme="colored"
         />
         <CssBaseline />
         <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
         <Container>{children}</Container>
      </ThemeProvider>
   );
}
