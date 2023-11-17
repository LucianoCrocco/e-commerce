import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

type Props = {
   darkMode: boolean;
   handleDarkMode: () => void;
};

export function Header({ darkMode, handleDarkMode }: Props): JSX.Element {
   return (
      <AppBar position="static" sx={{ mb: 4 }}>
         <Toolbar>
            <Typography variant="h6">RE-STORE</Typography>
            <Switch onChange={handleDarkMode} checked={darkMode} />
         </Toolbar>
      </AppBar>
   );
}
