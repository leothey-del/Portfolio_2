# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## EmailJS contact form

1. Create an EmailJS service and email template in your EmailJS account.
2. Set the template's recipient to the email address where you want to receive messages. Use `{{from_name}}`, `{{reply_to}}`, and `{{message}}` for the sender name, reply-to email, and message fields.
3. Copy `.env.example` to `.env` and replace its placeholder values with your EmailJS service ID, template ID, and public key.
4. Restart the Vite development server after editing `.env`. Add the same variables to your deployment provider's environment settings before deploying.

The EmailJS public key is intended for use in browser applications. Do not put private keys or email account passwords in frontend environment variables.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
