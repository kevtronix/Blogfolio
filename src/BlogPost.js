import React, { useContext } from 'react';
import { BlogContext } from './BlogContext';
import { AuthContext } from './AuthContext';
import './Utilities.css';
import Card from '@mui/material/Card';
import { CardContent, IconButton, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Error from './Error';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';





function BlogPost() {
    const { post } = useContext(BlogContext);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/blog/post/edit')
    }

    if (post == null) {
        return (
            <Error message="No blog post found." />
        )
    }

    return (
        <Box
            className='blog-page'
            minHeight={"100vh"}
        >
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
            </Grid>
        </Box >
    )
}

export default BlogPost;