import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosConfig from './axiosConfig';
import { useNavigate } from "react-router-dom";


function DeleteButton(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        axiosConfig.delete(`/${props.url}/${props.id}/`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                navigate('/error');
            })
    }

    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Delete"
            onClick={handleClick}

        >
            <DeleteIcon />
        </IconButton>
    )
}

export default DeleteButton;