import { Box, Grid } from "@mui/material";
import Notification from '../../components/Notification/Notification';
import ProfileCover from './ProfileCover'
import { PhotoList } from '../../components/PhotoList/PhotoList'

const ProfileLocked = () => {

    return (
        <div style={{ textAlign: "center" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={8} xl={9}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={5}>
                            <ProfileCover />
                        </Grid>
                        <Grid item xs={12} lg={7}>
                            <Box style={{ marginTop: "150px", marginLeft: "150px" }}>
                                <PhotoList />
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

export default ProfileLocked;