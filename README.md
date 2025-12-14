# Turtle Walkers - FTC Team Website

A React-based website for the Turtle Walkers FTC team, built with Vite, TypeScript, and Material-UI (MUI). It includes sections for team details, awards, outreach, YouTube videos, and a contact form.

## Features

- Responsive design with Material-UI components
- Team member profiles with photos and roles
- Awards and achievements from FTC events
- Community outreach information
- Embedded YouTube videos
- Contact form (mailto-based)
- Light/dark theme toggle
- Deployed to GitHub Pages

## Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dnthunderr/ftc-turtlewalker.git
   cd ftc-turtlewalker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the development server:

```bash
npm run dev
```

This will start the Vite development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Build

To build the project for production:

```bash
npm run build
```

This creates a `dist` folder with the optimized build files.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

- Pushes to the `main` branch trigger a build and deploy.
- The site is available at: [https://dnthunderr.github.io/ftc-turtlewalker](https://dnthunderr.github.io/ftc-turtlewalker)

## Project Structure

- `src/` - Source code
  - `components/` - React components (TeamDetails, Awards, etc.)
  - `muiTheme.tsx` - MUI theme configuration
  - `main.tsx` - App entry point
  - `App.tsx` - Main app component
- `public/` - Static assets
- `vite.config.ts` - Vite configuration
- `.github/workflows/` - GitHub Actions workflows

## Technologies Used

- React 18
- TypeScript
- Vite
- Material-UI (MUI)
- Emotion (for MUI styling)

## Customization

- Update team details in `src/components/TeamDetails.tsx`
- Modify awards in `src/components/Awards.tsx`
- Change theme colors in `src/muiTheme.tsx`
- Add new components or pages as needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is open source. Feel free to use and modify as needed.
