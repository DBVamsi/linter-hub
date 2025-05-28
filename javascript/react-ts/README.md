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

## Demonstration

To illustrate how this ESLint and Prettier setup works, an example component `example/UserProfile.tsx` has been included. This file intentionally contains a few common linting and formatting errors.

If you run the lint script (`npm run lint` or `yarn lint`) in a project containing this example file (and the provided ESLint configuration), you would expect to see error messages similar to the following:

```text
path/to/your/project/javascript/react-ts/example/UserProfile.tsx
  17:5  Error: The `useState` hook returns an array of two elements. We expect the second element to be the updater function, not to be never reassigned.  @typescript-eslint/no-unused-vars
  23:7  Error: React Hook useEffect has a missing dependency: 'name'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
  29:7  Error: img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.  jsx-a11y/alt-text

✖ 3 problems (3 errors, 0 warnings)
```

**Explanation of Errors:**

*   **`@typescript-eslint/no-unused-vars`**: This error (shown here for `setUnusedSetter`) flags variables that are declared but never used. In the example, the `setUnusedSetter` function from a `useState` call is intentionally not used.
*   **`react-hooks/exhaustive-deps`**: This rule ensures that all dependencies of `useEffect`, `useCallback`, etc., are correctly listed in their dependency arrays. The example component intentionally omits `name` from `useEffect`'s dependency array.
*   **`jsx-a11y/alt-text`**: This accessibility rule requires `<img>` elements to have an `alt` attribute, which is crucial for screen readers and for situations where the image cannot be displayed. The example `<img>` tag is missing this attribute.

Additionally, the `UserProfile.tsx` file contains some inconsistent formatting (like mixed single and double quotes for strings, and varied indentation). Running the format script (`npm run format` or `yarn format`) will automatically correct these inconsistencies according to the rules defined in `.prettierrc`.
