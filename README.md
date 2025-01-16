# DREAMSLAB WEB TEMPLATE

This is a NextJS template used throughout Dreamslab for website development projects. The template includes the following features:

- TailwindCSS + fluid-tailwind + tailwind-animate + tailwind-motion
- ESLint + Prettier
- shadcn-ui + Lucide Icons
- Optional Directus

## Getting Started

First, install the dependencies:

```sh
yarn install
```

Then, run the development server:

```sh
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Available Scripts

In the project directory, you can run:

```sh
yarn dev
# Runs the app in the development mode.
# Open http://localhost:3000 to view it in the browser.

yarn build
# Builds the app for production to the .next folder.

yarn start
# Starts the production server.

yarn lint
# Runs ESLint to check for linting errors.

yarn style:check
# Checks the code style using Prettier.

yarn style:fix
# Fixes the code style using Prettier.
```

## Enabling workflow

To enable github workflow, follow the steps below:

- Go to `.github/workflows` and uncomment all the code in `prebuild.yml`

## Enabling Directus

To enable Directus, follow the steps below:

- Install directus's SDK by running `yarn add @directus/sdk`
- Go to `./src/lib/directus` and uncomment `index.ts` and `schema.d.ts`
- create a `.env` file in the root directory and add `NEXT_PUBLIC_DIRECTUS_URL` variables.
