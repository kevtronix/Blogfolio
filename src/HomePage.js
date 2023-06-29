// Purpose: Home page component for the application.
import './Utilities.css';
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function HomePage() {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            className='home-page'
            sx={{
                height: "100vh",
                width: "100%"
            }}
        >
            <Grid
                container
                spacing={5}
                justifyContent={"center"}
                paddingX={"20%"}
                paddingY={"20%"}

            >
                <Grid
                    item xs={12}
                    paddingBottom={3}
                >
                    <Card>
                        <CardContent>
                            <Typography variant="h2">
                                Welcome to my website!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item xs={6}
                >
                    <Card>
                        <CardContent>
                            <Typography variant="h4">
                                Magna qui ea sint ex est ipsum exercitation 
                                Lorem. Incididunt consequat adipisicing quis 
                                laborum ea culpa ad reprehenderit consectetur 
                                non veniam. Aliquip incididunt magna eu 
                                cupidatat ea. Tempor qui adipisicing ad 
                                officia. Enim irure do sit culpa eiusmod duis 
                                incididunt irure nostrud tempor nisi ad.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item xs={6}
                >
                    <Card>
                        <CardContent>
                            <Typography variant="h4">
                                Magna qui ea sint ex est ipsum exercitation 
                                Lorem. Incididunt consequat adipisicing quis 
                                laborum ea culpa ad reprehenderit consectetur 
                                non veniam. Aliquip incididunt magna eu 
                                cupidatat ea. Tempor qui adipisicing ad 
                                officia. Enim irure do sit culpa eiusmod duis 
                                incididunt irure nostrud tempor nisi ad.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 
            </Grid>
        </Box >
    )
}

export default HomePage;