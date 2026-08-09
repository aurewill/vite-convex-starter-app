# Welcome to your Convex + React (Vite) app

This is a [Convex](https://convex.dev/) project originally created with [`pnpm create convex@latest`](https://www.npmjs.com/package/create-convex).

After the initial setup (<2 minutes) you'll have a working full-stack app using:

- Convex as your backend (database, server logic)
- [React](https://react.dev/) as your frontend (web page interactivity)
- [Vite](https://vite.dev/) as the frontend development server and build tool
- [TanStack Router](https://tanstack.com/router/latest/docs/overview) for routing
- [shadcn/ui](https://ui.shadcn.com/) with Radix primitives for accessible UI
- [Tailwind CSS](https://tailwindcss.com/) for application layout and styling

## Get started

1. Install nvm if you don't have it ([Node Version Manager installation instructions](https://github.com/nvm-sh/nvm#installing-and-updating))

2. Run `nvm install`
   - This will install this repo's node version if you don't have it. If you do have it, it will activate that node version.
   - Alternatively, if you already have this repo's node version, you can run `nvm use`.
   - If you want to set this repo's node version to be the default node version for your terminal sessions, run `nvm alias default <REPO_NODE_VERSION>`.

3. Run `corepack enable`
   - This will enable corepack which will sync your local package manager with the repo's package manager (pnpm) and version.

4. Run `pnpm install` to install the workspace dependencies.

5. Run `pnpm dev`.
   - On the first run, Convex will prompt you to log in for a cloud deployment or develop anonymously with a local deployment.
   - Convex will configure the project, write the deployment details and `VITE_CONVEX_URL` to `.env.local`, then start Vite and open the app in your browser.
   - Keep this process running while you develop. It syncs backend changes to your development deployment and serves frontend changes through Vite.

Future runs of `pnpm dev` will reuse the deployment configured in `.env.local`.

## UI components

This project uses the shadcn CLI and the configuration in `components.json`. Add a component from the registry with:

```bash
pnpm dlx shadcn@latest add <component>
```

Files in `src/components/ui/**` are registry-managed. Keep application-specific composition in components outside that directory, and review generated diffs when updating registry components.

## Editor setup

This repo includes VS Code/Cursor extension recommendations in `.vscode/extensions.json`:

- ESLint: surfaces lint/type-safety feedback while editing.
- Prettier: formats files on save using this repo's Prettier config (default Prettier settings).
- Tailwind CSS IntelliSense: provides autocomplete and validation for Tailwind classes.

Workspace settings enable format-on-save and set Prettier as the default formatter so formatting behavior comes from the repo instead of user-level editor settings.

## Learn more

To learn more about developing your project with Convex, check out:

- The [Tour of Convex](https://docs.convex.dev/get-started) for a thorough introduction to Convex principles.
- The rest of [Convex docs](https://docs.convex.dev/) to learn about all Convex features.
- [Stack](https://stack.convex.dev/) for in-depth articles on advanced topics.

## Join the community

Join thousands of developers building full-stack apps with Convex:

- Join the [Convex Discord community](https://convex.dev/community) to get help in real-time.
- Follow [Convex on GitHub](https://github.com/get-convex/), star and contribute to the open-source implementation of Convex.
