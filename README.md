# React Course - Form Validation & Patterns

This project is a practical demonstration of advanced form handling in React, using **React Hook Form** and **Zod** for validation, along with component composition patterns.

Built with [Bun](https://bun.sh) for fast and efficient development.

## 🚀 Features

- **Form Handling:** Robust implementation with `react-hook-form`.
- **Schema Validation:** Using `zod` to define and validate business rules on data.
- **Reusable Components:** Composition pattern for form inputs (`InputForm`).
- **UI Components:** Components styled with Tailwind CSS and structure based on shadcn/ui.
- **Custom Hooks:** Examples of custom hooks like `useFetch`.
- **Modern Environment:** Configured with Bun and TypeScript.

## 🛠️ Technologies

- [React 19](https://react.dev/)
- [Bun](https://bun.sh/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Radix UI](https://www.radix-ui.com/) (Base for UI components)

## 📂 Project Structure

```
src/
├── components/
│   ├── CustomForm/       # Main example of form with validation
│   │   ├── components/   # Form sub-components (InputForm)
│   │   └── schemas/      # Zod schema definitions
│   └── ui/               # Base UI components (Button, Input, etc.)
├── hooks/                # Custom hooks (useFetch)
├── lib/                  # Utilities
├── model/                # Data models
└── App.tsx               # Application entry point
```

## 🏁 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh) installed.

### Installation

Install project dependencies:

```bash
bun install
```

### Running

Start the development server:

```bash
bun dev
```

The application will be available at `http://localhost:3000` (or the port indicated in the console).

### Production

To build and run in production mode:

```bash
bun run build
bun start
```

## 📝 Code Examples

### Validation with Zod and React Hook Form

The project demonstrates how to integrate schema validations directly into form hooks:

```tsx
const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
  resolver: zodResolver(schema),
});
```

### Composition Pattern

Use of encapsulated components to reduce code repetition in forms:

```tsx
<InputForm
  name="email"
  control={control}
  label="Email"
  error={errors.email}
  type="email"
/>
```
