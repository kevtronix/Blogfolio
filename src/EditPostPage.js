
import { useState, useContext } from 'react';
import { BlogContext } from './BlogContext';
import axiosConfig from './axiosConfig';
import { Box, Card, CardContent, Grid, IconButton, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import Error from './Error';


function EditPostPage() {
    const { post } = useContext(BlogContext);
    const [title, setTitle] = useState(post.title);
    const [snippet, setSnippet] = useState(post.snippet);
    const [body, setBody] = useState(post.body);
    const navigate = useNavigate();


    if (post == null) {
        return (
            <Error message="No blog post found. Go back and try again" />
        )
    }

    const handleClick = (e) => {
        e.preventDefault();
        axiosConfig.put(`/blogs/${post.id}/`,
            {
                title: title,
                snippet: snippet,
                body: body,
                timestamp: post.timestamp
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
                            <Typography variant="h3" color={"primary"}>
                                Edit Post
                            </Typography>
                            <form >

                                <TextField
                                    id="outlined-basic"
                                    fullWidth
                                    label="Title"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                                <TextField
                                    id="outlined-basic"
                                    fullWidth
                                    label="Snippet"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={(e) => setSnippet(e.target.value)}
                                    value={snippet}
                                />
                                <TextField
                                    id="outlined-basic"
                                    fullWidth
                                    label="Body"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={(e) => setBody(e.target.value)}
                                    value={body}
                                />
                                <IconButton
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClick}
                                >
                                    <EditIcon />
                                </IconButton>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    )
}


export default EditPostPage;