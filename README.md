# PortfolioProject

## Vercel deployment

This project deploys the Angular frontend and the `/api/contact` serverless function together on Vercel.

1. Import this repository into Vercel.
2. Keep the framework preset as Angular or choose Other if prompted.
3. Add these environment variables in Vercel Project Settings:

```text
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM=your-gmail-address@gmail.com
RECIPIENT_EMAIL=your-recipient-address@example.com
```

4. Deploy. The frontend calls `/api/contact` on the same Vercel deployment.

Never commit real SMTP values. The `.env.example` file contains placeholders only.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.34.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
