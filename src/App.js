import HomePage from './HomePage';
import About from './About';
import Projects from './Projects';
import Navigation from './Navigation';
import Blog from './Blog';
import BlogPost from './BlogPost';
import './App.css';
import './Utilities.css';
import { BlogProvider } from './BlogContext';

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navigation />
      <BlogProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post" element={<BlogPost />} />
        </Routes>
      </BlogProvider>
    </div>
  );
}

export default App;
