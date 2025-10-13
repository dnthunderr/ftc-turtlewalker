import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

export default function Outreach(){
  return (
    <Paper id="outreach" elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Community Outreach
      </Typography>
      <Typography variant="body1" paragraph>
        We engage the community through demos, workshops, and school visits. Examples:
      </Typography>

      <List>
        <ListItem><ListItemText primary="Robotics workshops at local elementary schools" /></ListItem>
        <ListItem><ListItemText primary="Summer STEM camps" /></ListItem>
        <ListItem><ListItemText primary="Charity STEM nights and community robot demos" /></ListItem>
      </List>

      <Typography variant="body2" sx={{ mt: 1 }}>
        Want us to visit your school or event? Use the contact form below.
      </Typography>
    </Paper>
  )
}
