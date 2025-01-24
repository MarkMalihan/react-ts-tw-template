# React TypeScript Tailwind Template

This is a starter template for building React applications using TypeScript, Tailwind CSS, and Vite. It is designed to streamline the development process by integrating essential tools and libraries, including Tailwind Merge, CLSX, and React Router DOM.

## Features

- **React**: A powerful library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript, enhancing code quality and developer productivity.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A fast build tool optimized for modern web projects.
- **Tailwind Merge**: Safely merge Tailwind CSS classes.
- **CLSX**: A utility for conditionally joining class names.
- **React Router DOM**: Routing library for creating dynamic navigation.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-ts-tailwind-template.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-ts-tailwind-template
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`.

### Build

To build the application for production:

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` folder.

### Preview

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
react-ts-tailwind-template/
├── node_modules/       # Installed dependencies
├── public/             # Static assets
├── src/                # Source code
│   ├── app/            # Application modules
│   │   ├── components/ # Reusable components
│   │   ├── configs/    # Configuration files
│   │   ├── contexts/   # Context API implementations
│   │   ├── features/   # Feature-specific modules
│   │   ├── hooks/      # Custom hooks
│   │   ├── layouts/    # Layout components
│   │   ├── models/     # TypeScript models and interfaces
│   │   ├── pages/      # Application pages
│   │   ├── routes/     # React Router configuration
│   │   ├── services/   # API services and utilities
│   │   └── utils/      # Helper functions and utilities
│   ├── assets/         # Images, fonts, and other static assets
│   ├── App.tsx         # Main app component
│   ├── index.css       # Global CSS styles
│   └── main.tsx        # Entry point
├── .gitignore          # Git ignore rules
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
├── tsconfig.app.json   # App-specific TypeScript configuration
├── tsconfig.node.json  # Node-specific TypeScript configuration
├── vite-env.d.ts       # Vite environment definitions
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## Configuration

### Tailwind CSS

Customize Tailwind CSS by editing the `tailwind.config.js` file. For example, you can add custom colors, spacing, or other utilities.

### Routing

Define application routes in the `src/app/routes` folder using React Router DOM.

### Class Management

Use **clsx** and **tailwind-merge** to conditionally and safely manage class names. Example:

```tsx
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Button = ({ isActive }: { isActive: boolean }) => {
  const buttonClass = twMerge(
    clsx("px-4 py-2", isActive ? "bg-blue-500" : "bg-gray-500")
  );
  return <button className={buttonClass}>Click Me</button>;
};
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run linter to check for code issues.

## Dependencies

- **React**: ^18.x
- **TypeScript**: ^5.x
- **Tailwind CSS**: ^3.x
- **Vite**: ^4.x
- **tailwind-merge**: ^1.x
- **clsx**: ^2.x
- **react-router-dom**: ^6.x

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Enjoy building your next project with this template!
