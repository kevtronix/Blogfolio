// Desc: This is the top navigation bar for the application

import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";



// creates a fully functional navigation bar that is dynamic
function Navigation() {
    const navigate = useNavigate();

    return (
        <div> 
            <AppBar position="static" color="primary">
                <Toolbar>
                    {/* }
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >    
                    </IconButton>
                    <MenuIcon />
                    { */}  
                    <Button 
                        color="inherit"
                        onClick={() => navigate("/")} 
                    >
                        Home
                    </Button>
                    <Button 
                        color="inherit"
                        onClick={() => navigate("/about")}   
                    >
                        About
                    </Button>
                    <Button 
                        color="inherit"
                        onClick={() => navigate("/projects")} 
                    >
                        Projects
                    </Button> 
                </Toolbar>
            </AppBar>
        </div>
    )
}




export default Navigation;