# Contributing to PathFinder 🚀

Thank you for considering contributing to PathFinder! This document provides guidelines for contributing to this project.

---

## 🌟 Ways to Contribute

### 1. 🐛 Report Bugs

Found a bug? Help us fix it!

**Before submitting:**
- Check if the bug has already been reported in [Issues](https://github.com/Nithin-2005-dev/PathFinder/issues)
- Make sure you're using the latest version

**When reporting, include:**
- **Clear description:** What happened vs. what you expected
- **Steps to reproduce:** Detailed steps to recreate the bug
- **Environment:**
  - OS (Windows/Mac/Linux)
  - Browser (Chrome/Firefox/Safari + version)
  - Node.js version
- **Screenshots/Videos:** If applicable
- **Error logs:** Console errors, server logs

**Use this template:**
Bug Description
[Clear description of the bug]

Steps to Reproduce
Go to '...'

Click on '...'

Scroll down to '...'

See error

Expected Behavior
[What should happen]

Actual Behavior
[What actually happened]

Environment
OS: [e.g. Windows 11]

Browser: [e.g. Chrome 120]

Node: [e.g. 20.10.0]

Screenshots
[If applicable]

Additional Context
[Any other relevant information]

text

---

### 2. 💡 Suggest Features

Have an idea to make PathFinder better?

**Before suggesting:**
- Check [existing feature requests](https://github.com/Nithin-2005-dev/PathFinder/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)
- Make sure it aligns with PathFinder's mission

**Use this template:**
Feature Description
[Clear description of the feature]

Problem it Solves
[What problem does this address?]

Proposed Solution
[How should this work?]

Alternatives Considered
[Other approaches you thought about]

Additional Context
[Mockups, examples, etc.]

text

---

### 3. 📝 Improve Documentation

Documentation is crucial! Help make it better:

**What to improve:**
- Fix typos or unclear explanations
- Add missing documentation
- Create tutorials or guides
- Improve code comments
- Update outdated information

**Where to contribute:**
- `README.md` - Main documentation
- `docs/` - Detailed guides
- Inline code comments
- API documentation

---

### 4. 🧪 Add Tests

Help us maintain code quality:

**What we need:**
- Unit tests for utility functions
- Integration tests for API routes
- E2E tests for critical user flows
- Edge case coverage

**Testing stack:**
- Unit: Jest
- E2E: Playwright
- Coverage goal: >80%

---

### 5. 💻 Code Contributions

Ready to write code? Follow these guidelines:

#### **Getting Started**

1. Fork the repository on GitHub
2. Clone your fork
git clone https://github.com/Nithin-2005-dev/PathFinder.git
cd PathFinder

3. Add upstream remote
git remote add upstream https://github.com/Nithin-2005-dev/PathFinder.git

4. Install dependencies
pnpm install

5. Set up environment variables
cp .env.example .env.local

Edit .env.local with your credentials
6. Set up database
pnpm prisma generate
pnpm prisma migrate dev

7. Start development server
pnpm dev

text

#### **Development Workflow**

1. Create a new branch for your feature
git checkout -b feature/amazing-feature

2. Make your changes
... code, code, code ...
3. Run checks before committing
pnpm type-check # TypeScript check
pnpm lint # ESLint
pnpm test # Run tests
pnpm build # Ensure it builds

4. Commit your changes
git add .
git commit -m "feat: add amazing feature"

5. Push to your fork
git push origin feature/amazing-feature

6. Open a Pull Request on GitHub
text

---

## 📋 Code Guidelines

### **TypeScript**

- ✅ Use TypeScript strict mode (no `any` types)
- ✅ Define proper interfaces/types
- ✅ Use meaningful variable names
- ✅ Export types for reusability

**Good:**
interface Project {
id: string;
title: string;
difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}

async function getProject(id: string): Promise<Project> {
const project = await prisma.project.findUnique({ where: { id } });
if (!project) throw new Error('Project not found');
return project;
}

text

**Bad:**
function getProject(id: any): any {
return prisma.project.findUnique({ where: { id } });
}

text

### **React Components**

- ✅ Use functional components with hooks
- ✅ Keep components small and focused
- ✅ Use Server Components by default (Next.js 14)
- ✅ Only use Client Components when needed (`'use client'`)
- ✅ Proper TypeScript props

**Good:**
// Server Component (default)
interface ProjectCardProps {
project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
return (
<div className="rounded-lg border p-4">
<h3 className="text-lg font-bold">{project.title}</h3>
<p className="text-gray-600">{project.description}</p>
<StartButton projectId={project.id} />
</div>
);
}

// Client Component (only button needs interactivity)
'use client';
function StartButton({ projectId }: { projectId: string }) {
const handleStart = () => {
// ... interactive logic
};
return <button onClick={handleStart}>Start Building</button>;
}

text

### **Styling**

- ✅ Use Tailwind CSS utility classes
- ✅ Follow mobile-first approach
- ✅ Use design system tokens (colors, spacing)
- ✅ Keep styles consistent with existing UI

**Good:**
<button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors"> Click Me </button> ```
Bad:

text
<button style={{ backgroundColor: '#3b82f6', padding: '8px 16px' }}>
  Click Me
</button>
API Routes
✅ Validate all inputs with Zod

✅ Return proper HTTP status codes

✅ Handle errors gracefully

✅ Use TypeScript for type safety

Good:

text
import { z } from 'zod';
import { NextResponse } from 'next/server';

const CreateProjectSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(10),
  difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = CreateProjectSchema.parse(body);
    
    const project = await prisma.project.create({
      data: validated,
    });
    
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
Database Queries
✅ Use Prisma for all database operations

✅ Handle null/undefined cases

✅ Use transactions for multiple operations

✅ Optimize with proper indexes

Good:

text
const project = await prisma.project.findUnique({
  where: { id },
  include: {
    skills: {
      include: {
        skill: true
      }
    }
  }
});

if (!project) {
  throw new Error('Project not found');
}
📝 Commit Message Guidelines
Follow Conventional Commits:

Format:

text
<type>(<scope>): <subject>

<body>

<footer>
Types:

feat: New feature

fix: Bug fix

docs: Documentation changes

style: Code style changes (formatting, no logic change)

refactor: Code refactoring

test: Adding/updating tests

chore: Maintenance tasks

Examples:

text
# Feature
feat(auth): add Google OAuth login
feat(projects): implement project recommendation algorithm

# Bug fix
fix(dashboard): resolve skill tree rendering issue
fix(api): handle null user skills in recommendations

# Documentation
docs(readme): update installation instructions
docs(api): add API endpoint documentation

# Refactor
refactor(db): optimize project query performance
refactor(components): extract reusable Button component

# Tests
test(api): add unit tests for recommendation engine
test(e2e): add project completion flow test

# Chore
chore(deps): update Next.js to 14.1.0
chore(ci): add GitHub Actions workflow
🔍 Pull Request Process
Before Submitting
Checklist:

 Code follows project guidelines

 All tests pass (pnpm test)

 Linting passes (pnpm lint)

 Types check (pnpm type-check)

 Build succeeds (pnpm build)

 Documentation updated (if needed)

 Commits follow conventional format

 Branch is up-to-date with main

PR Template
Use this when opening a PR:

text
## Description
[Clear description of what this PR does]

## Type of Change
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to break)
- [ ] Documentation update

## Related Issue
Closes #[issue number]

## How Has This Been Tested?
[Describe the tests you ran]

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Checklist
- [ ] My code follows the project's code style
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing unit tests pass locally
- [ ] Any dependent changes have been merged and published
Review Process
Automated checks: GitHub Actions runs tests/linting

Code review: Maintainer reviews your code

Feedback: Address any requested changes

Approval: Once approved, your PR will be merged

Celebration: 🎉 Your contribution is live!

🎨 Design Guidelines
UI/UX Principles
Clarity: Clear, intuitive interfaces

Consistency: Follow existing design patterns

Accessibility: WCAG 2.1 AA compliance

Responsiveness: Mobile-first design

Performance: Fast, smooth interactions

Color Palette
text
/* Primary */
--blue-500: #3b82f6;
--blue-600: #2563eb;

/* Secondary */
--gray-100: #f3f4f6;
--gray-600: #4b5563;
--gray-900: #111827;

/* Success/Error/Warning */
--green-500: #10b981;
--red-500: #ef4444;
--yellow-500: #f59e0b;
Typography
Headings: font-bold

Body: font-normal

Code: font-mono

🌍 Internationalization (Future)
We plan to support multiple languages. If you'd like to help:

Copy locales/en.json

Translate to your language

Submit PR with locales/[lang].json

Languages needed:

Hindi (हिन्दी)

Spanish (Español)

French (Français)

German (Deutsch)

Portuguese (Português)

And more!

❓ Questions?
Need help?

💬 GitHub Discussions

📧 Email: [nk0402246@gmail.com]


Found a security vulnerability?

⚠️ Do NOT open a public issue

📧 Email: nk0402246@gmail.com

We'll respond within 48 hours

📜 Code of Conduct
Our Pledge
We pledge to make participation in PathFinder a harassment-free experience for everyone, regardless of:

Age, body size, disability

Ethnicity, gender identity/expression

Experience level, education

Socio-economic status, nationality

Personal appearance, race, religion

Sexual identity/orientation

Our Standards
Positive behavior:

✅ Using welcoming, inclusive language

✅ Being respectful of differing viewpoints

✅ Gracefully accepting constructive criticism

✅ Focusing on what's best for the community

✅ Showing empathy towards others

Unacceptable behavior:

❌ Trolling, insulting/derogatory comments

❌ Public or private harassment

❌ Publishing others' private information

❌ Other unprofessional conduct

Enforcement
Violations can be reported to [nk0402246@gmail.com]. All complaints will be reviewed and investigated promptly and fairly.

🎉 Recognition
All contributors will be:

✅ Listed in CONTRIBUTORS.md

✅ Mentioned in release notes

✅ Featured on project website (once live)

Top contributors get:

🏆 Lifetime premium access

🎯 Special "Core Contributor" badge

📣 Social media shoutouts

📄 License
By contributing to PathFinder, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to PathFinder! Together, we're democratizing opportunity discovery for millions. 🚀