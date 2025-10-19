#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create a new branch for deployment (if it doesn't exist)
echo "Setting up deployment branch..."
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages

# Copy build files to root
echo "Copying build files..."
cp -r dist/* .

# Add all files
git add .

# Commit the changes
echo "Committing deployment files..."
git commit -m "Deploy portfolio to GitHub Pages"

# Push to GitHub Pages branch
echo "Pushing to GitHub Pages..."
git push origin gh-pages

# Switch back to main branch
git checkout main

echo "Deployment complete! Your portfolio should be available at:"
echo "https://shivab04.github.io/Portfolio/"
