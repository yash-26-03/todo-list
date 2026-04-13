# TASKDON3 — Manage Your Tasks 

A clean, minimal, and responsive **Todo List** application built with **React** and **Vite**. Add, edit, delete, and mark tasks as complete — all persisted in your browser's `localStorage` so nothing is lost on refresh.

---

## Preview

> A violet-themed task manager with an intuitive UI for everyday productivity.

---

## Features

- **Add Todos** — Quickly add new tasks with a minimum 4-character validation.
- **Edit Todos** — Click the edit button to modify any existing task.
- **Delete Todos** — Remove tasks you no longer need.
- **Mark as Complete** — Toggle checkboxes to strike-through finished tasks.
- **Show/Hide Finished** — Filter view to show or hide completed tasks.
- **Persistent Storage** — Todos are saved to `localStorage` and survive page refreshes.
- **Responsive Design** — Works seamlessly on desktop and mobile screens.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library for building components |
| [Vite 8](https://vitejs.dev/) | Lightning-fast dev server & build tool |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library (Font Awesome, Ant Design) |
| [UUID](https://www.npmjs.com/package/uuid) | Unique ID generation for each todo |
| [ESLint](https://eslint.org/) | Code linting and quality |

---

## Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/my-project.git
   cd my-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to the URL shown in your terminal (typically `http://localhost:5173`).

---

## How It Works

1. **State Management** — Uses React's `useState` and `useEffect` hooks. Todos are initialized from `localStorage` via a lazy initializer to avoid data loss on mount.
2. **Unique IDs** — Each todo is assigned a UUID (`uuid` v4), ensuring stable keys for React rendering and reliable edit/delete operations.
3. **LocalStorage Sync** — A `useEffect` hook watches the `todos` array and writes it to `localStorage` on every change.
4. **Filtering** — The "Show Finished" checkbox toggles visibility of completed tasks without removing them from state.

---
