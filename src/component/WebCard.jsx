import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { CardActionArea } from '@material-ui/core'

const jumpTo = url => {
  if (url) window.open(url)
}

export default ({ url }) => (
  <Card sx={{ minWidth: 140, textAlign: 'center' }}>
    <CardActionArea onClick={() => jumpTo(url)}>
      <CardMedia
        component="img"
        height="100"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="iqiyi.com"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          IQIYI
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)
