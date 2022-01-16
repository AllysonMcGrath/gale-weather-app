import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import weatherData from 'src/weather.json';


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
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name}
        subheader={new Date().toLocaleTimeString()}
      />
      <CardMedia className='CardMedia'
        component="img"
        height="194"
        //weather gif from canva below
        image={URL_icon}
        alt="Weather GIF"
        {...props.image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <div>Temp: {data.main.temp} °F </div>
          <div>Humidity: {data.main.humidity} RH</div>
          <div>Visibility: {data.visibility} </div>
          <div>Wind speed: {data.wind.speed} m/s</div>
        </Typography>
        </CardContent>
    </Card>
  );
}
export default WeatherCard;