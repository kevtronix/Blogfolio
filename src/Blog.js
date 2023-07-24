import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { BlogContext } from './BlogContext';
import { AuthContext } from './AuthContext';
import axiosConfig from './axiosConfig';
import './Utilities.css';
import AddItemButton from './AddItemButton';
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { IconButton } from "@mui/material";
import DeleteButton from './DeleteButton';
import ErrorMessage from './ErrorMessage';



function Blog() {
    // retrieve post data from API 
    const [posts, setPosts] = useState([]);
    const { setPost } = useContext(BlogContext);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosConfig.get('/blogs')
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
                setPosts(null);
            })
    }, [token])


    return (
        <Box
            className='blog-page'
            minHeight={"100vh"}
        > {posts ?
            <Grid
                container
                paddingTop={3}
                paddingX={4}
            >
                {token ? <AddItemButton
                    type="post"
                    url='/blog/add' /> : null}
                {
                    posts.map(post => (
                        <Grid
                            item
                            xs={12}
                            paddingX={"28%"}
                            paddingY={2}
                            key={post.id}
                        >
                            <Card>
                                <CardContent>
                                    <Grid
                                        container
                                        paddingY={2}
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                        >
                                            <Typography
                                                variant="h2"
                                                color={"primary"}
                                            >
                                                {post.title}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}

                                        >
                                            <Typography
                                                variant="h4"
                                                color={"secondary"}
                                            >
                                                {post.snippet}... <IconButton
                                                    size="large"
                                                    edge="start"
                                                    color="inherit"
                                                    aria-label="Read More"
                                                    onClick={
                                                        () => {
                                                            setPost(post);
                                                            navigate('/blog/post');
                                                        }
                                                    }
                                                >
                                                    <ReadMoreIcon />
                                                </IconButton>
                                                {token ? <DeleteButton url='blogs' id={post.id} /> : null}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid> : <ErrorMessage message="Oops! Something went wrong!" />}
        </Box >
    )
}

export default Blog;