import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyCard = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">Card Title</Typography>
      <Typography variant="body2">Some text inside the card.</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default MyCard;