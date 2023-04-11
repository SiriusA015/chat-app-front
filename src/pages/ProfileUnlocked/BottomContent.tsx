import {
    Avatar,
    Tooltip,
    IconButton,
    Box,
    Button,
    styled,
    InputBase,
    useTheme
} from '@mui/material';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { getUser } from 'redux/User/reducer';

const MessageInputWrapper = styled(InputBase)`
      font-size: 17px;
      padding: 10px;
      width: 100%;
  `;

const Input = styled('input')({
    display: 'none'
});

const BottomContent = () => {
    const theme = useTheme();

    const user = useSelector(getUser)
    const [newMessage, setNewMessage] = useState("");
    const handleSubmit = (msg: any) => {    
    };
    const handleNewMessageChange = (event: any) => {
        setNewMessage(event.target.value);
    };
    const handleKeyUp = (e: any) => {
        if ((e.key === 'Enter' || e.keyCode === 13) && newMessage.trim().length > 0) {
            handleSubmit(newMessage);
        }
    };

    return (
        <Box
            sx={{
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                p: 2
            }}
            style={{ position: "absolute", bottom: "0px" }}
        >
            <Box flexGrow={1} display="flex" alignItems="center">
                <Avatar
                    sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}
                    alt=''
                    src={user.avatar}
                />
                <MessageInputWrapper
                    autoFocus
                    placeholder="Type a message here then hit ENTER"
                    fullWidth
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    onKeyUp={handleKeyUp}
                />
            </Box>
            <Box>
                <Tooltip arrow placement="top" title="Choose an emoji">
                    <IconButton
                        sx={{ fontSize: theme.typography.pxToRem(16) }}
                        color="primary"
                    >
                        😀
                    </IconButton>
                </Tooltip>
                <Input accept="image/*" id="messenger-upload-file" type="file" />
                <Tooltip arrow placement="top" title="Attach a file">
                    <label htmlFor="messenger-upload-file">
                        <IconButton sx={{ mx: 1 }} color="primary" component="span">
                            <AttachFileTwoToneIcon fontSize="small" />
                        </IconButton>
                    </label>
                </Tooltip>
                <Button
                    startIcon={<SendTwoToneIcon />}
                    variant="contained"
                    disabled={!newMessage.trim().length}
                    onClick={()=>{handleSubmit(newMessage)}}
                >
                    Send
                </Button>
            </Box>
        </Box>
    );
}

export default BottomContent;
