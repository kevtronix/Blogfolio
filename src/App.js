import { AuthProvider } from "context/AuthContext";
import { BlogProvider } from "context/BlogContext";
import { ProjectProvider } from "context/ProjectContext";
import CustomRoutes from "routes/CustomRoutes";
import Navigation from 'utilities/Navigation';
import 'App.css';
import 'utilities/Utilities.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <AuthProvider>
        <BlogProvider>
          <ProjectProvider>
            <CustomRoutes />
          </ProjectProvider>
        </BlogProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
