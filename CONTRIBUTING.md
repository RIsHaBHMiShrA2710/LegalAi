# Contributing to Samvidhan.AI 🏛️

Thank you for your interest in contributing to Samvidhan.AI! We welcome contributions of all kinds — from bug fixes and feature additions to documentation improvements and design suggestions.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Branching Strategy](#branching-strategy)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)
- [Code Style](#code-style)
- [Project Structure](#project-structure)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful, inclusive, and constructive environment. Harassment, discrimination, or toxic behavior of any kind will not be tolerated.

---

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/LegalAi.git
   cd LegalAi
   ```
3. **Add the upstream remote** so you can pull in future changes:
   ```bash
   git remote add upstream https://github.com/RIsHaBHMiShrA2710/LegalAi.git
   ```
4. **Set up** the project by following the instructions in [README.md](./README.md)
5. **Create a branch** for your work (see below)

---

## Branching Strategy

Always branch off from `master`. Use the following naming conventions:

| Prefix | Use case | Example |
|---|---|---|
| `feature/` | New functionality | `feature/add-voice-input` |
| `fix/` | Bug fixes | `fix/navbar-mobile-overlap` |
| `docs/` | Documentation changes | `docs/update-setup-guide` |
| `refactor/` | Code restructuring (no behavior change) | `refactor/auth-context` |
| `chore/` | Maintenance tasks | `chore/update-dependencies` |

```bash
git checkout -b feature/your-feature-name
```

---

## Commit Message Guidelines

We follow **Conventional Commits** for clear, machine-readable history:

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

### Types

| Type | When to use |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes only |
| `style` | Formatting, missing semicolons (no logic change) |
| `refactor` | Code change that is neither a fix nor a feature |
| `chore` | Build process, dependency updates, tooling |
| `test` | Adding or updating tests |

### Examples

```bash
feat(bot): add support for voice input queries
fix(navbar): fix hamburger menu not closing on mobile
docs(readme): add deployment instructions for Vercel
chore(deps): upgrade vite to v5.1.0
```

---

## Pull Request Process

1. **Keep PRs focused** — one PR should address one concern
2. **Update documentation** if your change requires it (README, inline comments, etc.)
3. **Test your changes** locally before submitting
4. **Fill out the PR template** completely
5. **Request a review** from at least one maintainer
6. Maintainers may request changes — please respond constructively

### PR Checklist

Before submitting, verify:

- [ ] My code follows the existing code style
- [ ] I have tested my changes locally
- [ ] I have not committed `node_modules`, `.env`, or `dist/`
- [ ] My commit messages follow the Conventional Commits format
- [ ] I have updated documentation if needed
- [ ] There are no merge conflicts with `master`

---

## Reporting Bugs

Please [open an issue](https://github.com/RIsHaBHMiShrA2710/LegalAi/issues/new) with the following details:

- **Summary**: A clear, concise description of the bug
- **Steps to Reproduce**: Numbered steps to reliably reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Screenshots/Logs**: If applicable
- **Environment**: OS, Node.js version, browser

---

## Requesting Features

[Open a feature request issue](https://github.com/RIsHaBHMiShrA2710/LegalAi/issues/new) with:

- **Problem Statement**: What problem does your idea solve?
- **Proposed Solution**: How would you implement it?
- **Alternatives Considered**: Any other approaches you thought of?

---

## Code Style

- **Frontend**: Follow standard React best practices. No specific linter is enforced yet, but keep consistent indentation (2 spaces), meaningful variable names, and small, focused components.
- **Backend**: Keep route handlers thin — business logic should live in controllers, not directly in `server.js`.
- **No unused imports**: Clean up any unused imports or variables before committing.
- **Environment secrets**: Never hardcode API keys or secrets in code. Always use `.env` via `dotenv`.

---

## Project Structure

Refer to the [README.md](./README.md) for the full project structure to understand where to add new files.

---

Thank you for contributing! 🙏 Every improvement, no matter how small, makes a difference in helping people understand India's legal system.
