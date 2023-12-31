import { useNavigate } from "react-router-dom";

import { AppBar, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";



// creates a fully functional navigation bar that is dynamic
function Navigation() {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <div>
            <AppBar
                position="static"
                style={{
                    backgroundColor: theme.palette.primary.darker
                }}>
                <Toolbar>
                    <Button
                        color="inherit"
                        onClick={() => navigate("/")}
                    >
                        <Typography variant="h6">
                            Home
                        </Typography>
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate("/about")}
                    >
                        <Typography variant="h6">
                            About
                        </Typography>
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate("/projects")}
                    >
                        <Typography variant="h6">
                            Projects
                        </Typography>
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate("/blog")}
                    >
                        <Typography variant="h6">
                            Artificially Stacked
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}




export default Navigation;