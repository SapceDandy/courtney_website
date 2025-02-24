# Mentor & Pageant Expert Website

A sophisticated and visually appealing website for a company specializing in mentorship, pageant training, and speaking engagements. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and elegant design
- 📱 Fully responsive layout
- 🚀 Optimized performance
- ✨ Smooth animations and transitions
- 🎯 SEO optimized
- ♿ Accessibility compliant

### Key Pages

- **Home**: Engaging hero section, services overview, testimonials, and featured media appearances
- **About**: Company story, interactive timeline, team profiles, and mission & values
- **Speaking**: Event gallery, testimonials, speaker kit, and event calendar
- **Training**: Success stories, program details, video testimonials, and FAQ
- **Contact**: Interactive form, map integration, and social media feed

## Tech Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Fonts**: Playfair Display (serif) and Lato (sans-serif)

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mentor-pageant-expert.git
   ```

2. Navigate to the project directory:
   ```bash
   cd mentor-pageant-expert
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   │   ├── layout/    # Layout components
│   │   ├── ui/        # UI components
│   │   └── sections/  # Page sections
│   ├── pages/         # Next.js pages
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
├── public/            # Static assets
│   ├── images/        # Image assets
│   └── videos/        # Video assets
└── package.json       # Project dependencies
```

## Customization

### Colors

The main colors can be customized in `tailwind.config.js`:

```js
colors: {
  primary: '#003366',    // Deep blue
  secondary: '#D4AF37',  // Gold
  accent: '#800000',     // Maroon
}
```

### Typography

Font families can be modified in `tailwind.config.js`:

```js
fontFamily: {
  serif: ['Playfair Display', 'serif'],
  sans: ['Lato', 'sans-serif'],
}
```

## Deployment

The website can be deployed to various platforms. Here are some popular options:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure your environment variables
4. Deploy

### Other Platforms

- Netlify
- AWS Amplify
- Digital Ocean App Platform

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from various award-winning websites
- Icons from Heroicons
- Fonts from Google Fonts
- Special thanks to the Next.js and Tailwind CSS communities

## Support

For support, email support@mpexpert.com or join our Slack channel.
