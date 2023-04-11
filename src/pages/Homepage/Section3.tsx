import { Grid, Card } from "@mui/material";
import Button from '@mui/material/Button';

export const Section3: React.FC = () => {
    return (
        <>
            <Grid container spacing={20} style={{ marginTop: "5px" }}>
                <Grid item xs={12} lg={6}>
                    <Card style={{ height: "500px", paddingTop: "170px", textAlign: "center", backgroundColor:"rgba(240,240,240,0.8)" }}>
                        <h2>$LURV token</h2>
                        <h5>Catfish proof </h5>
                        <p style={{ paddingBottom: "40px" }}>All picture and video uploads are proof of ownwership verified NFTs,
                            ensuring lurv.io is the first catfish free dating app</p>
                        <Button variant="contained" size='large'>Connect wallet</Button>
                    </Card>
                </Grid>
                
                <Grid item xs={12} lg={6}>
                    <Card style={{ height: "500px" }}>
                        <input type="image"
                            src='/assets/img/carousels/3.jpg'
                            alt="my image"
                            style={{ height: "480px", width: "100%", maxWidth: "600px", borderRadius:"20px" }}
                        />
                    </Card>
                </Grid>
            </Grid>
        </>

    )
}