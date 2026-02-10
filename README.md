# ExperimentalLambda Website

A professional React-based corporate website for ExperimentalLambda - Business Automation Solutions.

## Features

- ✨ Modern React 18 with React Router
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎨 Professional business-friendly UI
- 🚀 Fast and optimized

## Pages

- **Home**: Hero section, problems, solutions, how it works, results, testimonials
- **Services**: Detailed service offerings
- **About**: Company information and values
- **Contact**: Contact form and information

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technology Stack

- React 18
- React Router DOM 6
- CSS3 with CSS Variables
- Modern JavaScript (ES6+)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Problems.js
│   ├── Solutions.js
│   ├── HowItWorks.js
│   ├── Results.js
│   ├── Trust.js
│   ├── ServicesOverview.js
│   └── FinalCTA.js
├── pages/              # Page components
│   ├── Home.js
│   ├── Services.js
│   ├── About.js
│   └── Contact.js
├── App.js              # Main app component
├── App.css             # Main styles
├── index.js            # Entry point
└── index.css           # Global styles
```

## Customization

### Colors

Edit CSS variables in `src\App.css`:

```css
:root {
  --primary-color: #14b8a6;
  --secondary-color: #10b981;
  /* ... other colors */
}
```

### Content

- Update text content in component files under `src/components/` and `src/pages/`
- Modify testimonials in `src/components/Trust.js`
- Update services in `src/pages/Services.js`

## License

Copyright © 2026 ExperimentalLambda. All rights reserved.
