import React, { useContext } from 'react';
import { BlogContext } from './BlogContext';
import './Utilities.css';
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Error from './Error';





function BlogPost() {
    const { post } = useContext(BlogContext);

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
                            </CardContent>
                        </Card>
                    </Grid>
                }
            </Grid>
        </Box >
    )
}

export default BlogPost;