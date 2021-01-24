# Temple Blends

## Getting Started
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

## Contribution Guidelines

As a developer, strive to build components that are:

- Standalone: avoid shared dependencies and do not rely on global/application values. Your component should function and look complete even if it’s moved outside the current repo.
- Scoped: avoid polluting global space, your package should not alter the enclosing page or other components on the page.
- Generic: keep components neutral, agnostic to application styles and data sources.
- Consistent: follow established guidelines, inspect existing components for inspiration and respect the lint/format rules.
- Simple: keep components simple, separate building blocks to components as needed.
- Secure: all inputs should be sanitized, as there are no guaranties of trusted data sources.
- Accessible: all interactive elements should be controllable with mouse, keyboard and touch and adhere to WCAG 2.1.


### How to Name Things
In general, keep names simple but meaningful, don’t use abbreviations and avoid pre/suffixes.

**Branches**

Start with `bug/` or `feature/` depending on the task you picked up, followed by a small descriptor in kebab-case, often derived from the issue’s title (e.g.: `feature/add-modal-component`).

**Components**

Use `kebab-case` for files and folders and keep it within 1-2 words. In code, they are referred to using `PascalCase`. 

**Imports**

In general turn the name of the package to `camelCase` or `PascalCase`, you may deviate from this rule for acronyms, or if widespread convention for the given module dictates otherwise (e.g.: `import cx from 'classnames'`).

**Variables/Properties**

Use camelCase. Keep variable and property names simple but meaningful. Don’t use abbreviations and avoid pre/suffixes.

**Files/Folders**

Use `kebab-case` for files and folders and keep names at 1-2 words. When needed, use multiple extensions to denote the type or purpose of the file (e.g: `<component-name>.module.css`).

**Pull Requests**
Similar to branches, include a small descriptor in `Title Case` (e.g.: `Adding Modal Component`).
 

### Commenting code
In general, avoid unnecessary comments. You may utilise comments when there is something that the code can’t convey, think of it as answering the question Why? and leave answering How? and What? to the code.

“You should always write your code as if comments didn't exist. This forces you to write your code in the simplest, plainest, most self-documenting way you can humanly come up with.”
-Jeff Atwood, Coding Horror

“[if your feel your code is too complex to understand without comments] Your code is probably just bad, and hard to understand. Re-write it so that's no longer the case.”
-Sammy Larbi, codeodor.com

Read more: https://blog.codinghorror.com/coding-without-comments/ http://www.codeodor.com/index.cfm/2008/6/18/Common-Excuses-Used-To-Comment-Code-and-What-To-Do-About-Them/2293

### Formatting code
We use ESLint to maintain consistency across the repository. Make sure to enable eslint support in your choice of IDE or Editor: https://eslint.org/docs/user-guide/integrations
