import React from 'react'
import Grid from '@material-ui/core/Grid'
import WebCard from '../component/WebCard'

export default function Home() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={12}>
          <Grid item>
            <WebCard />
          </Grid>
          <Grid item>
            <WebCard />
          </Grid>
          <Grid item>
            <WebCard />
          </Grid>
          <Grid item>
            <WebCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
