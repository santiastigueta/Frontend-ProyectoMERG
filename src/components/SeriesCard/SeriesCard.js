import { getAllSeries } from '../../graphql/resolvers/series.resolver'; 
import { useQuery } from '@apollo/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function DisplayAllSeries() {
  const { loading, error, data } = useQuery(getAllSeries);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  console.log('este es el data: ',data)
  return data.getAllSeries.map(({ _id, name, author, rating, releaseDate, image }) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="imagen-serie"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Esta serie fue creada por {author} en el año {releaseDate}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              imdb score: {rating}
            </Button>
          </CardActions>
          <Button variant="contained" >
            Ver mas detalles
          </Button>
        </Card>
  ));
}

export default DisplayAllSeries;