# Ghost Notes - Hip Hop Beat Marketplace

A modern React-based ecommerce platform for hip-hop beat producers and consumers featuring a sleek UI built with Tailwind CSS.

![Ghost Notes](https://via.placeholder.com/800x400?text=Ghost+Notes+Marketplace)

## 🚀 Features

- **Beat Marketplace**: Browse and purchase high-quality hip-hop beats
- **Producer Upload Portal**: Allow beat producers to upload and sell their beats
- **Product Showcase**: Detailed product pages for showcasing beats with audio preview
- **Modern UI**: Sleek, responsive design built with Tailwind CSS
- **Authentication**: User authentication and account management
- **Shopping Cart**: Seamless shopping experience with cart functionality

## 🛠️ Technology Stack

- React 19.1.0
- React Router 6.30.0
- Tailwind CSS 3.4.17
- Supabase (Backend-as-a-Service)
- Modern JavaScript (ES6+)
- Responsive Design

## 📋 Pages

- **Home/Beat Store**: Main landing page showcasing featured beats and artists
- **Upload Portal**: Dashboard for producers to upload and manage their beats
- **Product Details**: Detailed view of individual beats with preview and purchase options
- **Authentication**: Sign in/sign up pages
- **User Profile**: User account management

## 🏗️ Project Structure

```
ghost-notes/
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
├── public/                # Static files
├── server/                # Backend Express server
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Custom middleware
│   ├── routes/            # API route definitions
│   └── server.js          # Server entry point
└── src/                   # Frontend React application
    ├── assets/            # Images, fonts, etc.
    ├── components/        # Reusable React components
    ├── pages/             # Page components
    ├── services/          # API integration services
    │   └── supabase.js    # Supabase client and database functions
    ├── styles/            # CSS styles
    └── App.js             # Main React component
```

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Deehands24/ghost-notes-marketplace.git

# Navigate to project directory
cd ghost-notes-marketplace

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

This will concurrently run:
- Frontend React app on http://localhost:3000
- Backend API server on http://localhost:5000

## Available Scripts

- `npm run dev` - Run both frontend and backend in development mode
- `npm run start` - Run only the frontend
- `npm run server` - Run only the backend
- `npm run build` - Build the frontend for production

## 📷 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Upload Portal
![Upload Portal](https://via.placeholder.com/800x400?text=Upload+Portal)

### Product Page
![Product Page](https://via.placeholder.com/800x400?text=Product+Page)

## ✨ Future Enhancements

- Audio waveform visualization
- Producer profiles and ratings
- Advanced search and filtering
- Payment gateway integration
- Beat licensing options
- Social sharing functionality

## 👨‍💻 Developed By

- Hands - [GitHub](https://github.com/Deehands24) - [Upwork](https://www.upwork.com/your-profile-link)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
