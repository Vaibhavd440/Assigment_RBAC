# Role-Based Access Control (RBAC) System

A modern, secure Role-Based Access Control system built with React, TypeScript, and Tailwind CSS. This application demonstrates best practices in authentication, authorization, and user management.

## Features

### Authentication
- Secure user registration and login
- JWT-based authentication
- Persistent sessions
- Protected routes
- Google OAuth integration

### Authorization
- Role-based access control (RBAC)
- Three user roles: Admin, Moderator, and User
- Role-specific dashboards and features
- Protected routes with role verification

### Security
- JWT token management
- Secure password handling
- Protected API endpoints
- Role-based route protection
- Type-safe implementation

### User Interface
- Modern, responsive design
- Role-specific dashboard views
- Clean and intuitive user experience
- Real-time feedback and error handling

## Deployed Link

The RBAC system is deployed and accessible at the following URL:  
👉 [Live Demo](https://roaring-pixie-3e402d.netlify.app/) 

### Test Accounts

Use these pre-configured accounts to test different role permissions:

#### Admin Account
- **Email**: admin@example.com  
- **Password**: Any Password of your choice
- **Access**: Full system access including user management, system settings, and role management

#### User Account
- Register a new account at `/register`  
- All new registrations are assigned the 'user' role by default  
- **Access**: Basic user features and profile management

#### Google OAuth
- Click the "Sign in with Google" button  
- Use any Google account  
- All Google sign-ins are assigned the 'user' role by default

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Authentication**: JWT + Google OAuth
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rbac-system.git
cd rbac-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`


## Usage

### User Registration
1. Navigate to `/register`
2. Fill in the registration form with:
   - Full name (minimum 2 characters)
   - Valid email address
   - Password (minimum 6 characters)
3. User will be automatically logged in and redirected to dashboard

### User Login
1. Navigate to `/login`
2. Enter credentials or use Google Sign-In
3. Successful login redirects to role-specific dashboard


## Security Features

### Authentication
- JWT tokens for session management
- Secure token storage in localStorage
- Automatic token refresh
- Google OAuth integration

### Authorization
- Role-based route protection
- Middleware for API requests
- Role verification on protected routes
- Type-safe role implementation

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint




