import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosConfig from './axiosConfig';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';



function DeleteButton(props) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickConfirmation = async () => {
        axiosConfig.delete(`/${props.url}/${props.id}/`)
            .then(res => {
                console.log(res);
                setOpen(false);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                navigate('/error');
            })
    }

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="Delete"
                onClick={handleClickOpen}

            >
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Are you sure you want to delete this {props.type}?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClickConfirmation}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DeleteButton;