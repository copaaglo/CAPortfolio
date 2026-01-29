# Replit.md

## Overview

This is a personal portfolio website for Conrado Aguilar, a Computer Engineering student. The application showcases projects, skills, resume, and contact information. It's built as a single-page application using React with TypeScript and Vite as the build tool.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React 19 with TypeScript for type-safe component development
- **Build Tool**: Vite (using rolldown-vite) for fast development and optimized production builds
- **Routing**: React Router DOM v6 for client-side navigation with the following routes:
  - `/` - Home page with hero section and featured projects
  - `/about` - Background, skills, and coursework
  - `/projects` - Project showcase with detailed descriptions
  - `/resume` - PDF resume viewer with download option
  - `/contact` - Contact information and links
- **Styling**: Plain CSS with CSS custom properties (variables) for theming
  - Light/dark theme support via `data-theme` attribute on document root
  - Theme preference persisted in localStorage

### Component Structure

- `App.tsx` - Main layout wrapper with Navbar, Routes, and Footer
- `components/Navbar.tsx` - Navigation with theme toggle functionality
- `components/Footer.tsx` - Site footer with social links
- `components/ProjectCard.tsx` - Reusable project display component
- `data/projects.ts` - Static project data with TypeScript types

### Design Patterns

- **Static Data Pattern**: Project information stored in TypeScript files rather than a database, appropriate for a portfolio site
- **CSS Variables for Theming**: Theme colors defined as CSS custom properties, switched via data attribute
- **Container Layout**: Consistent max-width container class for content centering

### Configuration

- TypeScript configured with strict mode and modern ES2022+ targets
- ESLint with React Hooks and React Refresh plugins
- Development server runs on port 5000 with all hosts allowed

## External Dependencies

### Core Dependencies
- **React 19** - UI library
- **React DOM 19** - React DOM renderer
- **React Router DOM 6** - Client-side routing

### Development Tools
- **Vite (rolldown-vite)** - Build tool and dev server
- **TypeScript 5.9** - Static typing
- **ESLint 9** - Code linting with TypeScript and React plugins

### Static Assets
- Resume PDF expected at `/public/resume/resume.pdf`
- No external APIs or backend services
- No database required