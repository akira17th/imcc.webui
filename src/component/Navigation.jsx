import React from 'react'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const Item = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body3,
  padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
  boxShadow: 'none'
}))

export const Navigation = React.memo(() => {
  console.log(2)
  return (
    <Container sx={{ height: '100px', padding: '24px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <Item sx={{ textAlign: 'left' }}>
              {/* <Button variant="outlined">BLOG</Button> */}
            </Item>
          </Grid>
          <Grid item xs={8} md={8}>
            <Item sx={{ textAlign: 'right' }}>
              <Button variant="outlined" color="secondary" sx={{ margin: '0 5px' }}>keep</Button>
              <Button variant="outlined" color="secondary" sx={{ margin: '0 5px' }}>blog</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})
