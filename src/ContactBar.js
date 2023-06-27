// Purpose: App bar that is displayed inline to allow people to access various 
// social media 

import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import NoteIcon from '@mui/icons-material/Note';
import EmailIcon from '@mui/icons-material/Email';



// creates a fully functional navigation bar that is dynamic
function ContactBar() {
    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignContent="center" 
            pt={8}
        > 
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="Github"
                    sx={{ mr: 2 }}
                > 
                    <GitHub />   
                </IconButton> 
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="LinkedIn"
                    sx={{ mr: 2 }}
                >
                    <LinkedIn />         
                </IconButton> 
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="Instagram"
                    sx={{ mr: 2 }}
                >
                    <Instagram />         
                </IconButton> 
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="Resume"
                    sx={{ mr: 2 }}
                >
                    <NoteIcon />
                </IconButton> 
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="Email"
                    sx={{ mr: 2 }}
                >
                    <EmailIcon />
                </IconButton> 
            </Toolbar>
        </Box>
    )
}

export default ContactBar;

