# Manual Deployment Guide

If GitHub Actions continue to have issues, you can deploy manually:

## Option 1: Build and Deploy Manually

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **The built files will be in the `dist` folder**

3. **Deploy to GitHub Pages:**
   - Go to your repository settings
   - Navigate to Pages section
   - Change source to "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Save

4. **Create a `docs` folder and copy built files:**
   ```bash
   mkdir docs
   cp -r dist/* docs/
   ```

5. **Commit and push:**
   ```bash
   git add docs/
   git commit -m "Add built files for GitHub Pages"
   git push origin main
   ```

## Option 2: Use Vercel (Recommended Alternative)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your repository
4. Deploy automatically

## Option 3: Use Netlify

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Deploy with one click
