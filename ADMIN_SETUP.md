# Admin Access Setup

## Overview
The Book Heaven application has a simple admin system based on email addresses. Users with specific email addresses automatically get admin privileges when they log in.

## Admin Access
- **Admin Email**: `admin@bookheaven.com`
- Any user who logs in with this email address will automatically have admin access
- Admin users can access additional dashboard features and see admin-specific UI elements

## Admin Features

### Navbar Changes for Admins
- **Dashboard Menu**: Admins see a "Dashboard" menu item in the main navigation
- **Admin Badge**: User dropdown shows "👑 Admin" status and "Administrator" badge
- **Dashboard Button**: Quick access button to dashboard in user dropdown

### Dashboard Access
- Access to admin dashboard with additional menu items:
  - All Books management
  - User management (placeholder)
  - Analytics (placeholder)
- Admin-specific dashboard title and layout

## How It Works
1. When a user logs in, the system checks their email against the admin email list
2. If the email matches `admin@bookheaven.com`, the user gets `role: 'admin'` and `adminStatus: true`
3. All other users get `role: 'user'` and `adminStatus: false`
4. The navbar and dashboard components use `adminStatus` to show/hide admin features
5. Admin routes are protected using the `AdminRoute` component

## Usage
1. Create an account or sign in with `admin@bookheaven.com`
2. You will automatically have admin access
3. See "Dashboard" in the main navigation menu
4. Your user dropdown will show admin status with crown icon
5. Navigate to `/dashboard` to access admin features

## Security Notes
- The admin email is currently hardcoded in the AuthProvider
- In production, consider moving admin emails to environment variables or database
- Admin access is granted immediately upon login with the correct email
- All admin routes are protected and redirect non-admins to home page