import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export function Layout(): JSX.Element {
   return (
      <Grid container direction={'row'}>
         <Grid item xs={12} component={'nav'}>
            <Link to={'/'}>
               <Button variant={'contained'}>
                  Ir a
                  Boton 1
               </Button>
            </Link>
         </Grid>
      </Grid>
   )
}

