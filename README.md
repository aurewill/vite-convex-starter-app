# Welcome to your Convex + React (Vite) app

This is a [Convex](https://convex.dev/) project originally created with [`pnpm create convex`](https://www.npmjs.com/package/create-convex).

After the initial setup (<2 minutes) you'll have a working full-stack app using:

- Convex as your backend (database, server logic)
- [React](https://react.dev/) as your frontend (web page interactivity)
- [Vite](https://vitest.dev/) for optimized web hosting
- [Tailwind](https://tailwindcss.com/) for building great looking accessible UI
- [Mantine]() for a component library and design system

## Get started

1. Install nvm ([Node Version Manager installation instructions](https://github.com/nvm-sh/nvm#installing-and-updating))

2. Run `nvm install`
   - This will install this repo's node version if you don't have it. If you do have it, it will activate that node version.
   - Alternatively, if you already have this repo's node version, you can run `nvm use`.
   - If you want to set this repo's node version to be the default node version for your terminal sessions, run `nvm alias default <REPO_NODE_VERSION>`.

3. Run `corepack enable`
   - This will enable corepack which will sync your local package manager with the repo's package manager (pnpm) and version.

4. Install node modules - run `pnpm i`

5. Run `pnpm convex dev`
   - This will prompt you to login to Convex. In the command instructions, for easiest DX, would recommend creating a new Convex project, choosing the cloud deployment option, and choosing the region closest to you.
   - Afterwards, a `.env.local` file should be created for you in the repo's root directory with your Convex project's environment variables needed to run the frontend locally against your convex deployment.

## Learn more

To learn more about developing your project with Convex, check out:

- The [Tour of Convex](https://docs.convex.dev/get-started) for a thorough introduction to Convex principles.
- The rest of [Convex docs](https://docs.convex.dev/) to learn about all Convex features.
- [Stack](https://stack.convex.dev/) for in-depth articles on advanced topics.

## Join the community

Join thousands of developers building full-stack apps with Convex:

- Join the [Convex Discord community](https://convex.dev/community) to get help in real-time.
- Follow [Convex on GitHub](https://github.com/get-convex/), star and contribute to the open-source implementation of Convex.
