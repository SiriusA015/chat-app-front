import { Grid, Card } from "@mui/material";

export const Section1: React.FC = () => {
  return (
    <>
      <Grid container spacing={10} style={{ marginTop: "50px" }}>
        <Grid item xs={12} lg={6}>
          <Card style={{ height: "500px", paddingTop: "170px", textAlign: "center", backgroundColor: "rgba(240,240,240,0.8)" }}>
            <h1 style={{ fontSize: "70px" }}>Date to Earn</h1>
            <h5> The social app that pays to date</h5>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card style={{ height: "500px", backgroundColor: "rgba(240,240,240,0.8)" }}>
            <input type="image"
              src='/assets/img/cover/cover_1.jpg'
              alt="my image"
              style={{ height: "480px", width: "100%", maxWidth: "600px", borderRadius: "20px" }}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}