// Purpose: Home page component for the application.
import './Utilities.css';
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function HomePage() {
    return (
        <Box
            className='home-page'
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
                                Welcome to Kevin's Digital Realm
                            </Typography>
                            <Typography variant="h4" color={"secondary"}>
                                Where Technology Meets Creativity
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    paddingTop={5}
                    paddingX={"15%"}
                >
                    <Card>
                        <CardContent>
                            <Typography variant="h4">
                                Welcome! Step into the digital realm of a spirited student,
                                an eager teacher, and a software engineer in the making.
                                Here, I share my quests in AI and full-stack development.
                                Join me on this exciting journey through the landscape
                                of technology!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage;