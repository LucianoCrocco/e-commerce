import {
   Container,
   CssBaseline,
   ThemeProvider,
   createTheme,
} from '@mui/material';
import { ReactNode, useState } from 'react';
import { Header } from './';

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
         <CssBaseline />
         <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
         <Container>{children}</Container>
      </ThemeProvider>
   );
}
