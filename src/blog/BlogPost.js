import React, { useContext, useEffect } from 'react';
import 'utilities/Utilities.css'
import { useNavigate } from 'react-router-dom';

import { CardContent, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { AuthContext } from 'context/AuthContext';
import { BlogContext } from 'context/BlogContext';
import ErrorMessage from 'utilities/ErrorMessage';
import { NewlineText } from 'utilities/NewlineText';

function BlogPost() {
    const { post, retrievePost } = useContext(BlogContext);
    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/blog/post/edit')
    }


    // retrieve post data from API
    useEffect(() => {
        // if no post is found, check localStorage for postID
        if (!post && localStorage.getItem('postID')) {
            retrievePost(localStorage.getItem('postID'));
        }
    })

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
                    justifyContent={"center"}
                >
                    {
                        <Grid
                            item
                            xs={12}
                            paddingX={3}
                            paddingTop={3}
                        >
                            <Card>
                                <CardContent>
                                    <Typography 
                                        variant="h3" 
                                        color={"primary"}
                                        textAlign={"left"}
                                        >
                                        {post.title}
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color={"secondary"}
                                        paddingTop={3}
                                        paddingBottom={3}
                                        textAlign={"left"}
                                    >
                                        <NewlineText text={post.body} />
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                    }
                    <Grid
                        item
                        paddingY={3}
                        paddingX={4}
                    >
                        <Button
                            variant="contained"
                            size="medium"
                            color="primary"
                            aria-label="Back"
                            onClick={() => navigate('/blog')}
                        >
                            <Typography
                                variant="h4"
                            >
                                Back
                            </Typography>
                        </Button>
                    </Grid>
                    {token ? 
                    <Grid
                        item
                        paddingY={3}
                        paddingX={4}
                    >
                        <Button
                            variant="contained"
                            size="medium"
                            color="secondary"
                            aria-label="Back"
                            onClick={() => handleClick()}
                        >
                            <Typography
                                variant="h4"
                            >
                                Edit 
                            </Typography>
                        </Button>
                    </Grid>
                    : null}
                </Grid> : <ErrorMessage message="No blog post found" />}
        </Box >
    )
}

export default BlogPost;



