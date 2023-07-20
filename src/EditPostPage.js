
import { useState, useContext, useEffect } from 'react';
import { BlogContext } from './BlogContext';
import axiosConfig from './axiosConfig';
import {
    Box, Card,
    CardContent, Grid, IconButton,
    TextField, Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';


function EditPostPage() {
    const { post, retrievePost } = useContext(BlogContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    // retrieve post data from API
    useEffect(() => {
        // if no post is found, check localStorage for postID
        if (!post && localStorage.getItem('postID')) {
            retrievePost(localStorage.getItem('postID'));
        }
    })

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
        }
    }, [post])

    const handleClick = (e) => {
        e.preventDefault();
        axiosConfig.put(`/blogs/${post.id}/`,
            {
                title: title,
                snippet: body.substring(0, 150),
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
            {post ? 
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
                                            Edit Post
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
                                            <EditIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>: <ErrorMessage message="No blog post found." />}
        </Box >
    )
}


export default EditPostPage;