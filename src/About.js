// Purpose: About page component for the application. 
import ContactBar from './ContactBar';
import './Utilities.css';
import Card from '@mui/material/Card';
import {CardContent, CardHeader, Grid, Paper, Typography} from "@mui/material";
import Box from '@mui/material/Box';

function About() {
    return (
        <div>
            <div>
                <Card>
                    <Box 
                        display="flex" 
                        justifyContent="center" 
                        alignItems="center"
                        paddingX={8} 
                        paddingTop={8} 
                        paddingBottom={8}
                    >  
                        <Grid container spacing={2} paddingBottom={8}>
                            <Grid item xs={6} paddingRight={2}>
                                <img
                                    src={require("./images/cartoon_profile_picture.png")}
                                    alt="cartoon profile picture"
                                />  
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h2" color={"secondary"}>
                                Interests 
                                </Typography>
                                <Typography variant="h5"> 
                                    loreCulpa sit labore sit ut ullamco ullamco mollit. 
                                    Tempor ipsum eiusmod nisi adipisicing ipsum ex anim nostrud 
                                    veniam in Lorem sit. Anim sint Lorem duis cillum. Consectetur 
                                    sunt ea anim in do ut reprehenderit proident. Tempor pariatur 
                                    laboris amet irure pariatur tempor mollit sint magna eu quis ullamco veniam. 
                                    Eiusmod nulla magna cillum officia dolor. llamco pariatur exercitation 
                                    sit cupidatat cillum. Laborum consequat cupidatat exercitation 
                                    et exercitation minim magna minim velit in nulla nisi commodo. 
                                    Ad ex sint sit voluptate minim sit Lorem fugiat.m
                                </Typography>
                                <Typography variant="h2" color={"secondary"}>
                                Interests 
                                </Typography>
                                <Typography variant="h5"> 
                                    loreCulpa sit labore sit ut ullamco ullamco mollit. 
                                    Tempor ipsum eiusmod nisi adipisicing ipsum ex anim nostrud 
                                    veniam in Lorem sit. Anim sint Lorem duis cillum. Consectetur 
                                    sunt ea anim in do ut reprehenderit proident. Tempor pariatur 
                                    laboris amet irure pariatur tempor mollit sint magna eu quis ullamco veniam. 
                                    Eiusmod nulla magna cillum officia dolor. llamco pariatur exercitation 
                                    sit cupidatat cillum. Laborum consequat cupidatat exercitation 
                                    et exercitation minim magna minim velit in nulla nisi commodo. 
                                    Ad ex sint sit voluptate minim sit Lorem fugiat.m
                                </Typography>
                                <ContactBar />
                            </Grid> 
                        </Grid> 
                    </Box>
                </Card>
            </div> 
            <div> 
            </div> 
        </div>
    )
}

export default About;