// Purpose: About page component for the application. 
import ContactBar from './ContactBar';
import './Utilities.css';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function About() {
    return (
        <Box
            paddingTop={8}
            className='about-page'
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Grid
                container
                paddingY={3}
                paddingX={4}
            >
                <Grid
                    item
                    xs={12}
                    paddingX={"25%"}
                >
                    <Card>
                        <CardContent>
                            <Typography variant="h3" color={"primary"}>
                                Who Am I?
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    paddingX={"25%"}
                    paddingTop={3}
                >
                    <CardMedia
                        component="img"
                        src={require("./images/cartoon_profile_picture.png")}
                        alt="Cartoon Profile Picture"
                        className='profile-image'
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    paddingTop={3}
                    paddingX={"15%"}
                >
                    <Card>
                        <CardContent>
                            <Typography variant="h3" color={"primary"}>
                                Journey
                            </Typography>
                            <Typography variant="h5">
                                My journey into software engineering took a detour
                                through the realm of chemistry. As I was immersing
                                myself in the world of atoms and molecules, a friend's
                                recommendation led me to a programming class. That
                                single decision was a game-changer. The basic principles
                                of Python - variables, loops - they illuminated a new path
                                for me, a way to automate the mundane and superfluous tasks
                                that cluttered my day. Compelled by this revelation,
                                I ventured deeper into the programming universe, self-teaching
                                JavaScript and the basics of full-stack development.
                                Every line of code I wrote, every project I brought to life,
                                was a testament to the transformative power of programming.
                                From simple calculator apps to more complex constructs,
                                every creation filled me with a profound sense of accomplishment.
                                Despite my progress, I realized there were still untapped depths
                                in my understanding, areas where self-teaching fell short.
                                So, I chose to supplement my knowledge by pursuing a degree
                                in computer science, diving into the theory and mathematics
                                that underpin our digital world.
                                In a twist of fate, my journey of learning morphed into a
                                journey of teaching. As I tackled my degree, I was presented
                                with the opportunity to teach C++. The challenge was immense,
                                but so was the reward. The act of teaching deepened my own
                                understanding, pushing me to research, implement, and apply
                                concepts at a level beyond what I had previously experienced.
                                Today, as I stand on the brink of completing my degree and
                                continue to guide others in their learning, I am more
                                committed than ever to my goal - to become a full-time
                                software engineer.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item xs={12}
                    paddingTop={3}
                    paddingX={"15%"}
                >
                    <Card>
                        <CardContent>
                            <Typography variant="h3" color={"primary"}>
                                Interests
                            </Typography>
                            <Typography variant="h5">
                                In the vast universe of programming, two stars shine
                                brightest for me: AI and full-stack development.
                                These are not just fields of study, but playgrounds
                                of endless learning and discovery. Full-stack
                                development, to me, is like an intricate puzzle.
                                Every piece, from front-end to back-end, reveals a new
                                facet, a new challenge, and a new opportunity for creation.
                                The thrill of deploying projects, seeing abstract
                                lines of code transform into tangible applications—it's
                                an exhilarating learning journey. Then there's AI, my
                                personal crystal ball. It's about predicting, automating,
                                and marveling at how machines can mirror human
                                intelligence. From training models to harnessing
                                AI libraries, every step is a leap towards a
                                more efficient future. But the real magic happens
                                when AI meets full-stack. Combining these two passions,
                                implementing AI in full-stack projects—it's like fitting
                                together pieces of a complex, ever-evolving jigsaw puzzle.
                                And I'm here, learning and piecing it all together,
                                one line of code at a time.
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid
                    item
                    xs={12}
                    paddingTop={3}
                    paddingX={"15%"}

                >
                    <Card>
                        <CardContent>
                            <Typography variant="h3" color={"primary"}>
                                Hobbies
                            </Typography>
                            <Typography variant="h5">
                                When I manage to untangle myself from the web of codes and algorithms, I dive headfirst into a world of eclectic hobbies.
                                I'm a gym-enthusiast-turned-couch-potato (temporarily, I promise).
                                My idea of a thrilling adventure? A suspenseful mystery
                                show or a trip to the movies. And video games?
                                They're my go-to digital escape. I've been tip-toeing
                                around Diablo IV though, wary of its notorious
                                addiction factor. The latest entrant to my hobby club
                                is 3D printing. As a lifelong builder, the idea of
                                materializing objects from thin air (well, almost) is
                                electrifying. Whether it's creating new marvels or
                                fixing broken things, it's like building a mini world.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <ContactBar />
        </Box>
    )
}

export default About;