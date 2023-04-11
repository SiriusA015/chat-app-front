
import { useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Bookmark from '@material-ui/icons/Bookmark';

const LurvPopup3 = () => {
    const [open2, setOpen2] = useState(false);
    const OpenPopup2 = () => {
        setOpen2(true);
    };
    const onClosePopup2 = () => {
        setOpen2(false);
    };

    return (
        <>
            <IconButton aria-label="delete" color="primary" onClick={OpenPopup2}>
                <Bookmark style={{ width: "40px", height: "40px" }} />
            </IconButton>
            <>
                <Dialog onClose={onClosePopup2} open={open2} style={{ width: "1000px", margin: "auto" }}>
                    <div style={{ padding: "10px", textAlign: "center" }}>
                        <DialogTitle style={{ marginBottom: "0px" }}>
                            <span style={{ fontSize: "25px", fontWeight: "bold" }}>Report sent</span>
                            <IconButton aria-label="delete" size="medium" style={{ float: "right" }} onClick={() => { onClosePopup2() }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        </DialogTitle>
                        <div>
                            <p>Thank you We have successfully received your report, <br />we will message shortly for more information.</p>
                        </div>
                        <Button variant='contained' style={{ marginBottom: "20px" }} onClick={onClosePopup2}>Close window</Button>
                    </div>
                </Dialog>
            </>
        </>
    )
}

export default LurvPopup3;