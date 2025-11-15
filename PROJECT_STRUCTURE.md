/**
 * PROJECT STRUCTURE GUIDE
 * 
 * This file explains the purpose of each folder and file
 */

PROJECT LAYOUT:
===============

Gripzzy/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx           ← Navigation bar with mobile menu
│   │   ├── Hero.jsx             ← Welcome banner section
│   │   ├── About.jsx            ← Property description
│   │   ├── Amenities.jsx        ← Features grid with icons
│   │   ├── Gallery.jsx          ← Image showcase
│   │   ├── Testimonials.jsx     ← Guest reviews carousel
│   │   ├── Contact.jsx          ← Contact information
│   │   └── Footer.jsx           ← Footer with copyright
│   │
│   ├── config/
│   │   ├── constants.js         ← Site name, contact, navigation
│   │   ├── amenities.js         ← Features list with descriptions
│   │   ├── gallery.js           ← Gallery images and titles
│   │   └── testimonials.js      ← Guest reviews and ratings
│   │
│   ├── hooks/
│   │   ├── useMenu.js           ← Mobile menu state management
│   │   └── useSlider.js         ← Carousel navigation logic
│   │
│   ├── utils/                   ← Utility functions (future expansion)
│   │
│   ├── index.css                ← Global styles + Tailwind
│   ├── index.jsx                ← React entry point
│   └── App.jsx                  ← Main component
│
├── public/                       ← Static assets (empty, for future use)
│
├── index.html                   ← HTML template
├── package.json                 ← Dependencies list
├── vite.config.js              ← Build tool configuration
├── tailwind.config.js          ← Styling configuration
├── postcss.config.js           ← CSS processing config
│
├── README.md                   ← Installation & setup guide
├── DEPLOYMENT.md               ← Hosting & deployment guide
├── REFACTORING_SUMMARY.md      ← What changed & why
├── .env.example                ← Environment variables template
├── .gitignore                  ← Files to ignore in Git
│
└── dist/                        ← Built files (created after npm run build)


COMPONENT HIERARCHY:
====================

App.jsx (Main)
│
├── Header
│   └── Uses: useMenu hook
│
├── Hero
│   └── Static content
│
├── About
│   └── Static content + location details
│
├── Amenities
│   └── Data: AMENITIES from config/amenities.js
│
├── Gallery
│   └── Data: GALLERY_IMAGES from config/gallery.js
│
├── Testimonials
│   └── Data: TESTIMONIALS from config/testimonials.js
│   └── Uses: useSlider hook
│
├── Contact
│   └── Data: CONTACT_INFO from config/constants.js
│
└── Footer
    └── Static content


DATA FLOW:
==========

Config Files (src/config/)
         ↓
    Components
         ↓
    React Rendering
         ↓
    HTML Output


ADDING NEW FEATURES:
====================

1. New Section Component:
   - Create file in src/components/NewSection.jsx
   - Import in src/App.jsx
   - Add to App return statement

2. New Configuration:
   - Add to existing config file OR
   - Create new file in src/config/
   - Import in relevant component

3. New Reusable Logic:
   - Create file in src/hooks/useNewLogic.js
   - Export function
   - Import in component and use

4. New Utility Function:
   - Create file in src/utils/
   - Export function
   - Import where needed


FILE NAMING CONVENTIONS:
=======================

Components:        PascalCase.jsx    (Header.jsx)
Config files:      camelCase.js      (constants.js)
Custom hooks:      camelCase.js      (useMenu.js)
Utils:            camelCase.js      (helpers.js)
CSS/Styles:       index.css         (global styles)


QUICK EDIT GUIDE:
=================

Want to change?                    Edit file:
────────────────────────────────  ──────────────────────────────
Site name/tagline                src/config/constants.js
Contact information              src/config/constants.js
Navigation menu items            src/config/constants.js
Amenities list                   src/config/amenities.js
Gallery images                   src/config/gallery.js
Guest testimonials               src/config/testimonials.js
Header/Navigation style          src/components/Header.jsx
Hero banner image/text           src/components/Hero.jsx
Colors/Theme                     tailwind.config.js
Global styles                    src/index.css
Website title/meta tags          index.html


DEPLOYMENT:
===========

1. Development:      npm run dev
2. Production:       npm run build  →  dist/
3. Deploy:          See DEPLOYMENT.md
4. Monitor:         Check analytics


KEY CONCEPTS:
=============

✓ Separation of Concerns - Each file has one job
✓ DRY (Don't Repeat Yourself) - Reuse components
✓ Single Responsibility - Components focus on display
✓ Data-Driven - Change data, not code
✓ Scalable - Easy to add sections
✓ Maintainable - Clear structure
✓ Professional - Production-ready


COMMON TASKS:
=============

Update hero banner image:
  → Edit Hero.jsx, change backgroundImage URL

Add new amenity:
  → Add object to AMENITIES array in config/amenities.js

Change color theme:
  → Edit tailwind.config.js theme section

Add navigation item:
  → Add to NAVIGATION_ITEMS in config/constants.js

Update testimonial:
  → Edit TESTIMONIALS in config/testimonials.js

Change footer year:
  → Already automatic! (uses new Date().getFullYear())


FUTURE EXPANSION:
=================

Ready for:
✓ Blog section
✓ Booking system
✓ User authentication
✓ Payment integration
✓ Admin dashboard
✓ Email notifications
✓ Database connection
✓ API integration
✓ Multi-language support
✓ Dark mode


SUPPORT:
========

Need help?
- Read README.md for general info
- Check DEPLOYMENT.md for hosting questions
- Review component comments for code explanation
- Check config files for data structure

Happy coding! 🚀
