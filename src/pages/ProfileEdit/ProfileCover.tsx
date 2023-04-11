
import { Grid, Box, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
const ProfileCover = (props: { user: any }) => {

    const [balance, setBalance] = useState(1000)
    const increaseBalance = () => {
        let amount = balance + 10
        setBalance(amount)
    }
    const [stakedAmount, setAmount] = useState(3000)
    const changeAmount = () => {
        let amount = stakedAmount + 10
        setAmount(amount)
    }
    console.log('profileCover_arg:')
    console.log('profileCover_name: %s', props.user.name)
    return (
        <>
            <Box style={{ paddingTop: "100px", paddingLeft: "100px" }}>
                <Box>
                    <Card style={{ backgroundColor: "rgba(230,230,230,0.8)" }}>
                        <CardActionArea style={{ paddingTop: "17px" }} component="span">
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
                                <Button variant="contained" color="primary">Edit profile</Button>
                            </CardContent>
                        </CardActionArea>
                        <Box><p style={{ paddingTop: "30px", alignItems: "left" }}>Lerem ldiekd lekdspospeo dpdeppspe  dkeksp skeps dp,<br />dkekso ekso sleo </p></Box>
                    </Card>
                    <Box style={{ textAlign: "left", paddingLeft: "30px", paddingBottom: "50px" }}>
                        <Grid container>
                            <Grid item xs={6} style={{ paddingTop: "50px" }}>
                                <h5 style={{ marginBottom: "20px" }}>Current balance</h5>
                                <h3 style={{ marginBottom: "0px" }}>{balance}$LURV</h3>
                                <p style={{ fontSize: "17px", marginBottom: "0px" }}>$500.000USD</p>
                            </Grid>
                            <Grid item xs={6} style={{ paddingTop: "90px" }}>
                                <Button variant="outlined" color="primary" style={{ width: "140px" }} onClick={increaseBalance}>Buy $LURV</Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6} style={{ paddingTop: "50px" }}>
                                <h5 style={{ marginBottom: "20px" }}>Staked $LURV</h5>
                                <h3 style={{ marginBottom: "0px" }}>{stakedAmount}$LURV</h3>
                                <p style={{ fontSize: "17px", marginBottom: "0px" }}>$1500.000USD</p>
                            </Grid>
                            <Grid item xs={6} style={{ paddingTop: "90px" }}>
                                <Button variant="outlined" color="primary" style={{ width: "140px" }} onClick={changeAmount}>Stake $LURV</Button>
                            </Grid>
                        </Grid>
                        <Grid container style={{ paddingTop: "50px" }}>
                            <Grid item xs={8}>
                                <h5>Profile unlocked price:</h5>
                            </Grid>
                            <Grid item xs={4} >
                                <p>1 $LURV</p>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ProfileCover;

