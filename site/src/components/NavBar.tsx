import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const buttons: Array<{ msg: string, to: string }> = [{ msg: "Ir A", to: "/shop" }, { msg: "Ir A", to: "/placeholder" }, { msg: "Ir A", to: "/placeholder" }, { msg: "Ir A", to: "/placeholder" }, { msg: "Ir A", to: "/placeholder" }];

export function NavBar(): JSX.Element {
   return (
      <Grid
         item
         xl={8}
         xs={12}
         component={'nav'}
         display={'flex'}
         alignItems={'center'}
         height={'45px'}
         width={'100%'}
      >

         {buttons.map(({ msg, to }, index: number) => {
            return (
               <Link to={to} key={index} style={{ margin: '0px 10px' }}>
                  <Button variant={'contained'}>
                     {msg} Boton {index + 1}
                  </Button>
               </Link>
            )
         })
         }
      </Grid>
   )
}
