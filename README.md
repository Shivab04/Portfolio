# Shiva Billakanti - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features cinematic entrance animations and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark theme
- **Cinematic Animations**: Smooth entrance animations using GSAP
- **Responsive**: Fully responsive design for all devices
- **TypeScript**: Type-safe development
- **Fast Loading**: Optimized with Vite for lightning-fast performance
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Build Tool**: Vite
- **Icons**: Custom SVG icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3005`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
portfolio/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Experience.tsx  # Work experience
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── public/             # Static assets
├── App.tsx            # Main app component
├── index.tsx          # Entry point
└── vite.config.ts     # Vite configuration
```

## 🎨 Customization

### Personal Information
Update your personal information in `constants.ts`:
- Name, title, and description
- Contact information
- Social media links
- Skills and experience

### Styling
- Main styles: `index.css`
- Component styles: Tailwind CSS classes
- Animations: GSAP timeline configurations

### Content
- About section: `components/About.tsx`
- Experience: `components/Experience.tsx`
- Projects: `components/Projects.tsx`
- Skills: `components/Skills.tsx`

## 🚀 Deployment

This portfolio can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload the `dist` folder

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Shiva Billakanti**
<!-- Rebuild trigger: 11/09/2025 11:46:23 -->