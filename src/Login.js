// Note: Login Page
import React, { useState, useContext } from 'react';
import './Utilities.css';
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AuthContext } from './AuthContext';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { logIn } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        logIn(username, password);  
    };

    return (
        <Box
            className='home-page'
            minHeight={"100vh"}
        >
            <Grid
                container
                paddingTop={25}
                paddingX={4}

            >
                <Grid
                    item
                    xs={12}
                    paddingX={"15%"}
                >
                    <Card>
                        <CardContent>
                            <Typography variant="h3" color={"primary"}>
                                Login
                            </Typography>
                            <form >
                                <TextField
                                    id="outlined-basic"
                                    label="Username"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    onChange={(e) => setUsername(e.target.value)}

                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <IconButton 
                                    variant="contained"
                                    color="primary"
                                    onClick = {handleClick}
                                >
                                    <LoginIcon />
                                </IconButton>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;