import { Grid } from "@mui/material";
import Notification from '../../components/Notification/Notification';
import ProfileContent from './DashboardContent';//

const Dashboard = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={8} xl={9}>
          <ProfileContent />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Notification />
        </Grid>
      </Grid>
    </div>
  );//
}

export default Dashboard;