// Purpose: Projects page component for the application. 
import './Utilities.css';
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    LinearProgress,
    IconButton
} from '@mui/material';

import LinkIcon from '@mui/icons-material/Link';

function Projects() {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            className='projects-page'
            sx={{
                height: "100vh",
                width: "100%"
            }}
        >
            <Grid
                container
                spacing={5}
                paddingX={"20%"}
                paddingY={"20%"}
            >
                <Grid
                    item xs={12}
                    paddingBottom={3}
                >
                    <Card
                        sx={{
                            textAlign: "left",
                            paddingX: 3,
                            paddingTop: 2
                        }}
                    >
                        <CardContent
                        >
                            <Typography
                                variant="h3"
                                color={"primary"}
                            >
                                Lorem Ipsum
                            </Typography>
                            <Typography
                                variant="h4"
                                color={"secondary"}
                                paddingTop={2}
                            >
                                Description
                            </Typography>
                            <Typography variant="h6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                            </Typography>
                            <Typography
                                variant="h4"
                                color={"secondary"}
                                paddingTop={2}
                            >
                                Skills
                            </Typography>
                            <Typography
                                variant="h6"
                                paddingBottom={3}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                            </Typography>
                            <LinearProgress
                                value={50}
                                variant="determinate"
                            />
                            <Grid container>
                                <Grid item xs={6}>

                                    <Typography
                                        variant="h7"
                                        color={"primary"}
                                    >
                                        Progress
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} textAlign={"right"}>
                                    <IconButton
                                    >
                                        <LinkIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects;