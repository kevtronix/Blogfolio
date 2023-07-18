import React from 'react';
import './Utilities.css';
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



function Error(props) {
    return (
        <Box
            className='error-page'
            minHeight={"100vh"}
        >
            <Grid
                container
                paddingTop={25}
                paddingX={4}

            >
                <Grid
                    item
                    xs={12}
                    paddingX={"15%"}
                >
                    <Card>
                        <CardContent>
                            <Typography variant="h3" color={"primary"}>
                                Whoops! { props.message }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}


export default Error;