import { Grid, Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Section4: React.FC = () => {
    return (
        <>
            <Grid style={{ marginTop: "100px" }}>
                <Grid>
                    <h2>Community governed</h2>
                    <p>Earn $LURV by reporting accounts that breach community guidelines</p>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3} >
                        <Card>
                            <CardActionArea>
                                <div>
                                    <input
                                        type="image"
                                        src='/assets/img/notifications/thumb-1.jpg'
                                        alt="my image"
                                        style={{ borderRadius: "10px", height: "250px" }}
                                    />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        BOTS
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} >
                        <Card>
                            <CardActionArea>
                                <div>
                                    <input
                                        type="image"
                                        src='/assets/img/notifications/thumb-2.jpg'
                                        alt="my image"
                                        style={{ borderRadius: "10px", height: "250px" }}
                                    />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        SCAMMERS
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Card>
                            <CardActionArea>
                                <div>
                                    <input
                                        type="image"
                                        src='/assets/img/notifications/thumb-3.jpg'
                                        alt="my image"
                                        style={{ borderRadius: "10px", height: "250px" }}
                                    />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        X-RATED
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Card>
                            <CardActionArea>
                                <div>
                                    <input
                                        type="image"
                                        src='/assets/img/notifications/thumb-2.jpg'
                                        alt="my image"
                                        style={{ borderRadius: "10px", height: "250px" }}
                                    />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        UNDERAGE
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