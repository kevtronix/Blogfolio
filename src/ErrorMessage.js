import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";



function ErrorMessage(props) {
    return (
        <Grid
            container
            justifyContent="center"
            paddingTop={25}
        >
            <Grid
                item
                xs={12}
                paddingX={"15%"}
            >
                <Card>
                    <CardContent>
                        <Typography
                            variant="h2"
                            color={"primary"}
                        >
                            {props.message}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ErrorMessage;