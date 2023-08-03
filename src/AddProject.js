import { useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axiosConfig from './axiosConfig';
import { useNavigate } from 'react-router-dom';

function AddProject() {
    const [title, setTitle] = useState('');
    const [description, setBody] = useState('');
    const [technologies, setTechnologies] = useState([]);
    const [progress, setProgress] = useState(0);
    const [link, setLink] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setBody(e.target.value);
    }
    const handleTechnologiesChange = (e) => {
        const techList = e.target.value.split(',').map(tech => tech.trim());
        setTechnologies(techList);
    }
    const handleProgressChange = (e) => {
        setProgress(e.target.value);
    }
    const handleLinkChange = (e) => {
        setLink(e.target.value);
    }

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        axiosConfig.post('/projects/',
            {
                title: title,
                description: description,
                technologies: technologies,
                progress: progress,
                link: link
            })
            .then(res => {
                console.log(res);
                navigate('/projects');
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }
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
                            <form>
                                <Grid
                                    container
                                    spacing={4}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <Typography variant="h3" color={"primary"}>
                                            Add Project
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            id="outlined-basic"
                                            label="Title"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleTitleChange}
                                            value={title}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            id="outlined-basic"
                                            label="Description"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            onChange={handleDescriptionChange}
                                            value={description}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            id="outlined-basic"
                                            label="Technologies"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleTechnologiesChange}
                                            value={technologies.join(',')}
                                            helperText="Separate technologies with commas"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            type="number"
                                            id="outlined-basic"
                                            label="Progress"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            onChange={handleProgressChange}
                                            value={progress}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            id="outlined-basic"
                                            label="Link"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            onChange={handleLinkChange}
                                            value={link}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <IconButton
                                            variant="contained"
                                            color="primary"
                                            onClick={handleClick}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    )
}

export default AddProject;