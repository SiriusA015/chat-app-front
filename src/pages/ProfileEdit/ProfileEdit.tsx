import { Grid } from "@mui/material";
import ProfileCover from './ProfileCover';
import { PhotoList } from '../../components/PhotoList/PhotoList'
import { useLocation } from "react-router";

const ProfileEdit: React.FC = () => {

    const { state } = useLocation();
    return (

        <div className="container" style={{ textAlign: "center" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={5} >
                    <ProfileCover user={state} />
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                    <Grid style={{ marginLeft: "200px", marginTop: "270px" }}>
                        <PhotoList />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProfileEdit;