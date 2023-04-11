
import { useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useNavigate } from 'react-router-dom';

export const LurvPopup2 = (props: { closeModal: any, user: any }) => {

    let navigate = useNavigate();
    let { closeModal } = props;
    const [open, setOpen] = useState(false);
    const OpenPopup = () => {
        setOpen(true);
    };
    const onClosePopup = () => {
        setOpen(false);
        closeModal();

    };
    const onProfile = () => {
        console.log('user_unlocked:')
        console.log(props.user)
        navigate('/profile_unlocked', { state: props.user })
    }
    return (
        <>
            <Button variant='contained' style={{ marginBottom: "20px" }} onClick={OpenPopup}>Send 10 $LURV</Button>
            <>
                <Dialog onClose={onClosePopup} open={open} style={{ width: "1000px", margin: "auto" }}>
                    <div style={{ padding: "10px", textAlign: "center" }}>
                        <DialogTitle style={{ marginBottom: "0px" }}>
                            <span style={{ fontSize: "25px", fontWeight: "bold" }}>Payment successful</span>
                            <IconButton aria-label="delete" size="medium" style={{ float: "right" }} onClick={() => { onClosePopup() }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        </DialogTitle>
                        <div>
                            <p>You have now unlocked @usernames full profile <br />Check them out now and say Hi!</p>
                        </div>
                        <Button variant='contained' style={{ marginBottom: "20px" }} onClick={onProfile}>View profile</Button>
                    </div>
                </Dialog>
            </>
        </>
    )
}
