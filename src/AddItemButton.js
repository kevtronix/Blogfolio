import React from 'react';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



function AddItemButton(props) {
   const navigate = useNavigate();
   return (
      <Grid
         container
         paddingY={2}
         justifyContent={"center"}
      >
         <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => navigate(`${props.url}`)}
         > 

         <Typography
            variant="h4"
         >
            Add {props.type}
         </Typography>
         </Button>
      </Grid>
   )
}

export default AddItemButton;