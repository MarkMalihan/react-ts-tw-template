# React TypeScript Tailwind Template

This is a starter template for building React applications using TypeScript, Tailwind CSS, and Vite. It is designed to streamline the development process by integrating essential tools and libraries, including Tailwind Merge, CLSX, React Router DOM, and Vitest for unit testing.

## Features

- **React**: A powerful library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript, enhancing code quality and developer productivity.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A fast build tool optimized for modern web projects.
- **Tailwind Merge**: Safely merge Tailwind CSS classes.
- **CLSX**: A utility for conditionally joining class names.
- **React Router DOM**: Routing library for creating dynamic navigation.
- **Vitest**: A blazing-fast unit testing framework.
- **Prettier**: A code formatter for consistent styling.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MarkMalihan/react-ts-tailwind-template.git
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

The application will be available at [http://localhost:5173](http://localhost:5173).

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

### Formatting Code

Format code using Prettier:

```bash
npm run format
# or
yarn format
```

### Testing

Run unit tests using Vitest:

```bash
npm run test
# or
yarn test
```

Run unit tests for a specific test file:

```bash
npx vitest path/to/test-file.test.tsx
# or
yarn vitest path/to/test-file.test.tsx
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

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "light"
    | "dark"
    | "neumorphism-primary";
};

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = twMerge(
    clsx(
      "px-4 py-2 font-medium rounded transition-colors duration-300",
      {
        "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
        "bg-gray-300 text-black hover:bg-gray-400": variant === "secondary",
        "bg-accent text-black": variant === "accent",
        "bg-white text-black hover:bg-gray-100": variant === "light",
        "bg-black text-white hover:bg-gray-700": variant === "dark",
        "opacity-50 cursor-not-allowed": props.disabled,
      },
      className
    )
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run test`: Run unit tests with Vitest.
- `npx run test path/to/test-file.test.tsx`: Run tests for a specific file.
- `npm run format`: Format code using Prettier.

## Dependencies

- **React**: ^18.x
- **TypeScript**: ^5.x
- **Tailwind CSS**: ^4.x
- **Vite**: ^6.x
- **tailwind-merge**: ^2.x
- **clsx**: ^2.x
- **react-router-dom**: ^7.x
- **Vitest**: ^3.x

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Enjoy building your next project with this template! 🚀
