# Hartmoxie Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for About, Portfolio, Skills, and Contact
- Contact form for easy communication
- Social media integration
- SEO friendly

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Git

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hartmoxie.github.io.git
cd hartmoxie.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at http://localhost:3000

## Customization

1. Update the content in the components:
   - Edit `src/components/About.tsx` to update your personal information
   - Modify `src/components/Portfolio.tsx` to showcase your projects
   - Update contact information in `src/components/Contact.tsx`

2. Customize the styling:
   - Colors and theme can be modified in `tailwind.config.js`
   - Component-specific styles are in their respective files

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json`:
```json
{
  "homepage": "https://hartmoxie.com"
}
```

2. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

3. Add deployment scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy the site:
```bash
npm run deploy
```

5. Configure your domain:
   - Go to your repository settings
   - Under "GitHub Pages", set your custom domain
   - Add a CNAME file to the `public` directory with your domain

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [GitHub Pages](https://pages.github.com/) - Hosting

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
