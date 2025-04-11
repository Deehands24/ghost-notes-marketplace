#!/bin/bash

# Setup Integration Script for Ghost Notes
# This script helps set up the directory structure for integrating the three projects

# Create directory structure
echo "Creating directory structure..."
mkdir -p src/assets/home src/assets/upload src/assets/product
mkdir -p src/components/home src/components/upload src/components/product
mkdir -p src/styles

# Install dependencies
echo "Installing dependencies..."
npm install react-router-dom tailwindcss postcss autoprefixer

# Set up Tailwind if not already done
if [ ! -f tailwind.config.js ]; then
  echo "Setting up Tailwind CSS..."
  npx tailwindcss init -p
fi

# Remind about copying components
echo "
=================================================
Directory structure created! Next steps:

1. Copy assets from each project to:
   - src/assets/home/
   - src/assets/upload/
   - src/assets/product/

2. Copy components from each project to:
   - src/components/home/
   - src/components/upload/
   - src/components/product/

3. Update the page components in src/pages/

For detailed instructions, see INTEGRATION_GUIDE.md
=================================================
"

# Make the script executable
chmod +x setup-integration.sh 