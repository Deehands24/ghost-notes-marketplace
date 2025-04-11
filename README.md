# Ghost Notes - Hip Hop Beat Market

A fullstack ecommerce application for selling hip hop beats.

## Project Structure

The project is organized with the following structure:

```
ghost-notes/
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
├── public/                # Static files
├── prisma/                # Database schema and migrations
│   └── schema.prisma      # Prisma database model definitions
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
    ├── styles/            # CSS styles
    └── App.js             # Main React component
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Setup the database:

```bash
npx prisma migrate dev
```

4. Start the development servers:

```bash
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

## Features

- User authentication
- Beat marketplace
- Beat upload and management
- Purchase and transaction tracking

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: SQLite (development), PostgreSQL (production)
- **Authentication**: JWT 