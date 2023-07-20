import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';



function AddItemButton(props) {
   const navigate = useNavigate();
   return (
      <Grid
         container
         paddingY={2}
         justifyContent={"center"}
      >
         <Typography
            variant="h3"
            color={"secondary"}
         >
            Add {props.type}
         </Typography>
         <IconButton
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => navigate(`${props.url}`)}
         >
            <AddIcon />
         </IconButton>
      </Grid>
   )
}

export default AddItemButton;