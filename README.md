# Angular Feature Demo

This project demonstrates various new features in Angular 17+, including:

## Features Demonstrated

### 1. Defer Demo

- Demonstrates the new `@defer` directive for lazy loading content
- Shows `@placeholder`, `@loading`, and `@error` blocks
- Includes examples of timer-based and viewport-based loading

### 2. Control Flow Demo

- Showcases the new control flow syntax with `@if`, `@for`, and `@switch`
- Demonstrates product listing with conditional rendering
- Uses the new `track` feature for optimized rendering

### 3. Vite + esbuild Demo

- Information about the new build system
- Highlights the benefits of using Vite and esbuild

### 4. Standalone Demo

- Demonstrates standalone components, directives, and pipes
- Includes a custom price formatting pipe
- Shows how to use standalone features in Angular 17+

### 5. SSR & Hydration Demo

- Shows server-side rendering capabilities
- Demonstrates client-side hydration
- Includes interactive elements that work after hydration

### 6. Signals Demo

- Demonstrates Angular's new Signals API
- Shows `signal`, `computed`, and `effect` usage
- Includes a reactive counter example

### 7. Route Redirect Demo

- Shows function-based route redirects
- Demonstrates authentication-based routing
- Uses signals for auth state management

### 8. Fallback ng-content Demo

- Demonstrates content projection with fallback content
- Shows how to create reusable components with default content

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

- `src/app/components/`: Contains all demo components
- `src/app/app.routes.ts`: Defines the application routes with lazy loading
- `src/app/app.component.ts`: Main application component with navigation

## Technologies Used

- Angular 17+
- TypeScript
- TailwindCSS
- Vite + esbuild
- Angular Router
- Angular Signals
