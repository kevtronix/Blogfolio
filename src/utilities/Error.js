import React from 'react';

import 'utilities/Utilities.css';
import { CardContent, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';



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