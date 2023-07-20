import React, { useContext, useEffect } from 'react';
import { BlogContext } from './BlogContext';
import { AuthContext } from './AuthContext';
import './Utilities.css';
import Card from '@mui/material/Card';
import { CardContent, IconButton, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ErrorMessage from './ErrorMessage';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';



function BlogPost() {
    const { post, retrievePost } = useContext(BlogContext);

    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/blog/post/edit')
    }

    // retrieve post data from API
    useEffect(() => {
        // if no post is found, check localStorage for postID
        if (!post && localStorage.getItem('postID')) {
            retrievePost(localStorage.getItem('postID'));
        }
    } )

    return (
        <Box
            className='blog-page'
            minHeight={"100vh"}
        >
            {post ?
                <Grid
                    container
                    paddingTop={3}
                    paddingX={4}
                >
                    {
                        <Grid
                            item
                            xs={12}
                            paddingX={"10%"}
                            paddingTop={3}
                        >
                            <Card>
                                <CardContent>
                                    <Typography variant="h2" color={"primary"}>
                                        {post.title}
                                    </Typography>
                                    <Typography variant="h5" color={"secondary"}>
                                        {post.body}
                                    </Typography>
                                    {token ? <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="Edit"
                                        onClick={handleClick}
                                    >
                                        <EditIcon />
                                    </IconButton> : null}
                                </CardContent>
                            </Card>
                        </Grid>
                    }
                </Grid> : <ErrorMessage message="No blog post found" />}
        </Box >
    )
}

export default BlogPost;