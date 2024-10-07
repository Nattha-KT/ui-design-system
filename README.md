# pangman-ui

Welcome to the **UI Library**, a prototype designed for learners to understand the **fundamental structure** of UI design and best practices for structuring and organizing UI components. This library serves as an example of how to **build a scalable UI library** using **TypeScript**, **React**, and **Vite**.

## Purpose

This project is not just a set of reusable UI components, but also a **learning tool** aimed at helping developers:

- Understand **best practices** in structuring UI libraries.
- Learn how to effectively use **TypeScript** with React and Vite.
- Create a **foundation** for building their own scalable, reusable UI component libraries.

By studying this library, learners can gain insight into the organization and structure that facilitates easy maintenance, scaling, and collaboration in large projects.

## Design system

###

<div align="center">
  <img height="200" src="./public/figma.png"  />
  
  <!-- <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design//yVLJLnreOFixR5EbOIt2zH/Design-System?node-id=2402-4625&embed-host=share" allowfullscreen></iframe> -->
</div>

###

- [Preview Figma Design](https://embed.figma.com/design/yVLJLnreOFixR5EbOIt2zH/Design-System?node-id=2402-4625&embed-host=share)
- The Figma UI Kit is open sourced by [Irina Nik](https://www.figma.com/community/file/1131891137727824106/free-accessible-design-system).
- [View more](<https://www.figma.com/design/yVLJLnreOFixR5EbOIt2zH/Free-Accessible-Design-System-(Community)?node-id=1406-1723&m=dev&t=grzyJnuaJGI9wsep-1>) For sample best practive.

## Features

- **Educational Prototype**: Learn the basic structure of designing reusable UI components.
- **Best Practices**: Follow best practices in organizing and structuring your project for scalability and reusability.
- **TypeScript, React, and Vite**: Understand how to combine these technologies to build a modern UI library.
- **Customizable & Accessible**: Components are designed to be flexible, responsive, and accessible by default.

## Installation

```bash
# Using npm
npm install pangman-ui
```

## Usage

```tsx
import React from 'react';
import { Button } from 'pangman-ui';

const App = () => {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Button Clicked!')}>
        Click Me
      </Button>
    </div>
  );
};

export default App;
```

## Components

| Component    | Description                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `Button`     | A versatile button with multiple variants.                                                                                         |
| `Input`      | A customizable input field with support for validation.                                                                            |
| `Textarea`   | A multi-line input field that allows users to enter longer text, useful for comments, descriptions, or notes.                      |
| `PhoneInput` | An input field specifically designed for phone number entry, with validation and format handling based on different country codes. |
| `Password`   | A password input field with integrated strength meter and feedback, offering better security awareness during password creation.   |

## Additional Recommendations for Building a Good UI Library

When building a UI library, especially for large-scale applications, there are several practices and tools that can help improve maintainability and scalability:

### 1. **Monorepo Structure**

Using a **monorepo** approach can help manage multiple packages (e.g., components, themes, utilities) within a single repository. Tools like **Nx** or **Lerna** make it easy to structure and manage your monorepo, offering benefits such as:

- Centralized management of dependencies.
- Easier refactoring across multiple packages.
- Consistent versioning and publishing workflows.

### 2. **Component Documentation**

Make sure to document each component thoroughly. Tools like **Storybook** allow you to create a visual representation of your components, making it easier for others to understand and use your library.

### 3. **Automated Testing**

Including **unit tests** for each component ensures that they work as expected. Testing frameworks like **Jest** or **Vitest** and **React Testing Library** are useful for verifying component behavior.

### 4. **CI/CD Integration**

Setting up continuous integration (CI) and continuous delivery (CD) pipelines can automate testing, building, and publishing your library. Tools like **GitHub Actions** or **CircleCI** can help automate these processes, ensuring that your library is always ready for production.

### 5. **Versioning and Changelog**

Use a versioning strategy like **semantic versioning** (SemVer) to keep track of changes in your library. Also, maintain a **changelog** to document important updates and improvements, helping users understand what has changed between releases.

### 6. **Tree Shaking**

Tree shaking removes unused code, making your library lighter. Ensure your components are exported as **ES modules** to enable this.

```ts
// Import only Button
import { Button } from '@your-library-name/ui-library';
```

### 7. **Separate Entry Points**

Provide separate entry files for individual components, allowing developers to import only what they need.

```ts
// Import only the Button component
import Button from '@your-library-name/ui-library/button';
```

### 8. **Code Splitting**

Break large components into smaller bundles that load only when needed, improving performance.

```ts
const Modal = React.lazy(() => import('@your-library-name/ui-library/modal'));

<Suspense fallback={<div>Loading...</div>}>
  <Modal />
</Suspense>;
```

### 9. **Dynamic Import**

Use dynamic imports to load components asynchronously, further enhancing performance.

```ts
const Chart = React.lazy(() => import('@your-library-name/ui-library/chart'));
```

These practices—Tree Shaking, Separate Entry Points, Code Splitting, and Dynamic Import—will help keep your library efficient and optimized.

---

## License

This project is licensed under the [MIT License](./LICENSE).
It also incorporates third-party libraries that are licensed under their respective terms:

- shadcn-phone-input (MIT License)
