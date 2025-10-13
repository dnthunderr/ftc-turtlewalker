import React from 'react'
import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'

type Person = {
  name: string
  role?: string
  photo?: string
}

const teamMembers: Person[] = [
  { name: 'Nikhil Mantarla', role: 'Student Captain', photo: 'https://i.pravatar.cc/80?img=3' },
  { name: 'Ashay Sarda', role: 'Lead Programmer', photo: 'https://i.pravatar.cc/80?img=3' },
  { name: 'Siddharth Vasudeva', role: 'Lead Hardware', photo: 'https://i.pravatar.cc/80?img=7' },
  { name: 'Anay Tiwari', role: 'Lead Community Outreach / Programmer', photo: 'https://i.pravatar.cc/80?img=9' },
  { name: 'Aryan Nannaware', role: 'Programmer', photo: 'https://i.pravatar.cc/80?img=11' },
]

const coaches: Person[] = [
  { name: 'Anand Sarda', role: 'Head Coach', photo: 'https://i.pravatar.cc/80?img=14' },
  { name: 'Vinay Mantrala', role: 'Head Coach', photo: 'https://i.pravatar.cc/80?img=14' },
]

const sponsors: Person[] = [
  { name: 'Acme Robotics', role: 'Season Sponsor', photo: 'https://via.placeholder.com/80x80.png?text=Acme' },
  { name: 'GreenTech Inc.', role: 'Community Sponsor', photo: 'https://via.placeholder.com/80x80.png?text=GT' },
]

function PersonList({ title, people }: { title: string; people: Person[] }){
  return (
    <Box>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <List>
        {people.map((p) => (
          <ListItem key={p.name}>
            <ListItemAvatar>
              <Avatar alt={p.name} src={p.photo}>{!p.photo && p.name.split(' ').map(n => n[0]).join('')}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={p.name} secondary={p.role} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default function TeamDetails(){
  return (
    <Paper id="team" elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Team Details
      </Typography>

      <Typography variant="body1"><strong>Name:</strong> Turtle Walkers (FTC)</Typography>
      <Typography variant="body1"><strong>Location:</strong> [Your City, State]</Typography>
      <Typography variant="body1"><strong>Founded:</strong> [Year]</Typography>
      <Typography variant="body1" paragraph>
        <strong>Team Mission:</strong> Build robots, learn STEM, and serve our community through outreach.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <PersonList title="Team Members" people={teamMembers} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PersonList title="Coaches" people={coaches} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PersonList title="Sponsors" people={sponsors} />
        </Grid>
      </Grid>
    </Paper>
  )
}
