# React + TypeScript ESLint & Prettier Configuration

This directory contains a recommended setup for ESLint and Prettier in a React and TypeScript project.

## Philosophy

This configuration aims to promote modern React and TypeScript best practices, enhance code readability, and ensure web accessibility. Formatting is primarily handled by Prettier to maintain a consistent code style with minimal effort, allowing ESLint to focus on code quality and potential errors.

## Tools

This setup utilizes the following key tools and plugins:

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **ESLint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
    *   `@typescript-eslint/parser`: Allows ESLint to lint TypeScript code.
    *   `@typescript-eslint/eslint-plugin`: Contains a set of ESLint rules specific to TypeScript code.
    *   `eslint-plugin-react`: Provides ESLint rules for React.
    *   `eslint-plugin-react-hooks`: Enforces the rules of Hooks.
    *   `eslint-plugin-jsx-a11y`: Checks accessibility rules on JSX elements.
    *   `eslint-config-prettier`: Turns off all ESLint rules that are unnecessary or might conflict with Prettier.
    *   `eslint-plugin-prettier`: Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
*   **Prettier**: An opinionated code formatter that enforces a consistent style by parsing your code and re-printing it.

## Installation

To add these development dependencies to your project, you can use either npm or yarn:

**npm:**
```bash
npm install --save-dev @typescript-eslint/eslint-plugin@^5.0.0 @typescript-eslint/parser@^5.0.0 eslint@^8.0.0 eslint-config-prettier@^8.0.0 eslint-plugin-jsx-a11y@^6.0.0 eslint-plugin-prettier@^4.0.0 eslint-plugin-react@^7.0.0 eslint-plugin-react-hooks@^4.0.0 prettier@^2.0.0 typescript@^4.0.0
```

**yarn:**
```bash
yarn add -D @typescript-eslint/eslint-plugin@^5.0.0 @typescript-eslint/parser@^5.0.0 eslint@^8.0.0 eslint-config-prettier@^8.0.0 eslint-plugin-jsx-a11y@^6.0.0 eslint-plugin-prettier@^4.0.0 eslint-plugin-react@^7.0.0 eslint-plugin-react-hooks@^4.0.0 prettier@^2.0.0 typescript@^4.0.0
```

## Usage

1.  **Copy Configuration Files**:
    *   Copy the `.eslintrc.json` file from this directory to the root of your project.
    *   Copy the `.prettierrc` file from this directory to the root of your project.

2.  **Add Scripts to `package.json`**:
    Ensure your `package.json` includes scripts for linting and formatting:
    ```json
    "scripts": {
      "lint": "eslint .",
      "format": "prettier --write ."
    }
    ```

3.  **Run Scripts**:
    *   To check for linting issues: `npm run lint` or `yarn lint`
    *   To automatically fix formatting issues: `npm run format` or `yarn format`

## Key Rules Explanation

*   **`eslint-plugin-react-hooks`**: This plugin is crucial for React projects using Hooks. It enforces the Rules of Hooks (e.g., only call Hooks at the top level, only call Hooks from React functions), which helps prevent common bugs and ensures Hooks behave as expected.
*   **`eslint-plugin-jsx-a11y`**: Accessibility is a vital aspect of web development. This plugin helps identify and enforce accessibility best practices in your JSX, making your application more usable for people with disabilities. It checks for things like proper ARIA attributes, image alt text, and keyboard navigability.
```
