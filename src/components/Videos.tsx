import React from 'react'
import { Paper, Typography, Grid } from '@mui/material'

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Season Highlights' },
  { id: '9bZkp7q19f0', title: 'Match Replay' }
]

export default function Videos(){
  return (
    <Paper id="videos" elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        YouTube Videos
      </Typography>
      <Typography variant="body1" paragraph>Watch our season highlights and matches.</Typography>

      <Grid container spacing={2}>
        {videos.map(v => (
          <Grid item xs={12} md={6} key={v.id}>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                frameBorder={0}
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>{v.title}</Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        To add more videos, edit <code>src/components/Videos.tsx</code> and replace the IDs.
      </Typography>
    </Paper>
  )
}
