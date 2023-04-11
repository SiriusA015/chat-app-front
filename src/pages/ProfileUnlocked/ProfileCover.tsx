
import { Box, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import Button from '@material-ui/core/Button';
import IconButton from '@mui/material/IconButton';
import Bookmark from '@material-ui/icons/Bookmark';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LurvPopup1 from 'pages/LurvPopup/LurvPopup1';
import { AppCtx } from 'App';
import { useContext } from 'react';
import { useNavigate } from 'react-router';

const ProfileCover = (props: { user: any }) => {

    const appContext = useContext(AppCtx)
    const OpenMessage = () => {
        appContext?.setTab("message")
    }
    const OpenPopup2 = () => {

    }
    const navigate = useNavigate()
    const onEditProfile = () => {
        return (
            navigate('/profile_edit', { state: props.user })
        )
    }
    return (
        <>
            <Box style={{ paddingTop: "150px", paddingLeft: "100px", height: "600px" }}>
                <Box>
                    <Card style={{ backgroundColor: "rgba(230,230,230,0.8)" }}>
                        <CardActionArea style={{ paddingTop: "17px", display: "inline-flex" }} component="span">
                            <div>
                                <input
                                    type="image"
                                    src={props.user.img}
                                    alt="my image"
                                    style={{ borderRadius: "20px", height: "200px", alignItems: "left" }}
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ paddingBottom: "30px" }}>
                                    {props.user.name}
                                </Typography>
                                <Button variant="contained" color="primary" onClick={onEditProfile}>Edit profile</Button>
                            </CardContent>
                        </CardActionArea>
                        <Box><p style={{ paddingTop: "30px", alignItems: "left" }}>Lerem ldiekd lekdspospeo dpdeppspe  dkeksp skeps dp,<br />dkekso ekso sleo </p></Box>
                    </Card>
                    <Box style={{ marginTop: "20px" }}>
                        <LurvPopup1 user={props.user} />
                        <IconButton aria-label="delete" color="primary" onClick={OpenMessage}>
                            <MailOutlineIcon style={{ width: "40px", height: "40px", marginLeft: "50px", marginRight: "50px" }} />
                        </IconButton>
                        <IconButton aria-label="delete" color="primary" onClick={OpenPopup2}>
                            <Bookmark style={{ width: "40px", height: "40px" }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ProfileCover;

