# Katalyst LABS - React Version

This is the React version of the Katalyst LABS website, built with Vite and React.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

Build the production-ready site:
```bash
npm run build
```

The built files will be in the `dist/` directory.

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
katalyst/
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/            # Custom React hooks
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # React entry point
│   └── index.css         # Styles (migrated from styles.css)
├── index-react.html       # HTML template for React
├── vite.config.js        # Vite configuration
└── package.json
```

## 🎨 Features

- **React Components**: Modular, reusable components
- **React Hooks**: Modern React patterns for state and effects
- **Smooth Animations**: Intersection Observer for scroll animations
- **Form Handling**: React state management for contact form
- **Responsive Design**: All original CSS styles preserved
- **Fast Development**: Vite for instant hot module replacement

## 🔄 Migrated from Static HTML

The original static HTML/CSS/JS site has been fully converted to React:
- All HTML sections → React components
- JavaScript → React hooks (useState, useEffect)
- CSS styles → Preserved as-is in `src/index.css`
- Form handling → React form state management
- Navigation → React event handlers

## 🚀 Deployment

After building (`npm run build`), deploy the `dist/` folder to your hosting provider.

### Original Static Site

The original static HTML site is still available in:
- `index.html` (original)
- `styles.css` (original)
- `script.js` (original)

## 📝 Next Steps

- [ ] Add BounceCards component from React Bits
- [ ] Consider adding React Router if multi-page navigation is needed
- [ ] Add unit tests if needed
- [ ] Update deployment workflow for React build

