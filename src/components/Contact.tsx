import React, { useState } from 'react'
import { Paper, Typography, TextField, Button, Box, Link } from '@mui/material'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const teamEmail = 'turtlewalkers@example.com'

  function submit(e: React.FormEvent){
    e.preventDefault()
    if(!name || !email || !message){
      alert('Please complete all fields.')
      return
    }

    const subject = encodeURIComponent(`Website contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${teamEmail}?subject=${subject}&body=${body}`
  }

  return (
    <Paper id="contact" elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>Contact the Team</Typography>
      <Typography variant="body1" paragraph>
        If you'd like to get in touch, email us or use the contact form below.
      </Typography>
      <Typography variant="body2" paragraph>
        Email: <Link href={`mailto:${teamEmail}`}>{teamEmail}</Link>
      </Typography>

      <Box component="form" onSubmit={submit} sx={{ display: 'grid', gap: 2 }}>
        <TextField label="Name" value={name} onChange={e => setName(e.target.value)} required />
        <TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <TextField label="Message" multiline rows={5} value={message} onChange={e => setMessage(e.target.value)} required />
        <Box>
          <Button type="submit" variant="contained" color="primary">Send Email</Button>
        </Box>
      </Box>

      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        The form opens your email client with a pre-filled message (uses mailto).
      </Typography>
    </Paper>
  )
}
