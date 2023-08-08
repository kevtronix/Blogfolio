// Purpose: Projects page component for the application. 
import 'utilities/Utilities.css';


import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LinkIcon from '@mui/icons-material/Link';
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    LinearProgress,
    IconButton,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { AuthContext } from 'context/AuthContext';
import AddItemButton from 'utilities/AddItemButton';
import axiosConfig from 'utilities/AxiosConfig';
import DeleteButton from 'utilities/DeleteButton';
import ErrorMessage from 'utilities/ErrorMessage';
import RetroLoadingMessage from 'utilities/RetroLoading';

function Projects() {
    const [projects, setProjects] = useState([]);
    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();



    useEffect(() => {
        axiosConfig.get('/projects')
            .then((response) => {
                setProjects(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setProjects(null);
                setLoading(false);
            })
    }, []);
    
    return (
        <Box
            className='projects-page'
            minHeight={"100vh"}
        >
            {token ? <AddItemButton
                type="project"
                url='/projects/add' /> : null
            }

            {loading ?
                <RetroLoadingMessage message="Loading Projects" /> : null}

            {projects ?

                <Grid
                    container
                    paddingX={"5%"}
                    paddingY={"10%"}
                >
                    {projects.map((project) => (
                        <Grid
                            item xs={12}
                            paddingBottom={3}
                            key={project.id}
                        >
                            <Card
                                sx={
                                    {
                                        textAlign: "left"
                                    }
                                }
                            >
                                <CardContent
                                >
                                    <Typography
                                        variant="h3"
                                        color={"primary"}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Divider />
                                    <Typography
                                        variant="h4"
                                        color={"secondary"}
                                        paddingTop={2}
                                    >
                                        Description
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        paragraph
                                    >
                                        {project.description}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color={"secondary"}
                                        paddingTop={1}
                                    >
                                        Technologies
                                    </Typography>
                                    <Grid
                                        container
                                        paddingTop={1}
                                        paddingBottom={2}
                                    >
                                        {project.technologies.map((technology) => (

                                            <Grid
                                                item
                                                key={technology}
                                                xs={4}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    paragraph
                                                >
                                                    {technology}
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>

                                    <LinearProgress
                                        value={project.progress}
                                        variant="determinate"
                                    />
                                    <Grid container>
                                        <Grid item xs={6}>

                                            <Typography
                                                variant="h6"
                                            >
                                                Progress
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} textAlign={"right"}>
                                            <IconButton
                                                onClick = {() => {
                                                    navigate(project.link);
                                                }}
                                            >
                                                <LinkIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                    {token ? <DeleteButton url='projects' id={project.id} /> : null}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid> : null}

            {!loading && !projects ? <ErrorMessage message="Error loading projects" /> : null}
        </Box>
    )
}

export default Projects;