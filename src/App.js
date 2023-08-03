import HomePage from './HomePage';
import About from './About';
import Projects from './Projects';
import Navigation from './Navigation';
import Blog from './Blog';
import BlogPost from './BlogPost';
import AddBlog from './AddBlog';
import EditPostPage from './EditPostPage';
import Login from './Login';
import './App.css';
import './Utilities.css';
import { BlogProvider } from './BlogContext';
import { AuthProvider } from './AuthContext';
import AddProject from './AddProject';

import { Route, Routes } from "react-router-dom";
import Error from './Error';


function App() {
  return (
    <div className="App">
      <Navigation />
      <AuthProvider>
        <BlogProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/add" element={<AddProject />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post" element={<BlogPost />} />
            <Route path="/blog/add" element={<AddBlog />} />
            <Route path="blog/post/edit" element={<EditPostPage />}/> 
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error message="Page not found." />} />
          </Routes>
        </BlogProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
