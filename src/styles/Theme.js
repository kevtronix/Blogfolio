import './fonts.css'

import { createTheme } from '@mui/material/styles'
import { darken } from '@mui/system'

const customColors = {
    black: '#000000',
};

const draculaTheme = createTheme({
    palette: {
        primary: {
            main: darken('#bd93f9', 0.5),
            darker: darken('#bd93f9', 0.8),
        },
        secondary: {
            main: darken('#ff79c6', 0.5),
        },
        tertiary: {
            main: darken('#bd93f9', 0.8)

        }
    },
    error : {
        main: darken('#ff5555', 0.5)
    },
    warning: {
        main: darken('#ffb86c', 0.5)

    },
    info: {
        main: darken('#8be9fd', 0.5)
    },
    success: {
        main: darken('#50fa7b', 0.5)
    },
    background: {
        default: '#282a36',
        paper: '#44475a'

    },
    text: {
        primary: '#f8f8f2',
        secondary: '#f8f8f2',
        disabled: '#6272a4',
        hint: '#6272a4',

    },
    typography: {
        fontFamily: [
            'Pixel',
        ]
    },    
});

export default draculaTheme;