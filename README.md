# Gripzy Serene Abode

A professional, responsive website for a homestay property in Puthenthope, Thiruvananthapuram, Kerala.

## Features

- ✨ Modern, responsive design
- 📱 Mobile-first approach
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast performance with Vite
- 🔄 Reusable React components
- 📊 Organized project structure
- 🎯 SEO-friendly HTML

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Amenities.jsx
│   ├── Gallery.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── config/           # Configuration and data files
│   ├── constants.js
│   ├── amenities.js
│   ├── gallery.js
│   └── testimonials.js
├── hooks/            # Custom React hooks
│   ├── useMenu.js
│   └── useSlider.js
├── utils/            # Utility functions
├── index.css         # Global styles
├── index.jsx         # App entry point
└── App.jsx          # Main component

public/              # Static assets
```

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will open at `http://localhost:3000`

## Configuration

All site configuration is centralized in `src/config/constants.js`:

- Site name and tagline
- Contact information
- Navigation items
- Location details
- Color scheme

Update amenities in `src/config/amenities.js`, gallery images in `src/config/gallery.js`, and testimonials in `src/config/testimonials.js`.

## Components

Each component is self-contained and handles its own:
- Layout and styling
- Data fetching (via config files)
- State management
- Responsiveness

### Header
Sticky navigation with mobile menu toggle.

### Hero
Welcome banner with call-to-action.

### About
Property description with location details.

### Amenities
Grid of features and amenities with icons.

### Gallery
Image showcase of the property.

### Testimonials
Guest reviews carousel with ratings.

### Contact
Contact information and booking details.

## Customization

### Update Contact Information
Edit `src/config/constants.js`:
```javascript
export const CONTACT_INFO = {
  ownerName: 'Your Name',
  email: 'your-email@example.com',
  phone: '+91 XXXXXXXXXX',
  location: 'Your Location',
};
```

### Add/Remove Amenities
Edit `src/config/amenities.js` and import the appropriate icon from lucide-react.

### Update Gallery Images
Edit `src/config/gallery.js` and replace image URLs with your actual images.

### Modify Testimonials
Edit `src/config/testimonials.js` with real guest reviews.

## Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Hosting
Recommended platforms:
- **Vercel** - Best for React/Vite projects (https://vercel.com)
- **Netlify** - Easy deployment (https://netlify.com)
- **GitHub Pages** - Free hosting
- **Traditional hosting** - Upload `dist/` folder via FTP

### Environment Setup
No environment variables required for basic setup.

## Performance Optimization

- ✅ Lazy loading for images
- ✅ CSS-in-JS for optimized bundle
- ✅ Code splitting via Vite
- ✅ Responsive images for different screen sizes
- ✅ Smooth scrolling behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library

## License

MIT License - feel free to use this for your project.

## Author

Created for Gripzy Serene Abode by Griffith Joseph Ronald.

---

For questions or updates, contact: your-email@example.com | +91 96330 99347
