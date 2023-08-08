import React from "react";

import { Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";
import "utilities/Utilities.css"



function RetroLoadingMessage(props) {
    return (
        <Box
            paddingX={3}
            paddingY={5}
        >
            <Card>
                <CardContent
                    align="center"
                >
                    <Typography
                        variant="h2"
                        color={"primary"}
                    >
                        {props.message}...
                    </Typography>
                    <LinearProgress color="secondary" />
                </CardContent>
            </Card>
        </Box>
    )
}

export default RetroLoadingMessage;