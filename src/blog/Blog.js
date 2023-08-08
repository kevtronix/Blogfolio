import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { CardContent, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { AuthContext } from 'context/AuthContext';
import { BlogContext } from 'context/BlogContext';
import AddItemButton from 'utilities/AddItemButton';
import axiosConfig from 'utilities/AxiosConfig';
import 'utilities/Utilities.css';
import DeleteButton from 'utilities/DeleteButton';
import ErrorMessage from 'utilities/ErrorMessage';
import RetroLoadingMessage from 'utilities/RetroLoading';


function Blog() {
    // retrieve post data from API 
    const [posts, setPosts] = useState([]);
    const { setPost } = useContext(BlogContext);
    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        axiosConfig.get('/blogs')
            .then(res => {
                console.log(res);
                setPosts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setPosts(null);
                setLoading(false);
            })
    }, [])


    return (
        <Box
            className='blog-page'
            minHeight={"100vh"}
        >
            {token ? <AddItemButton
                type="post"
                url='/blog/add' /> : null
            }

            {loading ? <RetroLoadingMessage message="Loading Posts" /> : null}

            {posts ?
                <Grid
                    container
                    paddingTop={3}
                    paddingX={4}
                >
                    {
                        posts.map(post => (
                            <Grid
                                item
                                xs={12}
                                paddingX={1}
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
                                                paddingBottom={3}
                                            >
                                                <Typography
                                                    variant="h3"
                                                    color={"primary"}
                                                >
                                                    {post.title}
                                                </Typography>
                                                <Divider />
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    color={"secondary"}
                                                >
                                                    {post.snippet}... <IconButton
                                                        size="large"
                                                        console.log(error);
                setProjects(null                  color="inherit"
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
                </Grid> : null}
            {!loading && !posts ? <ErrorMessage message="Oops! Something went wrong!" /> : null}
        </Box >
    )
}

export default Blog;