import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function WeatherCard(props) {
  const { data } = props;
  const URL_icon = " http://openweathermap.org/img/wn/" +
  `${data.cod != 404 ? data.weather[0].icon : null}` +
  ".png";
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={data.name}
        subheader={new Date().toLocaleTimeString()}
      />
      <CardMedia className='CardMedia'
        component="img"
        height="200"
        //weather gif from canva below
        image={URL_icon}
        title="Weather Icon"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          <div>Temp: {data.main.temp} °F </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More Information:</Typography>
          <Typography variant="body2" color="text.primary">
          <div>Humidity: {data.main.humidity} %</div>
          <div>Visibility: {data.visibility} </div>
          <div>Wind speed: {data.wind.speed} mph</div>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
 