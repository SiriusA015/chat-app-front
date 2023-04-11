import { Grid, Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
    LooksOneRounded,
    LooksTwoRounded,
    Looks3Rounded,
    Looks4Rounded,
    Looks5Rounded
} from '@mui/icons-material';

export const Section2: React.FC = () => {
    return (
        <>
            <Grid style={{ marginTop: "100px" }}>
                <Grid>
                    <h2>How it works</h2>
                    <p>More people who want to chat, more $LURV you earn</p>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={3} lg={2.4} >
                        <Card>
                            <CardActionArea>
                                <div>
                                    <LooksOneRounded style={{ fontSize: "10rem" }} />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Register
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Create your profile<br /><span style={{ color: "white" }}>test</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={2.4}>
                        <Card>
                            <CardActionArea>
                                <div>
                                    <LooksTwoRounded style={{ fontSize: "10rem" }} />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Choose pictures
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Choose your photos for your profile
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={2.4}>
                        <Card>
                            <CardActionArea>
                                <div>
                                    <Looks3Rounded style={{ fontSize: "10rem" }} />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Discover
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Swipe through profiles you're interested in
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={2.4}>
                        <Card>
                            <CardActionArea>
                                <div>
                                    <Looks4Rounded style={{ fontSize: "10rem" }} />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Earn
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Send DM's and view full profiles, other users will send you $LURV
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={2.4}>
                        <Card>
                            <CardActionArea>
                                <div>
                                    <Looks5Rounded style={{ fontSize: "10rem" }} />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Start messaging
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        To respond and view their profile, you have to send $LURV
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}