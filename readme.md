# React From Scratch 🧠⚛️

Welcome to **React From Scratch** – a personal learning repository where I share everything I'm learning about React.js, step by step.

Whether you're new to React or brushing up your skills, you'll find useful code snippets, mini-projects, and clear explanations here!

---

## 📚 What You'll Find Here

- ✅ Step-by-step React learning journey
- ✅ Code examples for each concept
- ✅ Notes on key topics (JSX, components, props, state, hooks, etc.)
- ✅ Mini-projects to practice what I've learned
- ✅ Tips and resources for beginners

---

## 🚀 Who Is This For?

- Beginners learning React
- Students who want hands-on examples
- Anyone looking for simple React code and explanations

---

# Project Create:

**step to create vite Project**

- 1> npm create vite@latest
- 2> ok to proceed? (y) y
- 3> project name: ProjectName
- 4> select framework- React
- 5> select varient: JavaScript
- 6> for bringing node-module> npm run dev

---

## Tailwind CSS Setup with Vite + React

This guide walks you through setting up Tailwind CSS in a Vite project using React.

---

## 🛠️ Installation

### 1.✅ Install Tailwind CSS with Vite

Setting up Tailwind CSS in a Vite + React project.

---

### 2.📁 Create Your Project

If you don't have a Vite project set up already, create one using the following commands:
```bash
npm create vite@latest my-project -- --template react
cd my-project

```

---
### 3.⚙️ Configure Template Paths

**Update the `tailwind.config.js` file to include your template paths:**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
---

### 4.🎨 Add Tailwind Directives to CSS
In your ./src/index.css file, add the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
---
### 5.🚀 Start Development Server
Start your local development server using:
```bash
npm run dev
```
---
---
## A.📘 React JSX (JavaScript XML)
- 🔹 What is JSX?
JSX is a syntax extension for JavaScript.

It allows you to write HTML-like code inside JavaScript (used in React).

Example:

```jsx
const element = <h1>Hello, React!</h1>;
```
- 🔹 Why use JSX?
It makes the code more readable and declarative.

Helps visualize the UI structure directly in the component.

- 🔹 JSX Rules:
One parent element must wrap all JSX.

```jsx
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);
```
Class becomes className:
```jsx
<div className="container"></div>
```
JavaScript in JSX – use {}:
```jsx
const name = "Susmita";
<h1>Hello, {name}</h1>
```
Self-closing tags must end with /:
```jsx
<img src="logo.png" alt="logo" />
```
- 🔹 JSX is not HTML
JSX gets compiled to React.createElement() calls behind the scenes.
---
## B.📘 React Library – Overview
🔹 What is React?
- React is an open-source JavaScript library used for building user interfaces, especially single-page applications (SPAs).

- Developed and maintained by Meta (Facebook).

🔹 Why is React a Library (not a framework)?
- It focuses only on the "View" layer in the MVC (Model-View-Controller) architecture.

- React doesn’t include built-in routing or state management — you add libraries (like React Router, Redux) as needed.

- It offers flexibility to integrate with other tools.

🔹 Key Features of React Library:
- Component-Based – UI is broken into reusable pieces.

- Declarative – Describe what you want, not how.

- Virtual DOM – Improves performance by updating only the changed parts.

- Unidirectional Data Flow – Data flows one way (parent → child).

- Hooks (since React 16.8) – Functional way to handle state and lifecycle.

🔹 Core React Library Includes:
- react – for creating components and managing JSX.

- react-dom – for rendering to the DOM.

- react-scripts – (when using Create React App) for running and building the app.

🔹 Example:
```bash
npm install react react-dom
```
---
## C.📘 React Components
🔹 What is a Component?
- A component is a reusable piece of UI.

- Think of it like a function that returns JSX.

- React apps are made up of multiple components working together.

🔹 Types of Components:
- Functional Component ✅ (modern & preferred)
```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```
- Arrow Function Component
```jsx
const Welcome = () => <h1>Hello, React!</h1>;
```
- Class Component ❌ (older method)
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}
```
🔹 Features of Components:
- Reusable: Use one component in multiple places.

- Composable: One component can contain others.

- Isolated: Each component manages its own logic and state.

🔹 Naming Rule:
- Component names must start with a capital letter.
```jsx
<Header /> ✅
<header /> ❌ (will be treated as HTML)
```
🔹 Rendering a Component:
- In App.js:
```jsx
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
```
