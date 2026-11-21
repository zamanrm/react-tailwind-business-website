# Nexa Studio

A responsive creative-studio website built with React and Tailwind CSS. The project includes five pages, reusable UI components, a mobile navigation menu, a filterable project gallery, and a frontend-only contact form.

## Pages

- **Home** — Studio introduction, services, selected projects, and a contact call to action.
- **About** — Studio story, approach, and values.
- **Services** — Service offerings and the project process.
- **Gallery** — Project cards with category filters and project detail dialogs.
- **Contact** — Contact information and a validated contact form.

## Features

- Responsive layouts styled with Tailwind CSS.
- Client-side navigation using React Router.
- Shared header and footer, plus reusable buttons, cards, and section headings.
- Mobile menu and gallery interactions managed with React `useState`.
- Welcome message displayed on page load with React `useEffect`.
- Accessible form labels and native browser validation.
- Frontend only: the contact form displays a confirmation message but does not send or store submissions.

## Built with

- React
- React Router
- Tailwind CSS
- Vite

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/   # Shared UI components
├── data/         # Project and service content
├── pages/        # Home, About, Services, Gallery, and Contact
├── App.jsx       # Routes and shared page layout
├── index.css     # Tailwind directives and global styles
└── main.jsx      # React application entry point
```

Some images and fonts are loaded from external services and require an internet connection.
