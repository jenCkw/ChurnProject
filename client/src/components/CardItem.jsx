import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CardItem({title, number}) {
    return (
        <Card className="col-xs-6 col-md-2 m-4 text-center" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3" sx={{ fontSize: 14 }} color="text.secondary" >
            {title}
          </Typography>
          <Typography variant="h5" component="div">
           {number}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default CardItem
