import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import getAppTheme from './muiTheme'

const container = document.getElementById('root')!
const root = createRoot(container)

function Root(){
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const theme = getAppTheme(mode)
  function toggleMode(){
    setMode(m => (m === 'light' ? 'dark' : 'light'))
  }

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App mode={mode} toggleMode={toggleMode} />
      </ThemeProvider>
    </React.StrictMode>
  )
}

root.render(<Root />)
