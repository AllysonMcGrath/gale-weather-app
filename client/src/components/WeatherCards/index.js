import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import weatherData from 'src/weather.json';


function WeatherCard(props) {
  const [weatherList, setWeatherList] = useState(weatherData);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Today's Weather"
        subheader="Actual Date:"
      /> {props.date}
      <CardMedia
        component="img"
        height="194"
        //weather gif from canva below
        image="image file"
        alt="Weather GIF"
        {...props.image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <ul>
          <li>
            <strong>Temperature:</strong> {props.temp}
          </li>
          <li>
            <strong>Humidity:</strong> {props.humidity}
          </li>
          <li>
            <strong>UVI:</strong> {props.uvi}
          </li>
          <li>
            <strong>Feels Like:</strong> {props.feelsLike}
          </li>
        </ul>
        </Typography>
        </CardContent>
    </Card>
  );
}
export default WeatherCard;