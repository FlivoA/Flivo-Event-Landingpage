# Flivo Event Landing Page – Backend

A TypeScript/Express backend for the Flivo Event Landing Page platform. Handles newsletter subscriptions, email
dispatch, and serves as the server-side logic for landingpage operations.

---

## 🚀 Features

- **Express.js** API server written in TypeScript
- **Newsletter subscription** endpoint with email validation and confirmation
- **Nodemailer integration** for sending stylish, customized HTML emails
- **Environment-based config** with `.env` support for sensitive data
- **Modern development tools:** `tsx` for dev, TypeScript strict mode, modular structure
- **Ready for deployment and CI/CD integration**

---

## 📁 Project Structure

```

backend/
|-- src/
|    |-- controllers/
|    |    └─ newsletterController.ts   \# Handles business logic for newsletter subscriptions
|    |-- routes/
|    |    └─ newsletterRoute.ts        \# Express routes for newsletter endpoints
|    |-- templates/
|    |    └─ newsletter-welcome.html   \# HTML email template for confirmation/welcome
|    |-- utils/
|    |    └─ email.ts                  \# Utility for sending emails (Nodemailer)
|    └─ index.ts                       \# Entry point (Express app setup, router registration)
|
|-- .gitignore                         \# Ignore node_modules, dist, .env files
|-- package.json                       \# NPM project config/dependencies/scripts
|-- tsconfig.json                      \# TypeScript config (strict, modern, ESM)

```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (with ESM support)
- NPM/Yarn/PNPM
- [Optional] Docker (for containerized deployment)

### Installation

```

cd backend
npm install

```

### Environment Setup

Create your environment file `.env.local` or `.env.production` in the root with the following:

```

EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=465
EMAIL_USER=your@email.com
EMAIL_PASS=yourpassword
NEWSLETTER_FROM="Flivo Events [no-reply@flivo.ai](mailto:no-reply@flivo.ai)"

```

### Scripts

- `npm run dev` &ndash; Start development server (hot reload via tsx)
- `npm run build` &ndash; Compile TypeScript to JavaScript in `dist/`
- `npm start` &ndash; Run the production build

---

## 🧩 API Endpoints

### POST `/api/newsletter`

Subscribe to newsletter. Requires JSON body:

```

{ "email": "your@email.com" }

```

- Returns: Success message or validation error.

---

## 📨 Email/Newsletter System

- Uses `nodemailer` and secure HTML templates for sending responsive confirmation emails.
- Email template: `src/templates/newsletter-welcome.html` (fully customizable).

---

## 🧑‍💻 Main Dependencies

- `express` (API framework)
- `typescript` (static typing & modern syntax)
- `nodemailer` (SMTP, email delivery)
- `dotenv` (env variable loader)
- `tsx` (dev server)
- **Dev:** `@types/*`, `ts-node-dev`, `tsx`

---

## 🛡️ Security & Best Practices

- All sensitive settings loaded via `.env` files; never commit credentials.
- Input validation is enforced for all APIs.
- Modular structure for maintainability and scalability.

---

## 👥 Contributing

1. Fork this repo
2. Create a feature branch
3. Submit a Pull Request – we welcome improvements and new ideas!

---

## 🔗 License






