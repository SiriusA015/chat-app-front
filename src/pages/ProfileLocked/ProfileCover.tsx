
import { Grid, Box, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const ProfileCover = () => {
    return (
        <>
            <Box style={{ paddingTop: "100px", paddingLeft: "100px" }}>
                <Box>
                    <Card style={{ backgroundColor: "rgba(230,230,230,0.8)" }} component="span">
                        <CardActionArea style={{ paddingTop: "17px" }} component="span">
                            <div>
                                {/*  */}
                                <input
                                    type="image"
                                    src='/assets/img/avatar/3.jpg'
                                    alt="my image"
                                    style={{ borderRadius: "20px", height: "200px", alignItems: "left" }}
                                />
                            </div>
                            <CardContent component="span">
                                <Typography gutterBottom variant="h5" component="div" style={{ paddingBottom: "30px" }}>
                                    Richard Ernandes
                                </Typography>
                                <Button variant="contained" color="primary">Edit profile</Button>
                            </CardContent>
                        </CardActionArea>
                        <Box><p style={{ paddingTop: "30px", alignItems: "left" }}>Lerem ldiekd lekdspospeo dpdeppspe  dkeksp skeps dp,<br />dkekso ekso sleo </p></Box>
                    </Card>
                    <Box style={{ textAlign: "left", paddingLeft: "30px", paddingBottom: "50px" }}>
                        <Grid container>
                            <Grid item xs={6} style={{ paddingTop: "50px" }}>
                                <h5 style={{ marginBottom: "20px" }}>Current balance</h5>
                                <h3 style={{ marginBottom: "0px" }}>1000$LURV</h3>
                                <p style={{ fontSize: "17px", marginBottom: "0px" }}>$500.000USD</p>
                            </Grid>
                            <Grid item xs={6} style={{ paddingTop: "90px" }}>
                                <Button variant="outlined" color="primary" style={{ width: "140px" }}>Buy $LURV</Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6} style={{ paddingTop: "50px" }}>
                                <h5 style={{ marginBottom: "20px" }}>Post cost</h5>
                                <p style={{ fontSize: "15px", marginBottom: "0px" }}>Change the amount your profile costs to unlock.</p>
                            </Grid>
                            <Grid item xs={6} style={{ paddingTop: "70px" }}>
                                <div><TextField
                                    id="outlined-helperText"
                                    label=""
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    defaultValue="1$"
                                    helperText="$0.50USD"
                                    style={{ width: "140px" }}
                                /></div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6} style={{ paddingTop: "50px" }}>
                                <h5 style={{ marginBottom: "20px" }}>Staked $LURV</h5>
                                <h3 style={{ marginBottom: "0px" }}>3000$LURV</h3>
                                <p style={{ fontSize: "17px", marginBottom: "0px" }}>$1500.000USD</p>
                            </Grid>
                            <Grid item xs={6} style={{ paddingTop: "90px" }}>
                                <Button variant="outlined" color="primary" style={{ width: "140px" }}>Stake $LURV</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ProfileCover;

