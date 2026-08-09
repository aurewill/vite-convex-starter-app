<!-- convex-ai-start -->

This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read `convex/_generated/ai/guidelines.md` first** for important guidelines on how to correctly use Convex APIs and patterns. The file contains rules that override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running `npx convex ai-files install`.

<!-- convex-ai-end -->

## Registry-managed UI source

The shadcn CLI owns these paths:

- `src/components/ui/**`
- `src/hooks/use-mobile.ts`
- `src/components/ai-elements/**`

Do not manually edit or format registry-managed files. Put application-specific composition in components outside those paths. Before upgrading a registry component, start from a clean worktree, rerun the CLI, and review the generated diff.
