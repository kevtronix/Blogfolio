import { createContext, useState } from 'react';

// Create BlogContext
export const BlogContext = createContext();

// Create BlogProvider
export const BlogProvider = ({ children }) => {
    const [post, setPost] = useState(null);

    return (
        <BlogContext.Provider value={{ post, setPost }}>
            {children}
        </BlogContext.Provider>
    );
}
