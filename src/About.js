// Purpose: About page component for the application. 
import ContactBar from './ContactBar';
import './Utilities.css';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from "@mui/material";
import Box from '@mui/material/Box';

function About() {
    return (
        <Box
            paddingTop={8}
            paddingX={8}
            className='about-page'
        >
            <div>
                <Card
                >
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        paddingY={4}
                        paddingX={4}
                    >
                        <CardMedia
                            component="img"
                            src={require("./images/cartoon_profile_picture.png")}
                            alt="Cartoon Profile Picture"
                            sx={{
                                maxHeight: 800,
                                height: "auto",
                                maxWidth: 800,
                                objectFit: "contain",
                            }}
                            className='profile-image'
                        />
                    </Box>
                    <CardContent
                        sx={{
                            paddingX: 4,
                            paddingY: 2,
                        }}
                    >
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
                            Hobbies
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
                    </CardContent>
                </Card>
                <ContactBar />
            </div>
        </Box>
    )
}

export default About;