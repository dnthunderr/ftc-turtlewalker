import React from 'react'
import TeamDetails from './components/TeamDetails'
import Awards from './components/Awards'
import Outreach from './components/Outreach'
import Videos from './components/Videos'
import Contact from './components/Contact'
import { AppBar, Toolbar, IconButton, Typography, Container, Button } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

type AppProps = {
  mode: 'light' | 'dark'
  toggleMode: () => void
}

export default function App({ mode, toggleMode }: AppProps) {
  return (
    <div className="app-root">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Turtle Walkers</Typography>
          <nav>
            <Button href="#team" color="inherit">Team</Button>
            <Button href="#awards" color="inherit">Awards</Button>
            <Button href="#outreach" color="inherit">Outreach</Button>
            <Button href="#videos" color="inherit">Videos</Button>
            <Button href="#contact" color="inherit">Contact</Button>
          </nav>
          <IconButton sx={{ ml: 1 }} color="inherit" onClick={toggleMode} aria-label="toggle theme">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }}>
        <TeamDetails />
        <Awards />
        <Outreach />
        <Videos />
        <Contact />
      </Container>

      <footer className="site-footer">
        <Container sx={{ py: 3 }}>
          <Typography variant="body2" align="center">&copy; {new Date().getFullYear()} Turtle Walkers FTC Team</Typography>
        </Container>
      </footer>
    </div>
  )
}
