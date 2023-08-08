import { createContext, useEffect, useState } from 'react';

import axiosConfig from 'utilities/AxiosConfig';

// Create BlogContext
export const BlogContext = createContext();

// Create BlogProvider
export const BlogProvider = ({ children }) => {
    const [post, setPost] = useState()

    // Every time post changes, save post.id to localStorage
    useEffect(() => {
        // if post is not null, save post.id to localStorage
        if (post) {
            localStorage.setItem('postID', post.id);
        }
    }, [post])

    // Retrieve post data from API
    const retrievePost = async (id) => {
        try {
            const response = await axiosConfig.get(`/blogs/${id}`);
            setPost(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <BlogContext.Provider value={{ post, setPost, retrievePost }}>
            {children}
        </BlogContext.Provider>
    );
}
