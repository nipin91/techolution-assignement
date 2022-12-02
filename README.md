# Bank Application

This project was generated using [Nx](https://nx.dev).


## To Run/ start Application

Run `npm run all-app` to run all the Applications.

For login use a valid email and random password to login to the applications.


Navigate to http://localhost:4201/ for Indian bank. The app will automatically reload if you change any of the source files.

Navigate to http://localhost:4202/ for American bank. The app will automatically reload if you change any of the source files.

## Applications

[Angular](https://github.com/nipin91/techolution-assignement/tree/main/apps/angular)

[Application B](https://github.com/nipin91/techolution-assignement/tree/main/apps/application-b)

## Libraries
[HOME PAGE](https://github.com/nipin91/techolution-assignement/tree/main/libs/home): Home page used in both the applications.

[About Us PAGE](https://github.com/nipin91/techolution-assignement/tree/main/libs/about-us) : about us page is used in both the applications and only logged in user can view this page http://localhost:4201/profile  http://localhost:4202/profile

[Student list PAGE](https://github.com/nipin91/techolution-assignement/tree/main/libs/student/src/lib/list) : Student List is used in both the applications http://localhost:4201/student/list http://localhost:4202/student/list

[Student Details PAGE](https://github.com/nipin91/techolution-assignement/tree/main/libs/student/src/lib/details) : Student List is used in both the applications http://localhost:4201/student/details/:id http://localhost:4202/student/details/:id

[Shared Library](https://github.com/Abdul-khaderT/Assignment/tree/main/libs/shared) : This library has all the utilities, which are shared across application.  

[Header component](https://github.com/nipin91/techolution-assignement/tree/main/libs/shared/src/lib/header) : which is used in both the applications. Responsible for showing the top navbar in all the pages. Through which user can switch applications and login to the app or visit the profile page once logged in.

[Footer component](https://github.com/nipin91/techolution-assignement/tree/main/libs/shared/src/lib/header) : which is used in both the applications. Responsible for showing the footer in all the pages.

[Application Route](https://github.com/nipin91/techolution-assignement/blob/main/libs/shared/src/lib/app.routes.ts) : which is used in both the applications. Responsible for router for all the pages.



<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Powerful, Extensible Dev Tools**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev)

[30-minute video showing all Nx features](https://nx.dev/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-example/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Caching in the Cloud

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

[Nx Cloud](https://nx.app/)

[Computation Caching Fundamentals](https://blog.nrwl.io/computation-caching-the-fundamentals-behind-nxs-lightning-fast-execution-dc761fe41eb8)

[Computation Caching with NX](https://nx.dev/latest/core-concepts/computation-caching)
