import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


function CardItem({title, estimations, path, Icon}:any) {
    return (
      <Link className='links_card' to={path}>
        <Card  className="col-xs-6 col-md-2 m-4 text-center" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography color="primary" >
            <Icon/>
          </Typography>
          <Typography className="font-weight-bold card_font" color="text.primary" >
            {title}
          </Typography>
          <Typography className='card_font' variant="h5" component="div">
           {estimations}
          </Typography>
        </CardContent>
      </Card>
      </Link>
    )
}

export default CardItem