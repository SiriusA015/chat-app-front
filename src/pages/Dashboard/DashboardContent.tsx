import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import LurvPopup1 from 'pages/LurvPopup/LurvPopup1';
import LurvPopup3 from 'pages/LurvPopup/LurvPopup3';
import { useNavigate } from 'react-router';
import { useAppSelector } from 'hooks';

const ProfileContent = () => {

  const connectPeople = useAppSelector((state) => state.connectPeople.people);
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles()

  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
    console.log("selected Item")
  };
  const OnProfile = () => {

    console.log(`selectedUser: ${connectPeople[index]}`)
    return (
      navigate('/profile_edit', { state: connectPeople[index] }
      )
    )
  }

  return (
    <div style={{ paddingTop: "150px" }}>
      <Card className={classes.root} style={{ margin: "auto", borderRadius: "20px", backgroundColor: "rgba(200,200,200,0.8)" }}>
        <CardActionArea component="span">
          <Carousel fade activeIndex={index} nextLabel prevLabel onSelect={handleSelect}>
            {connectPeople.map((people, index) => {
              return (
                <Carousel.Item key={index} onClick={() => OnProfile()}>
                  <img
                    className="d-block w-100"
                    src={people.img}
                    alt={people.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {people.name},  {people.age} years old
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      80% $LURV returned
                    </Typography>
                  </CardContent>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </CardActionArea>
        <CardActions>
          <div style={{ margin: "auto" }}>
            <LurvPopup1 user={connectPeople[index]} />
          </div>
          <div style={{ margin: "auto" }}>
            <LurvPopup3 />
          </div>
        </CardActions>
      </Card>
    </div>
  )
}
export default ProfileContent;