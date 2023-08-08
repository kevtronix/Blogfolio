import { Route, Routes } from "react-router-dom";

import Login from "authentication/Login";
import AddBlog from "blog/AddBlog";
import Blog from "blog/Blog";
import BlogPost from "blog/BlogPost";
import EditPostPage from "blog/EditPostPage";
import About from 'general/About';
import HomePage from 'general/HomePage';
import AddProject from "projects/AddProject";
import Project from "projects/Projects";
import Error from 'utilities/Error';


export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post" element={<BlogPost />} />
            <Route path="/blog/add" element={<AddBlog />} />
            <Route path="/blog/post/edit" element={<EditPostPage />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/add" element={<AddProject />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}