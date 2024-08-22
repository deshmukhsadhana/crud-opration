
import React  from "react";
//import { Grid } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import SignForm from "../component/signinfrom";
const Home = () =>{
   return (
     <>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
         <Grid xs={6}>
            
         </Grid>
         <Grid xs={6}>
            <SignForm />
         </Grid>
        
       </Grid>
     </>
   );
}

export default Home;