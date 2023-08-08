
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box, Card,
    CardContent, Grid, 
    TextField, Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import { BlogContext } from 'context/BlogContext';
import axiosConfig from 'utilities/AxiosConfig';
import ErrorMessage from 'utilities/ErrorMessage';



function EditPostPage() {
    const { post, retrievePost } = useContext(BlogContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    // retrieve post data from API if postID exists in localStorage
    useEffect(() => {
        // if no post is found, check localStorage for postID
        if (!post && localStorage.getItem('postID')) {
            retrievePost(localStorage.getItem('postID'));
        }
    })
    // set title and body to post data
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
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            color="primary"
                                            onClick={handleClick} 
                                        >

                                            <Typography
                                                variant="h5"
                                            >
                                                Submit
                                            </Typography>
                                        </Button>
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