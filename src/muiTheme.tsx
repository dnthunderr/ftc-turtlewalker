import { createTheme } from '@mui/material/styles'

// Return a theme configured for the given mode ('light' | 'dark')
export default function getAppTheme(mode: 'light' | 'dark'){
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#0ae567' : '#66f59a',
        contrastText: '#ffffff'
      },
      secondary: {
        main: mode === 'light' ? '#dc004e' : '#f48fb1',
      },
    },
    typography: {
      fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'text',
          size: 'medium',
        },
        styleOverrides: {
          root: {
            fontWeight: 600,
            marginLeft: 12,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: '18px',
            marginBottom: '18px',
            borderRadius: 8,
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: 'md',
        },
      },
    },
  })
}
