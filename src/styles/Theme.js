import './fonts.css'

import { createTheme } from '@mui/material/styles'
import { darken } from '@mui/system'

const draculaTheme = createTheme({
    palette: {
        primary: {
            main: darken('#bd93f9', 0.5),
            darker: darken('#bd93f9', 0.8),
        },
        secondary: {
            main: darken('#ff79c6', 0.5),
        },
    },
    error: {
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
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    border: '3px solid #ffff',
                    boxSizing: 'border-box',
                    boxShadow: 'inset 0 0 0 3px #000',
                    borderRadius: 14,
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: darken('#ff779c', 0.2),
                    height: '2px',
                    margin: '10px 0',
                }
            }
        }
    }
});

export default draculaTheme;