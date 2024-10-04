# pangman-ui Library

This project is a UI component library developed from a Figma design. The goal of this project is to create reusable, customizable UI components that can be easily integrated into web applications. Each component is crafted to ensure consistency, responsiveness, and a clean, modern interface in line with the Figma design.

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

###

###

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

## License

This project uses third-party libraries, which are licensed under their respective licenses:

- shadcn-phone-input (MIT License)
