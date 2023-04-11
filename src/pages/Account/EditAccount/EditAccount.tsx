import { Grid } from "@mui/material";
import Button from '@material-ui/core/Button';
import { ContentLeft } from './ContentLeft';
import { PhotoList } from '../../../components/PhotoList/PhotoList'
const EditAccount = () => {

    return (

        <div className="container" style={{ textAlign: "center" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={5} >
                    <ContentLeft />
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                    <Grid style={{ marginLeft: "230px", marginTop: "150px" }}>
                        <h5 style={{ textAlign: "left", paddingLeft: "10px" }}>Manage photos</h5>
                        < PhotoList />
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{ marginBottom: "50px" }}>
                <Button variant="contained" color="primary">Save changes</Button>
            </Grid>
        </div>
    );
}

export default EditAccount;