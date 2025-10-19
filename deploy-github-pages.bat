@echo off
echo Building portfolio for GitHub Pages...
npm run build

echo Copying built files to docs folder...
if exist docs rmdir /s /q docs
mkdir docs
xcopy /e /i dist docs

echo Committing and pushing to GitHub...
git add docs/
git commit -m "Update portfolio deployment"
git push origin main

echo Deployment complete! Your portfolio will be live at:
echo https://shivab04.github.io/Portfolio/
pause
