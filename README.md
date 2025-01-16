# Svelte Todo Application

A modern, responsive todo application built with SvelteKit, TypeScript, and TailwindCSS. This application allows users to manage their tasks efficiently with features like creating, completing, and organizing todos.

Production version is deployed on Vercel.
You can check it out [here](https://svelte-assessment-todo.vercel.app/).



## Prerequisites

- Node.js 20.x (if you have issue with node version, you can just remove "engines": { "node": "20.x" } from package.json. It was for Vercel deployment.)
- npm package manager

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/harungokcegoz/svelte-assessment.git
cd svelte-assessment
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript checks
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint checks

## Technical Decisions and Architecture

### Technology Stack

- **SvelteKit**
- **TypeScript**
- **TailwindCSS**

### State Management

- Uses Svelte stores for centralized state management
- Maintains data persistence across page refreshes with local storage

## Assumptions and Design Decisions

1. **Data Persistence and Storage**: Todos are stored in the browser's local storage to persist data between sessions.
2. **Responsive Design**: The application is designed to work on both desktop and mobile devices. For example, different navigation is used for mobile devices.
3. **TypeScript**: It was not in the requirements, but I added it for type safety.
4. **User Experience**: 
   I have added some extras to the project to make it more interactive and user-friendly:
- Some shortcuts to reach some pages quickly on the home page.
- A summary of todos on the homepage and the header.
- bg-colors and icons for to-dos to make it more interactive for users although it was not in the requirements.
- Lottie animations were tried to be used but it was not working as expected because of the SvelteKit versioning.
- A deletion todos feature to the project.
- Dates to the todos and a sorting feature to the todos(as default it is sorted by date).
- Description to the todos.
- Toggle to complete todos.

1. **Linter and Formatter**: I added linter and formatter to the project to make sure the code is clean and consistent.
2. **UI Library**: I have used TailwindCSS for styling to ease the development process.
3. **Icons**: I have used my own svg icons for the project.

