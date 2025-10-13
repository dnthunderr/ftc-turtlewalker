import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

export default function Awards(){
  return (
    <Paper id="awards" elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Year-long Awards & Achievements
      </Typography>
      <Typography variant="body1" paragraph>
        Highlights from recent seasons and notable awards.
      </Typography>

      <List>
        <ListItem><ListItemText primary="Season 2024: County Championship Finalists" /></ListItem>
        <ListItem><ListItemText primary="Season 2023: Engineering Design Award" /></ListItem>
        <ListItem><ListItemText primary="Season 2022: Community Impact Award" /></ListItem>
      </List>
    </Paper>
  )
}
