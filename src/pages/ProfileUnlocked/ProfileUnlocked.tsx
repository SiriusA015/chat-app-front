import { Box, Grid } from "@mui/material";
import Notification from '../../components/Notification/Notification';
import ProfileCover from './ProfileCover'
import { PhotoList } from '../../components/PhotoList/PhotoList'
import CharList from './ChatList'
import { useLocation } from "react-router";
import { AppCtx } from 'App'
import { useState, useContext } from "react";
import { useAppSelector } from 'hooks';
import { getUser } from 'redux/User/reducer';
import socket from "utils/socket";

const ProfileUnlocked = () => {
    const { state } = useLocation()
    window.pageType = "ProfileUnlocked"
    const appContext = useContext(AppCtx)

    /* ------------------- socket -------------------- */
    const [usernameAlreadySelected, setSelected] = useState("false")

    const sessionID = localStorage.getItem("sessionID");
    if (sessionID) {
        setSelected("true");
        socket.auth = { sessionID };
        socket.connect();
    }
    socket.on("session", (sessionID, userID) => {
        // attach the session ID to the next reconnection attempts
        socket.auth = { sessionID };
        // store it in the localStorage
        localStorage.setItem("sessionID", sessionID);
        // save the ID of the user          
        // socket.userID
    });

    socket.on("connect_error", (err) => {
        if (err.message === "invalid username") {
            setSelected("false");
        }
    });
    
    /* ------------------- socket -------------------- */

    return (
        <div style={{ textAlign: "center" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={8} xl={9}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={5}>
                            <ProfileCover user={state} />
                        </Grid>
                        <Grid item xs={12} lg={7}>
                            <Box style={{ display: "flex", height: "720px" }}>
                                {appContext?.currentTab === "activity" && <Box style={{ marginTop: "100px", padding: "100px" }}><PhotoList /></Box>}
                                {appContext?.currentTab === "message" && <> <Box flex={1}><CharList friend={state} /></Box></>}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Notification />
                </Grid>
            </Grid>
        </div>
    );
}

export default ProfileUnlocked;