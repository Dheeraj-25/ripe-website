# Rural Development Organization Website

A comprehensive, responsive front-end website for a rural development organization, built with React, Vite, Tailwind CSS, and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-directory>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:8080`

## 📁 Project Structure

```
├── public/
│   ├── assets/
│   │   └── images/          # All image placeholders
│   │       └── README.md    # Image replacement guide
│   └── data/                # JSON data files
│       ├── programmes.json
│       ├── events.json
│       ├── stats.json
│       ├── gallery.json
│       └── testimonials.json
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroCarousel.tsx
│   │   ├── StatsCounter.tsx
│   │   ├── ProgrammeCard.tsx
│   │   └── EventCard.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── Programmes.tsx
│   │   ├── ProgrammeDetail.tsx
│   │   ├── Events.tsx
│   │   ├── EventDetail.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   ├── KnowledgeHub.tsx
│   │   ├── Partners.tsx
│   │   ├── WhoWeAre.tsx
│   │   └── Governance.tsx
│   ├── index.css           # Global styles & design tokens
│   └── App.tsx             # Main app & routing
├── tailwind.config.ts      # Tailwind configuration
└── index.html              # HTML entry point
```

## 🎨 Customization Guide

### 1. Replace Images

All images are located in `public/assets/images/`. See `public/assets/images/README.md` for detailed mapping of which image goes where.

**Quick reference:**
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` - Hero carousel images (1920x800px)
- `programme-*.jpg` - Programme card images (800x600px)
- `event-*.jpg` - Event thumbnail images (800x500px)
- `gallery-*.jpg` - Gallery images (1200x800px)
- `testimonial-*.jpg` - Testimonial headshots (400x400px)
- `logo.png` - Organization logo

### 2. Update Content

Edit JSON files in `public/data/`:

**programmes.json** - Programme information
```json
{
  "id": "programme-id",
  "title": "Programme Title",
  "category": "Category Name",
  "short_desc": "Brief description",
  "long_desc": "Detailed description",
  "image": "programme-image.jpg",
  "impact": { "metric": "value" },
  "read_more_url": "/programmes/programme-id"
}
```

**events.json** - Events and news
```json
{
  "id": "event-id",
  "title": "Event Title",
  "date": "2025-03-15",
  "summary": "Brief summary",
  "content": "Full content",
  "image": "event-image.jpg",
  "location": "Location",
  "category": "Category"
}
```

**stats.json** - Impact statistics
```json
{
  "states": 15,
  "districts": 85,
  "villages": 5200,
  "million_families": 2.5
}
```

### 3. Change Brand Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary: 95 45% 25%;        /* Forest green */
  --secondary: 35 45% 60%;      /* Earth orange */
  --accent: 35 65% 55%;         /* Warm accent */
  --background: 40 20% 97%;     /* Cream background */
  /* Add your custom colors in HSL format */
}
```

### 4. Update Typography

To change fonts, edit `index.html` to include your preferred Google Font:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

### 5. Modify Contact Information

Update contact details in:
- `src/components/Header.tsx` (top contact bar)
- `src/components/Footer.tsx` (footer contact section)
- `src/pages/Contact.tsx` (contact page)

Replace:
- Phone: `+91-123-456-7890`
- Email: `info@yourorganization.org`
- Address: Update in Footer component

## 🎯 Key Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Accessible (ARIA labels, semantic HTML, keyboard navigation)
- ✅ SEO optimized (meta tags, semantic structure)
- ✅ Performance optimized (lazy loading, code splitting)
- ✅ Animated counters and smooth transitions
- ✅ Image lightbox gallery
- ✅ Multi-level navigation with mega menu
- ✅ JSON-driven content (easy to update)
- ✅ Contact form with validation

## 📱 Pages Included

1. **Home** - Hero carousel, stats, programmes, events
2. **Programmes** - Filterable programme listing
3. **Programme Detail** - Individual programme pages with impact metrics
4. **Events** - Events and news listing
5. **Event Detail** - Individual event pages
6. **Gallery** - Photo gallery with lightbox and category filter
7. **Contact** - Contact form and donation CTA
8. **Knowledge Hub** - Publications and research resources
9. **Partners** - Partner organizations showcase
10. **Who We Are** - About, mission, vision, history
11. **Governance** - Board members and governance structure

## 🔧 Technical Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Form Handling:** React Hook Form + Zod (validation ready)

## 📦 Production Deployment

```bash
# Build optimized production bundle
npm run build

# The build output will be in the `dist` folder
# Deploy the contents of `dist` to your web server
```

### Deployment Options:
- **Netlify/Vercel:** Connect your GitHub repo for automatic deployments
- **Traditional hosting:** Upload the `dist` folder contents via FTP
- **CDN:** Use services like Cloudflare Pages or AWS S3 + CloudFront

## 🔒 Environment Variables

For production, you may want to add environment variables for:
- API endpoints (if connecting to a CMS)
- Analytics tracking IDs
- Form submission endpoints

Create `.env` file:
```
VITE_API_URL=https://your-api.com
VITE_ANALYTICS_ID=your-tracking-id
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🎨 Design System

The website uses a comprehensive design system defined in `src/index.css` and `tailwind.config.ts`:

- **Colors:** Semantic tokens for primary, secondary, accent, muted, etc.
- **Shadows:** Card, hover, and elevated shadow tokens
- **Animations:** Fade-in, slide-up, scale-in animations
- **Gradients:** Hero and overlay gradient tokens
- **Transitions:** Smooth transition utilities

All components use these tokens for consistent styling.

## 📝 Content Management

### Option 1: Direct JSON Editing
Edit JSON files in `public/data/` and commit changes to your repository.

### Option 2: Headless CMS Integration
The architecture supports easy integration with headless CMS platforms:
- **Contentful:** Create content types matching the JSON structure
- **Strapi:** Self-hosted, open-source CMS
- **Sanity:** Real-time collaboration CMS
- **NetlifyCMS:** Git-based CMS

Replace the `fetch("/data/...")` calls in page components with API calls to your CMS.

## 🧪 Testing

To add tests (optional):
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

[Specify your license here]

## 🆘 Support

For questions or issues:
- Create an issue in the repository
- Contact: info@yourorganization.org

---

**Built with ❤️ for rural development organizations**
