import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import { Box, Grid, Card, CardContent, Typography, TextField, IconButton } from '@mui/material';
import axiosConfig from 'utilities/AxiosConfig';


function AddBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const now = new Date();
    const timestamp = now.toISOString();

    const navigate = useNavigate();


    const handleClick = (e) => {
        e.preventDefault();
        axiosConfig.post('/blogs/',
            {
                title: title,
                snippet: body.substring(0, 150),
                body: body,
                timestamp: timestamp
            })
            .then(res => {
                console.log(res);
                navigate('/blog');
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
                                            Add Post
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
                                            onChange={(e) => setTitle(e.target.value)}
                                            value={title}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            id="outlined-basic"
                                            label="Body"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            onChange={(e) => setBody(e.target.value)}
                                            value={body}
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

export default AddBlog;