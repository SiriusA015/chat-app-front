
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { LurvPopup2 } from './LurvPopup2';

const LurvPopup1 = (props: { user: any }) => {

    const [open1, setOpen1] = useState(false);
    const OpenPopup1 = () => {
        setOpen1(true);
    };
    const onClosePopup1 = () => {
        setOpen1(false);
    };

    return (
        <>
            <IconButton aria-label="delete" color="primary" onClick={OpenPopup1}>
                <FavoriteBorder style={{ width: "40px", height: "40px" }} />
                {/*  */}
            </IconButton>
            <>
                <Dialog onClose={onClosePopup1} open={open1} style={{ width: "1000px", margin: "auto" }}>
                    <div style={{ padding: "10px", textAlign: "center" }}>
                        <DialogTitle style={{ marginBottom: "0px" }}>
                            <span style={{ fontSize: "25px", fontWeight: "bold" }}>Confirm</span>
                            <IconButton aria-label="delete" size="medium" style={{ float: "right" }} onClick={() => { onClosePopup1() }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        </DialogTitle>
                        <div>
                            <p>Unlock @Usernames profile to send unlimited <br />DM's and view all their pics and videos</p>
                        </div>
                        <LurvPopup2 closeModal={onClosePopup1} user={props.user} />
                    </div>
                </Dialog>
            </>
        </>
    )
}

export default LurvPopup1;