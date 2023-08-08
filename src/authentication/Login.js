// Note: Login Page
import React, { useState, useContext } from 'react';

import 'utilities/Utilities.css';
import LoginIcon from '@mui/icons-material/Login';
import { CardContent, Typography } from "@mui/material";
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AuthContext } from 'context/AuthContext';



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { logIn } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        logIn(username, password, '/');

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
                                    required
                                    label="Username"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    onChange={(e) => setUsername(e.target.value)}

                                />
                                <TextField
                                    id="outlined-basic"
                                    type="password"
                                    required
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